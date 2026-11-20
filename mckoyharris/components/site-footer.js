/* ================================================
   Component: site-footer
   Full four-column footer with services, service
   areas, contact info, payment link, and legal.

   WordPress equivalent: footer.php
   ================================================ */

window.McKoyComponents = window.McKoyComponents || {};

window.McKoyComponents['site-footer'] = function () {

  var starSVG = '<svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
  var stars = starSVG + starSVG + starSVG + starSVG + starSVG;

  var year = new Date().getFullYear();

  /* Google Business Profile links */
  var googleReviewsUrl = 'https://www.google.com/maps?cid=3908907145654752257';
  var googleWriteReviewUrl = 'https://www.google.com/maps/place//data=!4m3!3m2!1s0x42df036d5819e963:0x363f3a56b4bcd401!12e1?source=g.page.m.ia._&amp;laa=nmx-review-solicitation-ia2';

  /* Social profiles — placeholder links until the client's profile URLs are supplied */
  var social = [
    { name: 'Facebook',    url: '#', icon: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>' },
    { name: 'Instagram',   url: '#', icon: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>' },
    { name: 'LinkedIn',    url: '#', icon: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>' },
    { name: 'X (Twitter)', url: '#', icon: '<path d="M4 4l16 16M20 4L4 20"/>' },
    { name: 'YouTube',     url: '#', icon: '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>' }
  ];
  var socialLinks = social.map(function (s) {
    var ext = s.url === '#' ? '' : ' target="_blank" rel="noopener"';
    return '<a href="' + s.url + '" class="footer-social__link" aria-label="McKoy Harris Valuation on ' + s.name + '"' + ext + '>'
      + '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + s.icon + '</svg>'
      + '</a>';
  }).join('');

  return '\
<footer class="site-footer" role="contentinfo">\
\
  <div class="container footer-main">\
\
    <!-- Col 1: Brand -->\
    <div class="footer-brand">\
      <div class="footer-brand__logo">\
        <a href="/mckoyharris/" class="site-logo site-logo--banner" aria-label="McKoy Harris Valuation — Home">\
          <img src="/mckoyharris/images/logo-mckoy-harris-white-horizontal-tagline.png" alt="McKoy Harris Valuation — Trusted Source. Detailed Analysis." width="1325" height="297">\
        </a>\
      </div>\
      <p class="footer-brand__tagline">Certified Residential Appraisals for Greater Philadelphia &amp; Southeastern Pennsylvania.</p>\
\
      <a href="' + googleReviewsUrl + '" class="footer-rating" target="_blank" rel="noopener" aria-label="Rated 5.0 out of 5 from 23 Google reviews">\
        <div class="footer-rating__stars" aria-hidden="true">' + stars + '</div>\
        5.0 · 23 Google Reviews\
      </a>\
      <p class="footer-review-links">\
        <a href="/mckoyharris/reviews/">Read reviews</a> &middot; <a href="' + googleWriteReviewUrl + '" target="_blank" rel="noopener">Write a Google review</a>\
      </p>\
\
      <div class="footer-social" aria-label="Social media">' + socialLinks + '</div>\
\
      <a href="/mckoyharris/payment/" class="footer-payment-link" aria-label="Make a payment through our secure portal">\
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>\
        Make a Payment (CPACharge)\
      </a>\
    </div>\
\
    <!-- Col 2: Services -->\
    <div class="footer-col">\
      <p class="footer-col__label">Services</p>\
      <nav class="footer-links" aria-label="Footer services">\
        <a href="/mckoyharris/residential-appraisal/">Residential Appraisal</a>\
        <a href="/mckoyharris/pre-listing-appraisal/">Pre-Listing</a>\
        <a href="/mckoyharris/pmi-removal-appraisal/">PMI Removal</a>\
        <a href="/mckoyharris/tax-appeal-appraisal/">Tax Assessment Appeal</a>\
        <a href="/mckoyharris/appraisal-review/">Appraisal Review</a>\
        <a href="/mckoyharris/divorce-appraisal/">Divorce Appraisals</a>\
        <a href="/mckoyharris/estate-probate-appraisal/">Estate &amp; Probate</a>\
        <a href="/mckoyharris/date-of-death-appraisal/">Date of Death</a>\
        <a href="/mckoyharris/bankruptcy-appraisal/">Bankruptcy</a>\
        <a href="/mckoyharris/foreclosure-appraisal/">Foreclosure &amp; REO</a>\
        <a href="/mckoyharris/pricing/" style="color:var(--accent-light);font-weight:600;margin-top:0.5rem">View Pricing →</a>\
      </nav>\
    </div>\
\
    <!-- Col 3: Service Areas -->\
    <div class="footer-col">\
      <p class="footer-col__label">Service Areas</p>\
      <nav class="footer-links" aria-label="Footer service areas">\
        <a href="/mckoyharris/service-areas/chester-county/">Chester County, PA</a>\
        <a href="/mckoyharris/service-areas/delaware-county/">Delaware County, PA</a>\
        <a href="/mckoyharris/service-areas/philadelphia/">Philadelphia, PA</a>\
        <a href="/mckoyharris/service-areas/montgomery-county/">Montgomery County, PA</a>\
        <a href="/mckoyharris/service-areas/" style="color:var(--accent-light);font-weight:600;margin-top:0.5rem">View All Areas →</a>\
      </nav>\
      <p class="footer-col__label" style="margin-top:1.75rem">Company</p>\
      <nav class="footer-links" aria-label="Footer company links">\
        <a href="/mckoyharris/about/">About McKoy Harris</a>\
        <a href="/mckoyharris/reviews/">Client Reviews</a>\
        <a href="/mckoyharris/faq/">FAQs</a>\
        <a href="/mckoyharris/pricing/">Pricing</a>\
      </nav>\
    </div>\
\
    <!-- Col 4: Contact -->\
    <div class="footer-col">\
      <p class="footer-col__label">Contact</p>\
      <ul class="footer-contact-list" aria-label="Contact information">\
        <li class="footer-contact-item">\
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.46a16 16 0 0 0 6.29 6.29l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>\
          <a href="tel:+16108710318">(610) 871-0318</a>\
        </li>\
        <li class="footer-contact-item">\
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>\
          <a href="mailto:info@mckoyharris.com">info@mckoyharris.com</a>\
        </li>\
        <li class="footer-contact-item">\
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>\
          <span>P.O. Box 566<br>West Chester, PA 19381</span>\
        </li>\
        <li class="footer-contact-item">\
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>\
          <span>Mon–Fri, 8am–7pm</span>\
        </li>\
      </ul>\
      <a href="/mckoyharris/request-appraisal/" class="btn btn--accent btn--sm btn--full" style="margin-top:1.5rem">Request an Appraisal</a>\
      <a href="/mckoyharris/payment/" class="btn btn--ghost btn--sm btn--full" style="margin-top:0.625rem;border-color:rgba(255,255,255,0.2)">Make a Payment</a>\
    </div>\
\
  </div><!-- /footer-main -->\
\
  <!-- Bottom bar -->\
  <div class="footer-bottom">\
    <div class="container" style="display:flex;flex-direction:column;gap:0.75rem;align-items:center;text-align:center;width:100%">\
      <p class="footer-bottom__copy">\
        &copy; ' + year + ' McKoy Harris Ventures LLC dba McKoy Harris Valuation. All rights reserved.\
        &nbsp;&middot;&nbsp; PA Certified Residential Appraiser License #RL140441\
        &nbsp;&middot;&nbsp; USPAP Compliant\
      </p>\
      <nav class="footer-bottom__links" aria-label="Legal navigation">\
        <a href="/mckoyharris/privacy-policy/">Privacy Policy</a>\
        <a href="/mckoyharris/terms-of-service/">Terms of Service</a>\
        <a href="/mckoyharris/sitemap.xml">Sitemap</a>\
        <a href="/mckoyharris/faq/">FAQs</a>\
        <a href="/mckoyharris/request-appraisal/">Contact</a>\
      </nav>\
    </div>\
  </div>\
\
</footer>';
};
