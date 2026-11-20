# simplifind-us — client HTML sites

Each top-level folder is one client site, served at
`https://simplifi.kinsta.cloud/<site-folder>/`.
Pushing to `main` deploys via `.github/workflows/deploy.yml` (SFTP, upload only, never deletes).

## Page structure: clean URLs (required for every site)

Follow the `the-hair-specialists/` pattern. Every page is a **folder containing `index.html`**,
so URLs never show `.html`.

```
<site>/
├── index.html              → /<site>/
├── about/index.html        → /<site>/about/
├── services/index.html     → /<site>/services/
├── contact/index.html      → /<site>/contact/
├── images/                 (all images)
├── css/  js/               (optional shared assets)
└── support.js              (if the site uses it)
```

Rules:
- NEVER create `about.html`, `contact.html`, etc. A new page = new folder + `index.html`.
- Folder names: lowercase, hyphenated (`hair-replacement/`, not `HairReplacement/`).
- Internal links are **root-absolute with a trailing slash**:
  `href="/<site>/about/"`, home = `href="/<site>/"`.
  Never `href="about.html"`, never `href="../about/"`.
- Assets are **root-absolute**: `src="/<site>/images/logo.png"`,
  `href="/<site>/css/style.css"`. This keeps paths identical at any folder depth.
- Each page is a complete HTML document (own `<head>`, nav, footer).

## Deploy notes
- Deleting a file here does NOT delete it on the server — remove it there too
  (WP File Manager, or Novamira MCP `novamira-simplifi-kinsta`).
- If a fix is made directly on the server, copy the same change into this repo and commit,
  or the next push overwrites it.
- Never add `wp-*` folders or root-level files; the workflow ignores them anyway.
