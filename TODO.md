# Switch-over TODO

The Astro site is on the `astro` branch. www.23twenty.com still serves the old Next.js export from GitHub Pages
(`gh-pages` branch, deployed from `main` with `npm run deploy`).

## To finish the switch

- [ ] **Keystatic GitHub login** (desktop browser, ~5 min). Temporarily set `kind: 'github'` for dev in
      `keystatic.config.ts`, run `npm run dev`, open http://127.0.0.1:4321/keystatic and follow "Create GitHub
      App" for the `23twenty` org with access to the `23twenty` repo. Copy the four `KEYSTATIC_*` /
      `PUBLIC_KEYSTATIC_GITHUB_APP_SLUG` values it writes to `.env` into Vercel (Production), revert the config
      line, redeploy, and add `https://www.23twenty.com/api/keystatic/github/oauth/callback` as a callback URL.
- [ ] **Connect the Vercel project to GitHub** if the CLI couldn't (the repo is in the `23twenty` org, so the
      Vercel GitHub app needs access to that org).
- [ ] **Merge `astro` into `main`** and make `main` Vercel's production branch.
- [ ] **Move the domain.** Add `www.23twenty.com` and `23twenty.com` to the Vercel project, point DNS at Vercel,
      confirm, then delete `gh-pages` and turn off GitHub Pages.

## Product decisions (Brian's call)

- [ ] Photo descriptions are generated from the file names ("Philadelphia Headshot Photography (03 of 17)");
      real descriptions help search.

## Changed on purpose during the port

- Videos now fill the screen width on phones (they were the browser's default 300×150 there).
- The footer year updates itself (it said "© 2025").
- The About page (blank on the old site too) is gone. "passionate" on the home page is still gold but no longer
  a link, and `/about/` forwards to the home page.
- Gallery photos open full-size in a lightbox (PhotoSwipe, as on the Brian K Photo site).
- Logos no longer have "Opta" (the template's name) as their description; the menu marks the right page.
