# Sai Valley Resort, concept website

A static Next.js site (App Router, `output: 'export'`) prepared as a design proposal.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
```

## Build the static site
```bash
npm run build      # outputs to ./out
```

## Content
All client text, rooms, reviews and contact details live in `site.config.js`.
Components in `components/Site.js` do not need to change when reusing this for another client.

## Photos
`public/photos/` is gitignored. Use only photos the owner has approved.
The site uses the neutral placeholders by default (safe for a public repo / GitHub Pages).
To preview with real photos on your own computer, add `NEXT_PUBLIC_PHOTO_SET=local` to `.env.local` (gitignored).

## Deploy (GitHub Pages)
1. Push to the `main` branch of a GitHub repo.
2. Repo Settings, Pages, Source: **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and publishes on every push.
   It sets `NEXT_PUBLIC_BASE_PATH` to `/<repo-name>` automatically.

Before sharing: verify reviews, distances, hours, rates and phone number with the owner.
