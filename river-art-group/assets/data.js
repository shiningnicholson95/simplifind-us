/* River Art Group — shared site data.
   All facts sourced from riverartgroup.com and on-site photographs.
   Loaded on every page as window.RAG. */
(function () {
  const ORG = {
    name: "River Art Group",
    email: "riverartgroup@riverartgroup.com",
    emailHref: "mailto:riverartgroup@riverartgroup.com",
    gallery: "River Art Group Gallery",
    tagline: "Offering unique art and cultivating creative community since 1947",
    since: 1947,
    memberCount: "150+",
    address1: "418 Villita St, Suite #1400",
    address2: "San Antonio, TX 78205",
    neighborhood: "La Villita Artisan Village",
    phone: "210-226-8752",
    phoneHref: "tel:2102268752",
    hours: "Open daily, 10:00 am – 6:00 pm",
    hoursShort: "Mon–Sun · 10–6",
    membershipEmail: "riverartgroup@riverartgroup.com",
    membershipDirector: "Shelley Christ-Pizana",
    shop: "https://riverartgalleries.com/",
    donate: "https://riverartgalleries.com/products/donation-to-river-art-gallery",
    newMemberFee: "https://riverartgalleries.com/products/new-member-application-fee",
    facebook: "https://www.facebook.com/RiverArtGroup",
    instagram: "https://www.instagram.com/river_art_group_gallery/",
    mapQuery: "River+Art+Group+Gallery+418+Villita+St+San+Antonio+TX+78205",
    media: ["Acrylic", "Oil", "Watercolor", "Pen & Ink", "Pastel", "Photography", "Clay", "Metal", "Wood", "Fine Art Reproductions"]
  };

  // Primary navigation — consistent across all pages.
  const NAV = [
    { label: "Home", href: "index.html" },
    { label: "About", href: "about.html" },
    { label: "Artists", href: "artists.html" },
    { label: "Gallery", href: "gallery.html" },
    { label: "Events", href: "events.html" },
    { label: "Membership", href: "membership.html" },
    { label: "Visit", href: "visit.html" },
    { label: "Contact", href: "contact.html" }
  ];

  // Artworks currently documented on site (real label data from gallery photos).
  const ARTWORKS = [
    {
      id: "tower-at-sunset",
      title: "Tower at Sunset",
      artist: "Wendell Fuqua",
      artistId: "wendell-fuqua",
      medium: "Woodcut Print",
      category: "Pen & Ink",
      categoryGroup: "Printmaking",
      edition: "17 / 50",
      price: "$122",
      available: true,
      img: "assets/img/art-tower-sunset.jpg",
      alt: "Woodcut print of San Antonio's Tower of the Americas against a glowing orange sunset, by Wendell Fuqua",
      desc: "A signed, limited-edition woodcut depicting San Antonio's Tower of the Americas silhouetted against a glowing sunset — a hand-pulled relief print rendered in layered warm tones."
    },
    {
      id: "cassard-fly",
      title: "Cassard Fly",
      artist: "Bobbye Porter",
      artistId: "bobbye-porter",
      medium: "Watercolor",
      category: "Watercolor",
      categoryGroup: "Painting",
      edition: "Original",
      price: "$45",
      available: true,
      img: "assets/img/art-cassard-fly.jpg",
      alt: "Watercolor study of a classic salmon fishing fly in red, gold and black, framed in an ornate dark frame, by Bobbye Porter",
      desc: "A finely observed watercolor study of a classic salmon fly, rendered with crisp linework and luminous color in an ornate antique frame."
    },
    {
      id: "patterns-1",
      title: "Patterns 1",
      artist: "Jeffrey Yentz",
      artistId: "jeffrey-yentz",
      medium: "Pen & Ink",
      category: "Pen & Ink",
      categoryGroup: "Drawing",
      edition: "Original · includes easel",
      price: "$40",
      available: true,
      img: "assets/img/art-patterns.jpg",
      alt: "Small pen-and-ink and color quilt-pattern study with geometric blocks in green, gold, rose and brown, by Jeffrey Yentz",
      desc: "An intricate quilt-inspired pen-and-ink miniature layering geometric blocks in earthy greens, golds and rose. Sold with its display easel."
    },
    {
      id: "celusniak-tree",
      title: "Tree of Life",
      artist: "Chris G. Celusniak",
      artistId: "chris-celusniak",
      medium: "Pen & Ink (Reproduction)",
      category: "Pen & Ink",
      categoryGroup: "Drawing",
      edition: "Reproduction",
      price: "Inquire",
      available: true,
      img: "assets/img/art-tree-of-life.jpg",
      alt: "Highly detailed black-and-white pen-and-ink drawing of an ornate tree of life beneath a ringed planet and starry sky, by Chris G. Celusniak",
      desc: "A densely detailed pen-and-ink composition — an ornate tree of life rising beneath a ringed planet and a field of stars. Available as a fine-art reproduction."
    }
  ];

  // A few representative member artists with documented work.
  const FEATURED_ARTISTS = [
    {
      id: "wendell-fuqua", name: "Wendell Fuqua", media: ["Printmaking", "Woodcut"],
      role: "Member Artist",
      statement: "I work in woodcut — a relief process where the image is carved into a wood block, inked, and hand-pulled. The grain and the cut shape every line, so each print carries the mark of the block it came from.",
      bio: "Wendell Fuqua is a River Art Group member artist specializing in woodcut relief printmaking. His limited-edition print Tower at Sunset captures one of San Antonio's most recognizable landmarks.",
      img: "assets/img/art-tower-sunset.jpg", works: ["tower-at-sunset"]
    },
    {
      id: "bobbye-porter", name: "Bobbye Porter", media: ["Watercolor"],
      role: "Member Artist",
      statement: "I'm drawn to small, precise subjects — the kind of thing you have to lean in to really see. Watercolor lets me keep that delicacy while still building rich color.",
      bio: "Bobbye Porter is a River Art Group member artist working in watercolor, with a focus on finely detailed small-format studies such as her framed work Cassard Fly.",
      img: "assets/img/art-cassard-fly.jpg", works: ["cassard-fly"]
    },
    {
      id: "jeffrey-yentz", name: "Jeffrey Yentz", media: ["Pen & Ink", "Drawing"],
      role: "Member Artist",
      statement: "Pattern is its own kind of storytelling. I build my miniatures block by block, the way a quilt comes together, letting color and line find a rhythm across the surface.",
      bio: "Jeffrey Yentz is a River Art Group member artist working in pen and ink. His miniature Patterns 1 layers geometric, quilt-like motifs in earthy color.",
      img: "assets/img/art-patterns.jpg", works: ["patterns-1"]
    },
    {
      id: "chris-celusniak", name: "Chris G. Celusniak", media: ["Pen & Ink", "Drawing"],
      role: "Member Artist",
      statement: "I lose myself in detail. A single drawing can hold hundreds of hours of linework — birds, leaves, machinery, stars — all woven into one continuous world.",
      bio: "Chris G. Celusniak is a River Art Group member artist known for densely detailed pen-and-ink compositions, available in the gallery as originals and fine-art reproductions.",
      img: "assets/img/art-tree-of-life.jpg", works: ["celusniak-tree"]
    },
    {
      id: "shelley-christ-pizana", name: "Shelley Christ-Pizana", media: ["Mosaic"],
      role: "Membership Director",
      statement: "River Art Group has been a home for San Antonio artists for generations. As Membership Director I get to welcome the next ones in.",
      bio: "Shelley Christ-Pizana is a River Art Group member artist working in mosaic and serves as the group's Membership Director, guiding prospective members through the jury process.",
      img: "assets/img/cat-originals.jpg", works: []
    },
    {
      id: "pamela-clarkson", name: "Pamela Clarkson", media: ["Mixed Media"],
      role: "Member Artist",
      statement: "",
      bio: "Pamela Clarkson is a River Art Group member artist. Her work is part of the gallery's rotating collection of original art by Texas artists.",
      img: "assets/img/cat-originals.jpg", works: []
    }
  ];

  // Full member roster (riverartgroup.com/our-artists).
  const ROSTER = ["Rita Albrecht","Kathy Allen","Ann Eason Andersson","Ana Marie Arrieta","Alice Aubry","Alan R. Avery","Kimberly Barker","Margie Barker","JoAnn Beissner","Motoe Belote","Magali Benavides","Pat Bentine","Susan Best","Flora Biggs","Dawn Boult","Paul G. Brinkmann","Katherine Patten Brooks","Victoria Brown","Barbara Brunner","David Carlson","Becky Carr","Katherine Carey","Cindy Silvers Carter","Constance W. Cash","Chris G. Celusniak","Debbie Celusniak","Shelley Christ-Pizana","Wanita Christensen","Kim Clark","Pamela Clarkson","Ilna Colemere","Jim Collier","Erin Creese","Barbara Ann Cross","Laurel Cyrene","Lee Czapla","Cheryl Damschen","Glenda L. Deal","Debbie DeLaRosa","Michelle Del Toro","Patricia J. Deltz","Maria T. Diaz","Kathleen Dietz","Gina Eby","Lucille Edgarian","Marc Eisenberg","Lydia Evans","Bill K. Finley","Karen Fodge","Barbara Fowler","Julene Franki","Irene A. Frazier","Noma Freeman","Wendell Fuqua","Galo Garcia Jr.","Gloria Garcia","Barbara Garstecki","Juanita Garza","Robert Garza","Joy Gibson","Sage Gibson","Sally Gildart","Nellie Gill","Pat Glenn","Susan Gleye","M. Donna Good","Lisa Gonzalez","John M. Gueldner","Jennifer Guerra","Maria Guerrero","Acayla Haile","Sarah Hairgrove","Marilyn Hamilton","Shirley R. Hammett","Carole Hartman-King","Irma Jean Henderson","Nora Hernandez","Debbie Hill","James Mike Hinkle","Marianne H. Hinojosa","Sue Hosack","Hawkins Huey","Gail Jackson","Norma L. Jaksik","Betty L. Jameson","George Jameson","Janice Joplin","Jeton Kellogg","Byron Kelly","Kris Kelson","Sandra Kinslow","Sharon M. Kotzur","Rose Alice Kuehner","Robert E. Kunert","Mary Ladd","Flo Landsteiner","Nell Latham","Jacqueline A. Lauver","Donna Legendre-Hofmann","Kandy S. Lilly","Voni Lineberger","Katie Loughman","Imogene Luhrman","Marilu Mann","Susan Mapes","Roxanne Markline","Symone Martinez","Virginia (Betty) Mathis","Mable McAdams","Karen A. McCauley","Julie A. McCollum","Jeanie McCraw","Marjorie H. McFarland","Beth McLeod","Josephine McMahon","Christopher Mendez","Jannine Meszler","Albert C. Metts","Doug Meyer","Joan Sears Miller","Doug Mischer","Linda Monson","Janice O. Montieth","Susie Moore","Cindy Morawski","Barbie Moroney","Brent Mosher","Maureen Mosher","Martha J. Neathery","Denise (Dee) Lund Nelson","Lafaye Newkirk","Bev J. Nicholson","Estelle R. Nixon","Patricia Norman","D'ann Owen","Christine Patterson","Ann Pearce","Thomas Pehl","Nancy A. Pennington","Abigail Perales","Izetta Perkins","Patricia Perryman","Rose Marie Peschke","Jo M. Pollock","Bobbye Porter","Dick Porter","John Ramones","Jean Ann Reeves","Lilly Lerner Reilley","Robert G. Richter","Elaine Ries","Doris A. Rives","Connie Roberts","Alfredo Rodriguez","Isela Rodriguez","Kathleene Runnels","Gail Rutledge","Sylvia St. Jean","Michael S. St. John","Miosotis Saldana","Emily F. Saylors","Cathern Scheel","George Schwegmann","Cecilia M. Shadrock","Mary Shepard","Mary Silver","Glenn E. Smiley","Vera Smith","Alice Smrcka","Douglas Stewart","Maria (Malena) Stidham","Sheila Swanson","Peter Szarmach","Barbara Tarsikes","Curtisine Taylor","Irena Taylor","Michael Tidwell","Cynthia A. Todd","Brigitte Tuttle","Geri VanHeuverswyn","Marie Valero","Adolfo Vigil","Ann Wadsworth","Pakalie Walker","Jennifer Warner","Jill Wilson","Sue N. Wilson","Jeffrey Yentz"];

  const EVENTS = [
    {
      id: "pride-2026", name: "Artist Spotlight Show — San Antonio Pride River Parade",
      date: "Saturday, May 30, 2026", time: "10:00 am – 6:00 pm",
      kind: "Special Exhibition", status: "upcoming",
      blurb: "River Art Group hosts an Artist Spotlight Show during the annual San Antonio Pride River Parade. Stop by the gallery in La Villita to meet member artists and see new work.",
      cta: { label: "Plan your visit", href: "visit.html" }
    },
    {
      id: "riverartober-2026", name: "RiverArtober",
      date: "First weekend of October 2026", time: "All weekend",
      kind: "Outdoor Art Festival", status: "upcoming",
      blurb: "Our signature annual outdoor art festival in La Villita, organized and sponsored by River Art Group. A full weekend of original art, member artists, and live creative community along the River Walk.",
      cta: { label: "Follow for dates", href: "https://www.instagram.com/river_art_group_gallery/" }
    },
    {
      id: "members-competition", name: "Annual Members-Only Competition",
      date: "Held each year", time: "Gallery hours",
      kind: "Member Exhibition", status: "annual",
      blurb: "Each year River Art Group runs a juried members-only competition celebrating the breadth of work across our membership — from oil and watercolor to clay, metal, and wood.",
      cta: { label: "About membership", href: "membership.html" }
    },
    {
      id: "gallery-openings", name: "Gallery Receptions & Smaller Events",
      date: "Throughout the year", time: "Varies",
      kind: "Community", status: "ongoing",
      blurb: "Beyond our signature festivals, River Art Group hosts a number of smaller events, receptions, and shows throughout the year. Follow us on social media to stay updated.",
      cta: { label: "Follow on Facebook", href: "https://www.facebook.com/RiverArtGroup" }
    }
  ];

  // ---- Product catalog (Phase 2) ----
  // Categories support future additions; each has a stable slug used in product.html / products.html.
  const CATEGORIES = [
    { slug: "drawing", name: "Drawing", blurb: "Pen & ink, pencil, colored pencil, scratchboard and charcoal — originals and reproduction prints by River Art Group members.", medium: "Drawing" },
    { slug: "mixed-media", name: "Mixed Media", blurb: "Two or more media layered into a single original work — texture, collage and paint brought together on one surface.", medium: "Mixed media" },
    { slug: "oil-paintings", name: "Oil Paintings", blurb: "Original oils and framed canvas reproductions, from intimate studies to statement landscapes of South Texas.", medium: "Oil on canvas" },
    { slug: "photography", name: "Photography", blurb: "Fine-art photography of the San Antonio River Walk, Texas landscapes and wildlife — matted and metal prints by member photographers.", medium: "Photographic print" },
    { slug: "sculpture", name: "Sculpture", blurb: "Three-dimensional work in metal, wood and mixed materials — from tabletop pieces to statement installations by River Art Group sculptors.", medium: "Sculpture" },
    { slug: "jewelry", name: "Jewelry", blurb: "Handmade jewelry in copper, sterling silver and natural stone — bracelets, earrings, necklaces and rings by member metalsmiths.", medium: "Handmade jewelry" }
  ];

  const CDN = "https://riverartgalleries.com/cdn/shop/files/";
  const img = (f, w) => CDN + f + "&width=" + (w || 900);

  // Products imported from the three River Art Galleries collections (real titles, artists, prices & artwork).
  const PRODUCTS = [
    // --- Drawing ---
    { id:"brooklyn-bridge", title:"Brooklyn Bridge", artist:"Jim Lewis", category:"Drawing", categorySlug:"drawing", medium:"Pen & ink drawing", price:"$125", priceVal:125, available:true, img:img("IMG_0230.jpg?v=1703098609"), desc:"A crisp pen-and-ink rendering of the Brooklyn Bridge, its cables and arches built up in fine, deliberate linework." },
    { id:"butterflies-are-free", title:"Butterflies Are Free", artist:"Jeffrey Yentz", category:"Drawing", categorySlug:"drawing", medium:"Ink & color drawing", price:"$350", priceVal:350, available:true, img:img("IMG_0803.heic?v=1724341871"), desc:"A lively drawing of butterflies in flight, layering pattern and color in Jeffrey Yentz's signature graphic style." },
    { id:"dancing-in-the-rain", title:"Dancing In The Rain", artist:"Jeffrey Yentz", category:"Drawing", categorySlug:"drawing", medium:"Ink & color drawing", price:"$350", priceVal:350, available:true, img:img("IMG_0805.heic?v=1724341919"), desc:"Movement and weather caught in line and wash — a figure dancing through a downpour, rendered with playful energy." },
    { id:"frida", title:"Frida", artist:"Jim Lewis", category:"Drawing", categorySlug:"drawing", medium:"Pen & ink drawing", price:"$125", priceVal:125, available:true, img:img("IMG_0224_2916d450-387f-4ea0-9031-ce945903690b.jpg?v=1703097812"), desc:"A portrait study of Frida Kahlo, her gaze and floral crown drawn in confident, expressive ink." },
    { id:"lending-a-hand", title:"Lending A Hand", artist:"Jeffrey Yentz", category:"Drawing", categorySlug:"drawing", medium:"Ink & color drawing", price:"$300", priceVal:300, available:true, img:img("IMG_0800.heic?v=1724341958"), desc:"A warm, narrative drawing about generosity and connection, composed with Yentz's bold line and pattern." },
    { id:"parrot", title:"Parrot", artist:"Jim Lewis", category:"Drawing", categorySlug:"drawing", medium:"Pen & ink drawing", price:"$125", priceVal:125, available:true, img:img("IMG_0236.jpg?v=1703098290"), desc:"A characterful parrot study — feathers and form built from dense, controlled pen-and-ink hatching." },

    // --- Mixed Media ---
    { id:"idea-exchange-original", title:"Idea Exchange", artist:"Byron Kelly", category:"Mixed Media", categorySlug:"mixed-media", medium:"Mixed media on panel", price:"$90", priceVal:90, available:false, img:img("IMG_1687.heic?v=1779901144"), desc:"An abstract mixed-media original from Byron Kelly's series on connection and the trading of ideas." },
    { id:"crossed-paths-original", title:"Crossed Paths", artist:"Byron Kelly", category:"Mixed Media", categorySlug:"mixed-media", medium:"Mixed media on panel", price:"$90", priceVal:90, available:true, img:img("IMG_1684.heic?v=1779901144"), desc:"Intersecting lines and layered texture explore the chance meetings that change a course — an original mixed-media work." },
    { id:"pure-flow-original", title:"Pure Flow", artist:"Byron Kelly", category:"Mixed Media", categorySlug:"mixed-media", medium:"Mixed media on panel", price:"$90", priceVal:90, available:true, img:img("IMG_1685.heic?v=1779901144"), desc:"Continuous, current-like movement carried across the surface in layered media — an original by Byron Kelly." },
    { id:"possibilities-pipeline-original", title:"Possibilities Pipeline", artist:"Byron Kelly", category:"Mixed Media", categorySlug:"mixed-media", medium:"Mixed media on panel", price:"$90", priceVal:90, available:true, img:img("IMG_1686.heic?v=1779901144"), desc:"Channels of color and form suggest ideas in motion — a vivid original mixed-media composition." },
    { id:"a-diverse-appetite-original", title:"A Diverse Appetite", artist:"Byron Kelly", category:"Mixed Media", categorySlug:"mixed-media", medium:"Mixed media on panel", price:"$90", priceVal:90, available:true, img:img("IMG_1688.heic?v=1779900981"), desc:"A bold, appetite-for-everything abstract layering shape, texture and color into one original work." },
    { id:"the-journey-original", title:"The Journey", artist:"Byron Kelly", category:"Mixed Media", categorySlug:"mixed-media", medium:"Mixed media on panel", price:"$90", priceVal:90, available:true, img:img("IMG_1689.heic?v=1779900282"), desc:"A meandering, layered path across the panel — Byron Kelly's original meditation on the road taken." },
    { id:"bobby-duck", title:"Bobby Duck", artist:"Katherine Carey", category:"Mixed Media", categorySlug:"mixed-media", medium:"Mixed media", price:"$120", priceVal:120, available:true, img:img("IMG_1452_f98342c4-1a53-43f2-9d9f-f975077430f6.heic?v=1767543365"), desc:"A charming mixed-media duck full of personality, by Katherine Carey." },
    { id:"joe", title:"Joe", artist:"Katherine Carey", category:"Mixed Media", categorySlug:"mixed-media", medium:"Mixed media", price:"$120", priceVal:120, available:true, img:img("IMG_1450_eaa3326c-4cb3-41c9-9d40-caf4ea5c1aa2.heic?v=1767543160"), desc:"A companion mixed-media portrait — 'Joe' the duck, rendered with warmth and humor by Katherine Carey." },

    // --- Oil Paintings ---
    { id:"golden-mane-canvas-reproduction", title:"Golden Mane — Canvas Reproduction, Framed", artist:"Kathy Allen", category:"Oil Paintings", categorySlug:"oil-paintings", medium:"Framed canvas reproduction", price:"$95", priceVal:95, available:true, img:img("IMG_6841.jpg?v=1772920904"), desc:"A framed canvas reproduction of Kathy Allen's lion study, its golden mane painted in warm, sunlit strokes." },
    { id:"chow-time", title:"Chow Time", artist:"Kathy Allen", category:"Oil Paintings", categorySlug:"oil-paintings", medium:"Oil on canvas", price:"$285", priceVal:285, available:true, img:img("IMG_6839_1a188c5c-9e4c-4021-ae14-363905af2be6.jpg?v=1772920513"), desc:"A characterful animal portrait at feeding time, painted in oil with rich, confident color by Kathy Allen." },
    { id:"rooftop", title:"Rooftop", artist:"Jay Lauver", category:"Oil Paintings", categorySlug:"oil-paintings", medium:"Oil on canvas", price:"$110", priceVal:110, available:true, img:img("IMG_0022.jpg?v=1750954122"), desc:"A quiet study of rooftops and light, painted in oil by Jay Lauver." },
    { id:"a-thorny-patch", title:"A Thorny Patch", artist:"Jay Lauver", category:"Oil Paintings", categorySlug:"oil-paintings", medium:"Oil on canvas", price:"$96", priceVal:96, available:true, img:img("IMG_0019.jpg?v=1750953155"), desc:"Cactus and bramble caught in South Texas light — an oil landscape with grit and warmth by Jay Lauver." },
    { id:"dawn", title:"Dawn", artist:"Jay Lauver", category:"Oil Paintings", categorySlug:"oil-paintings", medium:"Oil on canvas", price:"$75", priceVal:75, available:true, img:img("IMG_5317.jpg?v=1740506958"), desc:"First light over the landscape, painted in soft oil tones by Jay Lauver." },
    { id:"sunken-gardens", title:"Sunken Gardens", artist:"Jay Lauver", category:"Oil Paintings", categorySlug:"oil-paintings", medium:"Oil on canvas", price:"$95", priceVal:95, available:true, img:img("IMG_5315.jpg?v=1740506384"), desc:"San Antonio's Japanese Tea Garden in oil — lush greens and stone paths rendered by Jay Lauver." },
    { id:"silent-huntress", title:"Silent Huntress", artist:"Kathy Allen", category:"Oil Paintings", categorySlug:"oil-paintings", medium:"Oil on canvas", price:"$525", priceVal:525, available:true, img:img("IMG_4708.jpg?v=1727035604"), desc:"A poised wild cat at the edge of movement — a larger oil statement piece by Kathy Allen." },
    { id:"along-the-riverwalk", title:"Along the Riverwalk", artist:"Jay Lauver", category:"Oil Paintings", categorySlug:"oil-paintings", medium:"Oil on canvas", price:"$250", priceVal:250, available:true, img:img("IMG_0776.jpg?v=1719756212"), desc:"The San Antonio River Walk in oil — dappled water, cypress and color, painted by Jay Lauver." },
    { id:"historical-novel", title:"Historical Novel", artist:"Jay Lauver", category:"Oil Paintings", categorySlug:"oil-paintings", medium:"Oil on canvas", price:"$120", priceVal:120, available:true, img:img("IMG_0772.jpg?v=1719756610"), desc:"A quiet still life with a well-read book, painted in warm oil by Jay Lauver." },
    { id:"salt-marsh-iii", title:"Salt Marsh III", artist:"Irena Taylor", category:"Oil Paintings", categorySlug:"oil-paintings", medium:"Oil on canvas", price:"$450", priceVal:450, available:true, img:img("20240611_144401_resized.jpg?v=1718138424"), desc:"Coastal marsh grasses under wide sky — the third in Irena Taylor's atmospheric salt-marsh series." },
    { id:"salt-marsh-i", title:"Salt Marsh I", artist:"Irena N. Taylor", category:"Oil Paintings", categorySlug:"oil-paintings", medium:"Oil on canvas", price:"$450", priceVal:450, available:true, img:img("20240611_2024-06-11T20_31_07.126Z.png?v=1718137748"), desc:"The first of Irena Taylor's salt-marsh oils — tidal light and reed in a low, luminous palette." },
    { id:"texas-blue-carpet", title:"Texas Blue Carpet", artist:"Irena N. Taylor", category:"Oil Paintings", categorySlug:"oil-paintings", medium:"Oil on canvas", price:"$1,200", priceVal:1200, available:true, img:img("image_f96603e9-804c-4825-a26f-19d3dc25d530.jpg?v=1717195573"), desc:"A sweeping field of Texas bluebonnets — Irena Taylor's largest statement oil in the collection." },

    // --- Photography ---
    { id:"riverwalk-christmas-2", title:"Riverwalk Christmas #2", artist:"Mark Holly", category:"Photography", categorySlug:"photography", medium:"Matted photographic print, 11×14", price:"$40", priceVal:40, available:true, img:img("msh-1376-RiverwalkX-mas_2.jpg?v=1708533106"), desc:"The San Antonio River Walk aglow at Christmas — lights reflected on the water in a richly colored photographic print." },
    { id:"alamo-bluebonnets-metal", title:"Alamo in Bluebonnets — 12×18 Metal Print", artist:"Mark Holly", category:"Photography", categorySlug:"photography", medium:"Metal print, 12×18", price:"$245", priceVal:245, available:true, img:img("msh-1333-AlamoinBluebonnets12x18onMetal.jpg?v=1712689212"), desc:"The Alamo framed by a field of Texas bluebonnets, printed on metal for luminous, durable color." },
    { id:"colorful-umbrellas-3", title:"Colorful Umbrellas #3", artist:"Mark Holly", category:"Photography", categorySlug:"photography", medium:"Matted photographic print, 11×14", price:"$40", priceVal:40, available:true, img:img("msh-1370-ColorfulUmbrellas1-8x10to11x14Mat_23606899-d8c0-4ca8-b4b7-09fbe3c7e7f0.jpg?v=1705517802"), desc:"A canopy of bright umbrellas over the River Walk — a joyful burst of color caught in a single frame." },
    { id:"fishing-by-starlight", title:"Fishing by Starlight", artist:"Mark Holly", category:"Photography", categorySlug:"photography", medium:"Matted photographic print, 8×10", price:"$25", priceVal:25, available:true, img:img("msh-1371-FishingbyStarlight-5x7to8x10Mat.jpg?v=1705516795"), desc:"A quiet nocturne — a lone figure fishing beneath a field of stars, printed in deep, atmospheric tones." },
    { id:"large-oak-bluebonnets-sunset", title:"Large Oak in Bluebonnets Sunset", artist:"Mark Holly", category:"Photography", categorySlug:"photography", medium:"Matted photographic print, 11×14", price:"$40", priceVal:40, available:true, img:img("msh-1199-LgOakAtBluebonnetSunset_e8d2d25c-fca9-4466-9717-f99a3444158c.jpg?v=1744828622"), desc:"A grand live oak standing in a bluebonnet field at sunset — quintessential Texas hill-country light." },
    { id:"riverwalk-green-umbrellas-2", title:"Riverwalk Green Umbrellas #2", artist:"Mark Holly", category:"Photography", categorySlug:"photography", medium:"Matted photographic print, 11×14", price:"$40", priceVal:40, available:true, img:img("msh-1378-RiverwakGreenUmbrellas.jpg?v=1708533319"), desc:"Green umbrellas and dappled water along the River Walk — a fresh, cooling take on a San Antonio landmark." },

    // --- Sculpture ---
    { id:"chime-tree", title:"Chime Tree", artist:"Peter Szarmach", category:"Sculpture", categorySlug:"sculpture", medium:"Mixed-media sculpture", price:"$50", priceVal:50, available:true, img:img("ChimeTree.jpg?v=1778688242"), desc:"A delicate tree-form sculpture hung with chimes — sound and shape brought together by Peter Szarmach." },
    { id:"foxes-and-ravens-chess-set", title:"The Foxes and the Ravens Chess Set", artist:"Gina Eby", category:"Sculpture", categorySlug:"sculpture", medium:"Sculpted chess set", price:"$1,200", priceVal:1200, available:true, img:img("IMG_1630_63bca453-888c-4c99-a93a-d0262f12fcff.jpg?v=1774030876"), desc:"A one-of-a-kind sculpted chess set pitting foxes against ravens — every piece hand-formed by Gina Eby." },
    { id:"test-drive", title:"Test Drive", artist:"Gina Eby", category:"Sculpture", categorySlug:"sculpture", medium:"Sculpture", price:"$350", priceVal:350, available:true, img:img("IMG_1575.jpg?v=1771619438"), desc:"A playful, characterful sculpture from Gina Eby, full of movement and wit." },
    { id:"where-does-the-trip-take-us", title:"Where Does The Trip Take Us?", artist:"Marc Eisenberg", category:"Sculpture", categorySlug:"sculpture", medium:"Sculpture", price:"$2,000", priceVal:2000, available:true, img:img("Trip.jpg?v=1753931105"), desc:"An ambitious statement sculpture by Marc Eisenberg exploring journey, direction and the unknown." },
    { id:"mothers-love", title:"Mother's Love", artist:"John Ramones", category:"Sculpture", categorySlug:"sculpture", medium:"Sculpture", price:"$450", priceVal:450, available:true, img:img("Resized_20240706_181633_1.jpg?v=1724261098"), desc:"A tender figurative sculpture capturing the bond between mother and child, carved by John Ramones." },
    { id:"indian-spirit-animal", title:"Indian Spirit Animal", artist:"John Ramones", category:"Sculpture", categorySlug:"sculpture", medium:"Sculpture", price:"$325", priceVal:325, available:true, img:img("20240131_202650.jpg?v=1724260777"), desc:"A spirit-animal sculpture rich with symbolism and craft, by John Ramones." },
    { id:"got-any-visine", title:"Got Any Visine?", artist:"Marc Eisenberg", category:"Sculpture", categorySlug:"sculpture", medium:"Sculpture", price:"$1,800", priceVal:1800, available:true, img:img("Visiene.jpg?v=1698264110"), desc:"A large, wryly-titled statement sculpture from Marc Eisenberg's body of work." },
    { id:"inside-the-sculptors-studio", title:"Inside the Sculptor's Studio", artist:"David Carlson", category:"Sculpture", categorySlug:"sculpture", medium:"Sculpture", price:"$150", priceVal:150, available:true, img:img("IMG_3988.jpg?v=1683579439"), desc:"A sculptural glimpse into the maker's own workspace, by David Carlson." },

    // --- Jewelry ---
    { id:"barrel-link-copper-bracelet", title:"Barrel Link Copper Bracelet", artist:"Sue Hosack", category:"Jewelry", categorySlug:"jewelry", medium:"Copper bracelet", price:"$65", priceVal:65, available:true, img:img("IMG_20250129_153716002.jpg?v=1738187612"), desc:"A hand-linked copper bracelet with warm, burnished barrel links, by Sue Hosack." },
    { id:"malachite-dragonfly-earrings", title:"Malachite Dragonfly Earrings", artist:"Sue Hosack", category:"Jewelry", categorySlug:"jewelry", medium:"Earrings, copper & malachite", price:"$95", priceVal:95, available:true, img:img("IMG_20251025_194031739_2.jpg?v=1761442500"), desc:"Dragonfly earrings set with green malachite — delicate metalwork by Sue Hosack." },
    { id:"aquamarine-necklace-earring-set", title:"Aquamarine Necklace & Earring Set", artist:"Sue Hosack", category:"Jewelry", categorySlug:"jewelry", medium:"Necklace & earring set", price:"$275", priceVal:275, available:true, img:img("IMG_20260219_174714712.jpg?v=1771605946"), desc:"A matched set in cool aquamarine — necklace and earrings handmade by Sue Hosack." },
    { id:"heart-and-pink-stone-ring", title:"Heart and Pink Stone Ring", artist:"Gina Eby", category:"Jewelry", categorySlug:"jewelry", medium:"Ring, silver & stone", price:"$105", priceVal:105, available:true, img:img("image4_cb491c97-8cba-450d-a826-8493b004b4d7.jpg?v=1771610016"), desc:"A romantic ring set with a pink stone and heart detail, by Gina Eby." },
    { id:"sleeping-beauty-turquoise-pendant", title:"Sleeping Beauty Turquoise Pendant", artist:"Gina Eby", category:"Jewelry", categorySlug:"jewelry", medium:"Pendant, silver & turquoise", price:"$145", priceVal:145, available:true, img:img("IMG_1572.jpg?v=1771607789"), desc:"A pendant featuring prized Sleeping Beauty turquoise in a hand-fabricated silver setting, by Gina Eby." },
    { id:"silver-eagle-cuff", title:"Silver Eagle Cuff", artist:"Gina Eby", category:"Jewelry", categorySlug:"jewelry", medium:"Cuff, sterling silver", price:"$265", priceVal:265, available:true, img:img("image5.jpg?v=1771602857"), desc:"A bold sterling-silver cuff bearing an eagle motif, hand-worked by Gina Eby." },
    { id:"sandcast-cuff-turquoise", title:"Sandcast Cuff with Turquoise", artist:"Gina Eby", category:"Jewelry", categorySlug:"jewelry", medium:"Cuff, sandcast silver & turquoise", price:"$195", priceVal:195, available:true, img:img("image7.jpg?v=1771602435"), desc:"A sandcast silver cuff set with turquoise — organic texture and Southwestern character, by Gina Eby." },
    { id:"feather-link-bracelet", title:"Feather Link Bracelet", artist:"Gina Eby", category:"Jewelry", categorySlug:"jewelry", medium:"Bracelet, silver", price:"$155", priceVal:155, available:true, img:img("image9.jpg?v=1771601578"), desc:"A linked bracelet with delicate feather detailing, hand-fabricated by Gina Eby." }
  ];

  // Featured homepage products (Phase 2 PRD §8) — kept distinct from the three catalog categories.
  const FEATURED_PRODUCTS = [
    { id:"tower-at-sunset", title:"Tower at Sunset", artist:"Wendell Fuqua", category:"Printmaking", categorySlug:"printmaking", medium:"Woodcut print", price:"$122", priceVal:122, available:true, img:"assets/img/art-tower-at-sunset.jpg", desc:"A signed, limited-edition woodcut of San Antonio's Tower of the Americas against a glowing sunset — hand-pulled in layered warm tones." },
    { id:"patterns-1", title:"Patterns 1", artist:"Jeffrey Yentz", category:"Pen & Ink", categorySlug:"pen-ink", medium:"Pen & ink", price:"$40", priceVal:40, available:true, img:"assets/img/art-patterns-1.jpg", desc:"An intricate quilt-inspired pen-and-ink miniature layering geometric blocks in earthy greens, golds and rose. Includes display easel." },
    { id:"cassard-fly", title:"Cassard Fly", artist:"Bobbye Porter", category:"Watercolor", categorySlug:"watercolor", medium:"Watercolor & ink", price:"$45", priceVal:45, available:true, img:"assets/img/art-cassard-fly.jpg", desc:"A finely observed watercolor study of a classic salmon fly, rendered with crisp linework and luminous color in an ornate antique frame." }
  ];

  const ALL_PRODUCTS = FEATURED_PRODUCTS.concat(PRODUCTS);

  // Board of Directors — 2026 (riverartgroup.com/board-members). Ordered by office.
  const BOARD = [
    { name:"Jennifer Guerra", office:"President", role:"President", lead:true },
    { name:"Kris Kelson", office:"Immediate Past President", role:"Immediate Past President" },
    { name:"Josephine McMahon", office:"Vice President", role:"Competition Chair" },
    { name:"Nora Hernandez", office:"Vice President", role:"Competition Assistant" },
    { name:"Dawn Boult", office:"Secretary", role:"Secretary" },
    { name:"Susie Moore", office:"Treasurer", role:"Director" },
    { name:"Miosotis Saldana", office:"Treasurer", role:"Assistant" },
    { name:"Flora Biggs", office:"Gallery Operations", role:"Assistant" },
    { name:"Roxanne Markline", office:"Gallery Supply", role:"Director" },
    { name:"Jannine Meszler", office:"Gallery Staffing", role:"Director" },
    { name:"Shelley Christ-Pizana", office:"Membership", role:"Director", email:"riverartgroup@riverartgroup.com" },
    { name:"Douglas Stewart", office:"Marketing & Public Relations", role:"Director" },
    { name:"Katherine Carey", office:"Communications", role:"Director" },
    { name:"Marc Eisenberg", office:"Communications", role:"Member Communication / Newsletter" },
    { name:"Sara Winn", office:"Websites", role:"Webmaster" },
    { name:"Ana M. Arrieta", office:"Websites", role:"Shopify Director" },
    { name:"Dick Porter", office:"Parliamentarian", role:"Parliamentarian" },
    { name:"Noma Freeman", office:"Historian", role:"Historian" }
  ];

  window.RAG = { ORG, NAV, ARTWORKS, FEATURED_ARTISTS, ROSTER, EVENTS, CATEGORIES, PRODUCTS, FEATURED_PRODUCTS, ALL_PRODUCTS, BOARD };
})();
