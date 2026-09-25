# GitHub Update Guide — Spectacular Spirit Journal v2

This package is structured so the contents can replace the current app files in your GitHub repository.

## Files/folders to upload or replace
Replace these at the repository web-app root:
- `index.html`
- `manifest.webmanifest`
- `service-worker.js`
- `assets/icons/`
- `assets/images/`

Also add/update the documentation files:
- `QUICK_START.md`
- `README.md`
- `LOCKED_BRIEF.md`
- `GITHUB_UPDATE_GUIDE.md`
- `CHANGELOG.md`

`Spectacular_Spirit_Journal_Standalone.html` is a convenient local preview and can also be kept in the repository, but GitHub Pages should serve `index.html`.

## Suggested update workflow
1. Download and unzip the GitHub Update package.
2. Back up your existing repository or create a branch.
3. Drag the files/folders above into the repository root and choose **Replace** where prompted.
4. Commit with a message such as: `Update Spectacular Spirit Journal to v2`.
5. Push/commit to the branch GitHub Pages is serving.
6. Wait for GitHub Pages to rebuild, then open the live URL and refresh once.

## Important: existing app data
The local-storage key is deliberately unchanged from v1. If you deploy v2 at the **same live URL/origin**, existing browser data should remain available.

## Service-worker refresh
This version uses cache name `ssj-v2`. The new service worker should retire the v1 cache. If the live site still shows the old interface:
- refresh the page twice, or
- fully close/reopen the browser, or
- remove and re-add the home-screen app as a last resort.

## iPhone icon refresh
Apple can cache home-screen icons aggressively. If the signature-image icon does not update after deployment, remove the old home-screen shortcut and add it again from Safari.

## YouTube chant
The repository does not contain copied YouTube audio. The app embeds/streams the user-selected recording online and includes an offline speech-synthesis fallback. This avoids bundling the source recording into your GitHub repository.
