# GitHub Update Guide — Spectacular Spirit Journal v2.1

This release specifically fixes missing photographs and the fallback blue "S" home-screen icon.

## Why the issue happened
The prior release referenced photographs and icons inside nested `assets/...` folders. If those folders were not present in the deployed GitHub repository at exactly those paths, the app still loaded but the browser could not find the pictures or icon. The browser then generated a fallback home-screen icon.

## What changed in v2.1
- All photographs and install icons are now **flat files in the repository root**.
- The manifest and HTML use those root-level filenames.
- The install icon is a **photo-only crop of the signature wave / sunrise photograph** — no blue square and no letter `S`.
- The service-worker cache version has changed and now claims the updated page immediately.
- `ASSET_CHECK.html` lets you verify the photographs and icon after deployment.

## Update steps
1. Open the v2.1 ZIP.
2. Upload **every file** in the ZIP to the root of the same GitHub Pages repository. Do not omit the `.jpg`, `.png`, `.webmanifest`, or `service-worker.js` files.
3. Replace the existing `index.html` and `service-worker.js` when GitHub asks.
4. Commit the changes.
5. Wait about a minute for GitHub Pages to redeploy.
6. Open your normal app URL and refresh once or twice.
7. Then open `ASSET_CHECK.html` at the same site address. Example: if your app is at `https://username.github.io/repository/`, the checker is `https://username.github.io/repository/ASSET_CHECK.html`.
8. All seven photographs plus the home-screen icon should be visible.

## Important iPhone icon step
Safari/iOS commonly keeps the image from an existing Home Screen shortcut. Updating the website does **not reliably replace an already-saved icon**.

After v2.1 is live:
1. Remove the old Spectacular Spirit Journal icon from your Home Screen.
2. Open the updated site in Safari.
3. Tap Share.
4. Tap **Add to Home Screen**.
5. The preview should now show the wave / sunrise photograph.

This removes only the Home Screen shortcut; it does not delete the website itself. Your app data is stored in browser storage for the same site URL, so keeping the same GitHub Pages URL preserves it unless Safari site data is separately cleared.
