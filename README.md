# Carl Wynand du Plessis — Personal Website

Portfolio for Carl Wynand du Plessis, Interim Technical Product Lead. The site is an AWS Amplify Gen 2 app: a React (Vite) frontend with routed case studies, and an Amplify Data backend that stores contact inquiries.

React (Vite) is the Amplify default for a web app. Case studies are real routes (`/work/yukon`, `/work/tessa`), and the contact form writes to AppSync when the backend is deployed. Amplify Hosting builds the frontend from `amplify.yml` after `npx ampx pipeline-deploy`.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints. This project uses port 43123.

`npm run dev` writes a local `amplify_outputs.json` placeholder if one is missing, so the site renders before a sandbox exists. The contact form needs a real backend. Create one with:

```bash
AWS_REGION=us-east-1 npx ampx sandbox --once
```

That command needs AWS credentials and replaces the placeholder. `amplify_outputs.json` is gitignored.

## Deploy with Amplify Hosting

Connect this repository in the Amplify console. The repo includes `amplify.yml`. The backend phase runs `npx ampx pipeline-deploy`, then the frontend builds into `dist`.

Because the app uses client-side routes, add this rewrite in Amplify Hosting (Rewrites and redirects):

- Source: `</^[^.]+$|\.(?!(css|gif|ico|jpg|js|png|txt|svg|woff|woff2|ttf|map|json|webp)$)([^.]+$)/>`
- Target: `/index.html`
- Type: `200` (Rewrite)

Without that rule, refreshing `/work/yukon` or `/work/tessa` returns a 404.

## Case studies

- [Project Yukon](/work/yukon) — seller tools consolidated into one Salesforce experience.
- [Tessa](/work/tessa) — ambient AI caregiving companion, from concept to home pilots.
