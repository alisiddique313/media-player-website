# Media Player — official website

Next.js (App Router) + TypeScript + Tailwind CSS. No database, no auth, no API routes.

## Run locally
```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev
```

## Configure
| What | Where |
|---|---|
| Product name, description | `config/site.ts` |
| Navigation links | `config/navigation.ts` |
| Download URLs | `.env.local` (`NEXT_PUBLIC_WINDOWS_DOWNLOAD_URL`, `NEXT_PUBLIC_ANDROID_DOWNLOAD_URL`) |
| Version, file name, file size | `lib/downloads.ts` |
| Features / screenshots / FAQ | `lib/features.ts`, `lib/screenshots.ts`, `lib/faq.ts` |

Until a download URL is set, its button shows a disabled "link coming soon" state.

## Replace placeholder images
Every file in `public/` is a generated placeholder. Overwrite them with the same file names:
`public/logo.png`, `logo-icon.png`, `favicon.ico`, `public/screenshots/*.png`, `public/images/*.png`.
Keep the same aspect ratios (Windows 16:9, Android about 9:19.5).

## Deploy on Vercel
Import the repo, add the three environment variables, deploy. Host the `.exe` and `.apk` on GitHub Releases, S3, or similar and paste their direct links.

Edit `app/privacy/page.tsx` and `app/terms/page.tsx` before launch; they are placeholders.
