# Notes for AI coding agents

Next.js (App Router) static site for UBC BIoT. See `README.md` for setup and the folder layout.

## Workflow

- `newsite` is the deployed branch. Every push to it goes live via GitHub Pages. Do not push unless the user asks.
- Only commit when asked. The user usually asks for a commit and push after each chunk of work.
- Run `npm run build` before pushing. CI builds with pnpm, so a type error can fail the deploy even if the dev server looks fine.
- `pnpm-lock.yaml` is what CI installs from. Keep `package-lock.json` in sync with it, or leave it out of commits.
- The user often has a dev server running on port 3000. Reuse it instead of starting another.
- Do only what was asked. Do not add extras such as screenshots or unrelated cleanups without asking first.

## Code conventions

- Page content lives in `src/data/` (team, projects, sponsors, FAQ, home subteams). Edit those files instead of the page code.
- A new image also needs an entry in the `index.ts` of its folder under `src/images/`.
- Use the CSS variables in `src/styles/globals.css`: `--color-*`, `--page-gutter`, `--page-top`, `--space-md`, `--space-lg`. Do not hard-code colors or page margins.
- Fonts: Rubik for body text, Merriweather for headings. Both load from `src/fonts/`.
- Recruitment open/closed is the `applicationOpen` flag in `app/recruitment/page.tsx`.
- Project dates in `src/data/projectData.ts` must keep the "Mon YYYY" format (for example "Sept 2024"). The Projects page sorts by parsing it.

## Known issues

- `npm run lint` fails with about 10 errors that predate recent work, mostly `any` types.
- The footer year comes from the build date, so it only updates when the site is redeployed.
- `app/layout.tsx` imports `next/head`, which the App Router ignores. SEO is minimal: one shared title and description for all pages.
- Next.js here is newer than most training data. Read `node_modules/next/dist/docs/` before relying on memory for its APIs.
- `main` also has a deploy workflow. Do not assume it is meant to be live.
