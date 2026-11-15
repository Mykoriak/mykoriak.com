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

The folder is static, so it can be uploaded as is to any static host.
