# Amulya Ambati · Portfolio

Personal portfolio of **Amulya Ambati**, Computer Science Engineering student at Mahindra University (India), on the Digital Tech Year 2026–2027 at Centrale Méditerranée (Nice, France).

**Computer Science | Data Analytics | Artificial Intelligence | Digital Technology** · open to technical internships from March 2027.

Live site: <https://amulyaambati6.github.io/portfolio/>

## What's on the site

A single responsive page with:

- **Hero** with positioning and internship availability
- **About me** with interests and languages
- **Education** (Centrale Méditerranée, Mahindra University)
- **Technical skills**, grouped by category
- **Featured projects** with screenshots, technologies and links:
  - COVID-19 Global Economic Impact Dashboard (Python, Pandas, Plotly, Streamlit, SciPy, MySQL)
  - Peer-to-Peer Tutoring Platform (HTML, CSS, JavaScript)
  - Password Strength Checker (HTML, CSS, JavaScript)
- **Experience & leadership**
- **Resume** download
- **Contact** (email, LinkedIn, GitHub)

## Tech stack

- React 18 with Create React App (`react-scripts` 5)
- Plain CSS with design tokens (no UI framework)
- `react-icons` for icons
- Google Fonts: Cormorant Garamond (headings) and Inter (text)
- Jest + React Testing Library
- Deployed to GitHub Pages with `gh-pages`

## Project structure

```
public/
  index.html            page title, description and social metadata
  favicon.svg, *.png    icons
  Amulya_Ambati_CV.pdf  (add this yourself; see "Updating content")
src/
  data/profile.js       ALL text content: profile, education, skills, projects, experience
  components/           one component per section (Hero, About, Education, ...)
  hooks/useReveal.js    gentle fade-in when a section scrolls into view
  styles/App.css        design tokens, layout and responsive rules
  assets/               profile photo and project screenshots
  App.js                page layout
  App.test.js           tests
```

## Updating content

Almost everything lives in **`src/data/profile.js`**:

- **LinkedIn:** set `profile.linkedin` to your profile URL. The LinkedIn links appear automatically once it is set.
- **CV:** save your PDF as `public/Amulya_Ambati_CV.pdf` (or change `profile.resumeFile`). The site checks that the file exists: until it does, the Resume section shows a "Request my CV by email" button instead of a broken link.
- **Projects:** edit the `projects` array. Screenshots go in `src/assets/projects/` (1120 × 700 JPEG works well).
- **Experience:** add entries to the `experience` array using the same fields.
- **Skills:** edit the `skills` groups.

Colours and fonts are CSS variables at the top of `src/styles/App.css`.

## Run locally

Requires Node.js 18 or newer.

```bash
npm install
npm start          # development server at http://localhost:3000
npm test           # run the tests
npm run build      # production build in ./build
```

## Deploy to GitHub Pages

The site is published from the `gh-pages` branch.

```bash
npm run deploy
```

This builds the site and pushes the `build` folder to the `gh-pages` branch. In the repository settings, **Pages → Source** should be "Deploy from a branch", branch `gh-pages`, folder `/ (root)`.

## Privacy

The site shows only a personal email address and public profile links. No phone number or university email is published.
