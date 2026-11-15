## mykoriak.com

my site React app

## kishenya.mykoriak.com

`kishenya/` is the landing, help and privacy site for the Kishenya app. It is plain
HTML and CSS with no build step, so the folder is deployed as it is.

| File | What it is |
| --- | --- |
| `index.html` | The landing page. Its Help section is the app's support page. |
| `style.css` | All styles. The tokens follow the app's design system. |
| `privacy/index.html` | The privacy policy. **Not in the repo yet**: the landing page links to it. |
| `fonts/` | Inter, self-hosted (SIL OFL 1.1, `fonts/OFL.txt`), so the page calls no third party. |
| `favicon.svg`, `apple-touch-icon.png`, `og.png` | The app icon and the link-preview image. |

Preview it locally:

```bash
python3 -m http.server 4173 --directory kishenya
```

### Deploy

It is a second Firebase Hosting site in the same project (`mykoriak-52dee`), under the
deploy target `kishenya`.

One-time setup:

1. Create the site. If the id `kishenya-mykoriak` is taken, pick another one and change
   it in `.firebaserc`.

   ```bash
   firebase hosting:sites:create kishenya-mykoriak
   ```

2. Firebase console → Hosting → the `kishenya-mykoriak` site → **Add custom domain** →
   `kishenya.mykoriak.com`, then add the DNS record it shows at the mykoriak.com DNS
   host.

Every deploy after that:

```bash
yarn deploy:kishenya
```

`yarn deploy` still deploys only the main site.
