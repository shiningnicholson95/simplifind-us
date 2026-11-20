/* Raven's Roast Coffee — site behaviour. No dependencies. */
(function () {
  'use strict';
  document.documentElement.classList.remove('no-js');

  /* ------------------------------------------------------------------
   * HOURS — fill these in once confirmed with the shop and every page
   * updates (top bar, Visit page, open/closed badge). 24h "HH:MM".
   * Leave as null to show "Call for today's hours".
   * Example: { 0:['08:00','15:00'], 1:['07:00','16:00'], ... 6:['07:00','16:00'] }
   * (0 = Sunday). Use null for a closed day.
   * ------------------------------------------------------------------ */
  var HOURS = null;
  var TZ = 'America/Denver';
  var FORM_ENDPOINT = 'https://simplifi.kinsta.cloud/wp-json/gf/v2/forms/1/submissions';

  var DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  function fmt(t) {
    var p = t.split(':'), h = +p[0], m = p[1];
    var ap = h >= 12 ? 'pm' : 'am';
    h = h % 12 || 12;
    return h + (m === '00' ? '' : ':' + m) + ap;
  }
  function nowInTz() {
    try {
      var parts = new Intl.DateTimeFormat('en-US', { timeZone: TZ, weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).formatToParts(new Date());
      var o = {};
      parts.forEach(function (x) { o[x.type] = x.value; });
      return { day: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(o.weekday), mins: (+o.hour) * 60 + (+o.minute) };
    } catch (e) {
      var d = new Date();
      return { day: d.getDay(), mins: d.getHours() * 60 + d.getMinutes() };
    }
  }
  function toMins(t) { var p = t.split(':'); return (+p[0]) * 60 + (+p[1]); }

  function renderHours() {
    var now = nowInTz();
    var today = HOURS && HOURS[now.day];
    var status = null, line = 'Call for today’s hours';
    if (HOURS) {
      if (today) {
        var open = now.mins >= toMins(today[0]) && now.mins < toMins(today[1]);
        status = open ? 'open' : 'closed';
        line = open ? 'Open now · until ' + fmt(today[1]) : 'Today ' + fmt(today[0]) + '–' + fmt(today[1]);
      } else {
        status = 'closed';
        line = 'Closed today';
      }
    }
    document.querySelectorAll('[data-hours-line]').forEach(function (el) { el.textContent = line; });
    document.querySelectorAll('[data-open-pill]').forEach(function (el) {
      el.textContent = status === 'open' ? 'Open now' : status === 'closed' ? 'Closed now' : 'Call ahead for hours';
      el.classList.toggle('is-open', status === 'open');
      el.classList.toggle('is-closed', status === 'closed');
    });
    document.querySelectorAll('[data-hours-list]').forEach(function (ul) {
      if (!HOURS) return;
      ul.innerHTML = '';
      [1, 2, 3, 4, 5, 6, 0].forEach(function (d) {
        var li = document.createElement('li');
        if (d === now.day) li.className = 'is-today';
        var h = HOURS[d];
        li.innerHTML = '<span>' + DAYS[d] + '</span><span>' + (h ? fmt(h[0]) + ' – ' + fmt(h[1]) : 'Closed') + '</span>';
        ul.appendChild(li);
      });
      ul.hidden = false;
      var fb = ul.parentNode.querySelector('[data-hours-fallback]');
      if (fb) fb.hidden = true;
    });
  }
  renderHours();

  /* Header height (for sticky sub-nav offset) */
  var header = document.querySelector('.site-header');
  function setHdr() { if (header) document.documentElement.style.setProperty('--hdr', header.offsetHeight + 'px'); }
  setHdr();
  window.addEventListener('resize', setHdr);

  /* Mobile nav */
  var toggle = document.querySelector('[data-nav-toggle]');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('is-open', open);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
        toggle.focus();
      }
    });
  }

  /* Reveal on scroll */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* Filter chips + search for FAQ / Terminology */
  document.querySelectorAll('[data-filterable]').forEach(function (root) {
    var buttons = root.querySelectorAll('[data-filter]');
    var groups = root.querySelectorAll('[data-group]');
    var search = root.querySelector('[data-search]');
    var active = 'All';
    function apply() {
      var q = search ? search.value.trim().toLowerCase() : '';
      groups.forEach(function (g) {
        var groupMatch = active === 'All' || g.getAttribute('data-group') === active;
        var any = false;
        g.querySelectorAll('.acc').forEach(function (item) {
          var hit = groupMatch && (!q || item.textContent.toLowerCase().indexOf(q) !== -1);
          item.hidden = !hit;
          if (hit) any = true;
          if (q && hit) item.open = true;
        });
        g.hidden = !any;
      });
    }
    buttons.forEach(function (b) {
      b.addEventListener('click', function () {
        active = b.getAttribute('data-filter');
        buttons.forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
        apply();
      });
    });
    if (search) search.addEventListener('input', apply);
  });

  /* Reviews: show more */
  document.querySelectorAll('[data-more]').forEach(function (btn) {
    var list = document.getElementById(btn.getAttribute('data-more'));
    var label = document.querySelector('[data-more-label]');
    function update() {
      var all = list.querySelectorAll('.review');
      var shown = list.querySelectorAll('.review:not([hidden])').length;
      if (label) label.textContent = 'Showing ' + shown + ' of ' + all.length + ' reviews';
      btn.hidden = shown >= all.length;
    }
    btn.addEventListener('click', function () {
      var hidden = list.querySelectorAll('.review[hidden]');
      for (var i = 0; i < Math.min(6, hidden.length); i++) hidden[i].hidden = false;
      update();
    });
    update();
  });

  /* Click-to-load map (keeps Google off the critical path) */
  document.querySelectorAll('[data-map]').forEach(function (box) {
    function load() {
      if (box.querySelector('iframe')) return;
      var f = document.createElement('iframe');
      f.src = box.getAttribute('data-map');
      f.title = 'Map to Raven’s Roast Coffee';
      f.loading = 'lazy';
      f.referrerPolicy = 'no-referrer-when-downgrade';
      box.appendChild(f);
    }
    var btn = box.querySelector('button');
    if (btn) btn.addEventListener('click', load);
    if ('IntersectionObserver' in window) {
      var mo = new IntersectionObserver(function (en) { if (en[0].isIntersecting) { load(); mo.disconnect(); } }, { rootMargin: '200px' });
      mo.observe(box);
    }
  });

  /* Menu sub-nav active state */
  var menuLinks = document.querySelectorAll('.menu-nav a');
  if (menuLinks.length && 'IntersectionObserver' in window) {
    var map = {};
    menuLinks.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
    var mio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && map[en.target.id]) {
          menuLinks.forEach(function (a) { a.classList.remove('is-active'); });
          map[en.target.id].classList.add('is-active');
          var a = map[en.target.id];
          a.parentNode.parentNode.scrollTo({ left: a.offsetLeft - 16, behavior: 'smooth' });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    Object.keys(map).forEach(function (id) { var s = document.getElementById(id); if (s) mio.observe(s); });
  }

  /* Contact form → Gravity Forms REST */
  var form = document.querySelector('[data-contact-form]');
  if (form) {
    var started = Date.now();
    var params = new URLSearchParams(location.search);
    var topic = params.get('topic');
    if (topic) {
      var sel = form.querySelector('[name=topic]');
      Array.prototype.forEach.call(sel.options, function (o) { if (o.value.toLowerCase().indexOf(topic.toLowerCase()) === 0) sel.value = o.value; });
    }
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = form.querySelector('.form__note');
      var d = new FormData(form);
      note.textContent = '';
      if (!String(d.get('name')).trim() || !String(d.get('email')).trim() || !String(d.get('message')).trim()) {
        note.textContent = 'Please add your name, email and a message.';
        return;
      }
      // Honeypot / too-fast submits: pretend success, send nothing.
      if (d.get('website') || Date.now() - started < 2500) { form.classList.add('is-sent'); return; }
      var btn = form.querySelector('[type=submit]');
      btn.disabled = true;
      btn.textContent = 'Sending…';
      fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          input_1: d.get('name'), input_2: d.get('email'), input_3: d.get('phone') || '',
          input_4: d.get('topic') || 'General question', input_5: d.get('message')
        })
      }).then(function (r) { return r.json(); }).then(function (res) {
        if (res && res.is_valid) {
          form.classList.add('is-sent');
          form.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
          var msgs = res && res.validation_messages ? Object.keys(res.validation_messages).map(function (k) { return res.validation_messages[k]; }).join(' ') : '';
          note.textContent = msgs || 'Something went wrong. Please call us at (970) 586-4326.';
        }
      }).catch(function () {
        note.textContent = 'We couldn’t send that. Please call us at (970) 586-4326.';
      }).then(function () {
        btn.disabled = false;
        btn.textContent = 'Send Message';
      });
    });
  }

  /* Gallery lightbox */
  var shots = Array.prototype.slice.call(document.querySelectorAll('[data-lightbox]'));
  if (shots.length) {
    var lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.setAttribute('role', 'dialog');
    lb.setAttribute('aria-modal', 'true');
    lb.setAttribute('aria-label', 'Photo viewer');
    lb.innerHTML = '<button class="lightbox__close" type="button" aria-label="Close">×</button>' +
      '<button class="lightbox__prev" type="button" aria-label="Previous photo">‹</button>' +
      '<figure><img alt=""><figcaption></figcaption></figure>' +
      '<button class="lightbox__next" type="button" aria-label="Next photo">›</button>';
    document.body.appendChild(lb);
    var lbImg = lb.querySelector('img'), lbCap = lb.querySelector('figcaption'), idx = 0, lastFocus = null;
    function show(i) {
      idx = (i + shots.length) % shots.length;
      lbImg.src = shots[idx].getAttribute('href');
      lbImg.alt = shots[idx].getAttribute('data-caption') || '';
      lbCap.textContent = lbImg.alt;
    }
    function open(i) { lastFocus = document.activeElement; show(i); lb.classList.add('is-open'); document.body.style.overflow = 'hidden'; lb.querySelector('.lightbox__close').focus(); }
    function close() { lb.classList.remove('is-open'); document.body.style.overflow = ''; if (lastFocus) lastFocus.focus(); }
    shots.forEach(function (a, i) { a.addEventListener('click', function (e) { e.preventDefault(); open(i); }); });
    lb.querySelector('.lightbox__close').addEventListener('click', close);
    lb.querySelector('.lightbox__prev').addEventListener('click', function () { show(idx - 1); });
    lb.querySelector('.lightbox__next').addEventListener('click', function () { show(idx + 1); });
    lb.addEventListener('click', function (e) { if (e.target === lb) close(); });
    document.addEventListener('keydown', function (e) {
      if (!lb.classList.contains('is-open')) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') show(idx - 1);
      else if (e.key === 'ArrowRight') show(idx + 1);
    });
    var tx = null;
    lb.addEventListener('touchstart', function (e) { tx = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener('touchend', function (e) {
      if (tx === null) return;
      var dx = e.changedTouches[0].clientX - tx;
      if (Math.abs(dx) > 50) show(idx + (dx < 0 ? 1 : -1));
      tx = null;
    });
  }

  /* Footer year */
  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
