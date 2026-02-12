# Portfolio Site

Data-driven static portfolio site (HTML, CSS, JS).

## Where To Edit

1. Edit `site-data.js` to set your name, bio, skills, social links, and projects.
2. Keep `index.html` as structure and `app.js` as renderer logic.
3. Use `styles.css` to tune colors, spacing, and typography.

## Project Entry Format

Use this shape inside the `projects` array in `site-data.js`:

```js
{
  title: "Project title",
  summary: "One to two sentence impact-focused summary.",
  category: "Frontend", // any category label
  tags: ["React", "TypeScript", "API"],
  liveUrl: "https://...",
  repoUrl: "https://github.com/..."
}
```

## Production Checklist

1. Replace `siteUrl` and `previewImage` in `site-data.js` for SEO/social previews.
2. Replace placeholder links and email.
3. Validate all `liveUrl` and `repoUrl` links.
4. Optionally add a custom domain.

## Deploy

### GitHub Pages

1. Push this folder to a GitHub repo.
2. In repo settings, enable Pages from `main` branch root.
3. Site will publish at `https://<username>.github.io/<repo>/`.

### Netlify

1. Create a new site from Git.
2. Build command: none.
3. Publish directory: `/`.

### Vercel

1. Import repo.
2. Framework preset: `Other`.
3. Build command: none, output directory: `/`.
