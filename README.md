# UBC BIoT Website

Next.js (App Router) static site for UBC Biological Internet of Things.

## Edit and push

```bash
git clone git@github.com:UBC-Brewing-Internet-of-Things/BIoT-site.git
cd BIoT-site
git switch newsite
npm install
npm run dev        # open http://localhost:3000, edits reload automatically
```

Before pushing, check that it builds:

```bash
npm run build
```

Then commit and push:

```bash
git add <files>
git commit -m "Describe your change"
git push
```

**`newsite` is the deployed branch.** Every push to `newsite` builds the site and deploys it to GitHub Pages (see `.github/workflows/deploy.yml`).

## What goes where

```
.
├── app/                     Pages (one folder per URL)
│   ├── layout.tsx           Wraps every page: Navbar, Footer, Join Us button
│   ├── page.tsx             Home            /
│   ├── projects/            Projects        /projects
│   ├── team/                Team            /team
│   ├── recruitment/         Join Us         /recruitment  (set applicationOpen here)
│   ├── faq/                 FAQ             /faq
│   ├── sponsor/             Sponsor Us      /sponsor
│   ├── biofluorescentBeer/  Project article
│   └── chemeCube/           Project article
├── src/
│   ├── components/          Reusable pieces (Navbar, Footer, cards, ...)
│   ├── data/                Page content: edit these to change text and lists
│   │   ├── teamData.ts        team members and roles
│   │   ├── projectData.ts     projects shown on /projects
│   │   ├── sponsorsData.ts    sponsors by tier
│   │   ├── faqData.ts         FAQ questions and answers
│   │   └── homePageData.ts    subteam descriptions on Home
│   ├── images/              Images, plus an index.ts in each folder that
│   │                        maps names to files (add new images there too)
│   ├── styles/              CSS Modules, one per page or component
│   │   └── globals.css        fonts, colors, page spacing variables
│   └── fonts/               Rubik (body) and Merriweather (headings)
├── public/                  Files served as-is (favicon)
├── .github/workflows/       Deploy to GitHub Pages
└── next.config.ts           Static export settings
```
