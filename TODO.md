# Switch-over TODO

The Astro site is on the `astro` branch. www.23twenty.com still serves the old Next.js export from GitHub Pages
(`gh-pages` branch, deployed from `main` with `npm run deploy`).

## To finish the switch

- [x] **Move the repo to `brian-kilpatrick`.** Vercel won't connect to a repo in another person's personal
      account, even with its GitHub app installed there and write access (the dashboard and `vercel git connect`
      both refuse). As **23twenty**: repo Settings → General → Danger Zone → Transfer ownership →
      `brian-kilpatrick`. Then run `git remote set-url origin https://github.com/brian-kilpatrick/23twenty.git`.
      `keystatic.config.ts` already points at `brian-kilpatrick/23twenty`.
- [x] **Keystatic GitHub login.** Live editor: https://23twenty.vercel.app/keystatic
  - [x] Created the GitHub App `23twentymedia` (owned by `brian-kilpatrick`). Its four `KEYSTATIC_*` /
        `PUBLIC_KEYSTATIC_GITHUB_APP_SLUG` values are in `.env`.
  - [x] After the transfer, install the app on `brian-kilpatrick`
        (https://github.com/apps/23twentymedia/installations/new, only the `23twenty` repo). The install on the
        `23twenty` account can be removed.
  - [x] Copy the four `.env` values into Vercel (Production) and redeploy. Production deploys from `main`, so
        until the merge, deploy `astro` to production with `vercel deploy --prod`.
  - [x] In the app's settings (https://github.com/settings/apps/23twentymedia), make sure the callback URLs
        include `https://www.23twenty.com/api/keystatic/github/oauth/callback`, plus the `*.vercel.app` one
        while the editor lives there. (The setup form's "Deployed App URL" field crashes if you type into it;
        paste the whole URL instead.)
- [x] **Connect the Vercel project to GitHub** (`vercel git connect`). Production branch is `main`; pushes to
      other branches make preview deployments.
- [ ] **Merge `astro` into `main`.** `main` is already Vercel's production branch.
- [ ] **Make `main` the repo's default branch on GitHub** (repo Settings → General → Default
      branch). It's still `master`, an older branch last changed Feb 2025, and that's the branch the Keystatic
      editor opens on, so editors would see an empty site and their edits wouldn't reach the live one.
- [ ] **Move the domain.** Add `www.23twenty.com` and `23twenty.com` to the Vercel project, point DNS at Vercel,
      confirm, then delete `gh-pages` and turn off GitHub Pages.

## Product decisions (Brian's call)

- [ ] Photo descriptions are generated from the file names ("Philadelphia Headshot Photography (03 of 17)");
      real descriptions help search.
- [ ] **Gallery intros and search descriptions are Claude's drafts** (Keystatic → each gallery: Intro,
      Description; Video page: Description). Rewrite them in your voice: who the work is for, what a session
      is like, where you shoot. This is the copy search engines match against.
- [ ] **After the domain move:** add the site to Google Search Console and submit
      `https://www.23twenty.com/sitemap-index.xml`; set up (or claim) the Google Business Profile with the
      same name, phone and site, and ask past clients for reviews. That drives local search more than the site.

## Changed on purpose during the port

- Videos now fill the screen width on phones (they were the browser's default 300×150 there).
- The footer year updates itself (it said "© 2025").
- The About page (blank on the old site too) is gone. "passionate" on the home page is still gold but no longer
  a link, and `/about/` forwards to the home page.
- Gallery photos open full-size in a lightbox (PhotoSwipe, as on the Brian K Photo site).
- Search and sharing: sitemap, `robots.txt`, a description per page, link-preview images, and business details
  (name, phone, email, socials) for Google. The phone number, (267) 277-3498, is also new in the footer.
- Logos no longer have "Opta" (the template's name) as their description; the menu marks the right page.
