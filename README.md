# Spectacular Spirit Journal — v2.1

**This is the image/icon reliability release.** All photographs and install icons are root-level files for simple GitHub Pages deployment.


A local-first, customizable web app for mental and physical wellness, journaling, spiritual practice, goals, meditation, selected readings and purposeful living.

## v2 additions
- optional onboarding Q&A with **Skip and set up later**
- onboarding can populate profile, guiding intention, goals, core commitments and preferences
- dedicated **Help & FAQ** tab
- in-app Quick Start content and links to deployment/support files
- signature and supporting user photographs integrated across app sections
- Nam-myoho-renge-kyo Chant module now integrates the user-supplied YouTube recording via embed
- built-in speech-synthesis fallback for offline chant use
- upgraded service-worker cache (`ssj-v2`)
- existing browser data remains compatible because the local-storage key is unchanged

## App structure
- Today
- Journal
- Commitments
- Goals & Milestones
- Meditation
- Readings & Wisdom
- Progress
- Help & FAQ

## Visual identity
The attached close-up wave-and-light photograph remains the signature image: rough and ragged in the foreground; calm horizon; light breaking through. Supporting ocean, blossom, candlelight, forest-light and horizon imagery is used throughout the app.

## Privacy
No login or backend is required. Data is stored locally in the browser. Export JSON backups regularly if the data matters.

## GitHub deployment
See `GITHUB_UPDATE_GUIDE.md`.


## v2.1 deployment verification
After publishing, open `ASSET_CHECK.html`. If every tile appears, the image paths are correct. For an already-installed iPhone shortcut, remove the old shortcut and add it again so iOS captures the new photo icon.
