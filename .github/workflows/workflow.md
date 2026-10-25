# Deploy workflow (`deploy.yml`)

`deploy.yml` builds the site and publishes it to GitHub Pages. It is written and edited by hand. Nothing generates it, and GitHub only reads files in this folder that end in `.yml` or `.yaml`, so this `.md` file has no effect on it.

## When it runs

```yaml
on:
  push:
    branches:
      - newsite
  workflow_dispatch:
```

- Every push to `newsite` starts a deploy.
- `workflow_dispatch` adds a "Run workflow" button in the repo's Actions tab, to redeploy without a new commit.
- To change the deployed branch, change the branch name here.

## Permissions and concurrency

```yaml
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: pages
  cancel-in-progress: false
```

- The workflow can read the repo and publish to Pages. `id-token: write` lets the deploy step prove its identity to Pages.
- Only one deploy runs at a time. A second push waits for the first to finish instead of cancelling it.

## Job 1: `build`

Runs on a fresh Ubuntu machine:

1. **Checkout repository:** downloads the code.
2. **Setup pnpm:** installs pnpm 10.
3. **Setup Node.js:** installs Node 22 and caches pnpm downloads between runs.
4. **Install dependencies:** `pnpm install`. This reads `pnpm-lock.yaml`, not `package-lock.json`.
5. **Check versions:** prints the Node and pnpm versions in the log, for debugging.
6. **Setup GitHub Pages:** `actions/configure-pages` reads the repo's Pages settings, including the base path.
7. **Build Next.js site:** `pnpm run build`. `next.config.ts` sets `output: "export"`, so this writes the static site to `out/`. The base path is passed as `PAGES_BASE_PATH`, but `next.config.ts` does not read it, so it currently has no effect.
8. **List out/ contents:** prints the built files in the log, to check the build.
9. **Upload Pages artifact:** packages `./out` for the next job.

If any step fails, such as a type error in the build, nothing is deployed and the live site stays as it was.

## Job 2: `deploy`

```yaml
needs: build
environment:
  name: github-pages
```

Runs only after `build` succeeds. `actions/deploy-pages` publishes the uploaded artifact, and the live URL shows up on the run's page in the Actions tab.

## Common tasks

- **Check a deploy:** repo Actions tab, then the latest "Deploy Next.js site to Pages" run.
- **Deploy without a code change:** Actions tab, then "Run workflow".
- **Deploy from another branch:** edit `branches:` under `push`.
- **Build fails only in CI:** run `npm run build` locally first. CI installs from `pnpm-lock.yaml`, so make sure that lockfile is up to date.
