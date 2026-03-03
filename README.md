# Etch Node Snippets

This repository contains a collection of small code snippets, components, patterns, and assets, organized so they can be showcased on a WordPress site using EtchWP and ACF. Each snippet lives in its own folder under `snippets/` and is named with a slug that matches the corresponding WordPress post.

## Structure

```
/snippets
  /feature-card       ← example Etch component
    feature-card.etch
    feature-card.css
    preview.png
  /another-snippet
    ...
```

Each snippet folder may contain any number of files: HTML, CSS, JS, JSON, Etch components, etc. Use a `meta.json` if you need to store additional metadata for automation.

## Adding a new snippet

1. Create a new folder in `snippets` whose name is the slug you want in WordPress.
2. Add your code files, along with an optional preview image or stylesheet.
3. (Optional) Add `meta.json` for additional metadata.
4. Update the WordPress snippet post with the same slug and link to the GitHub folder.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.