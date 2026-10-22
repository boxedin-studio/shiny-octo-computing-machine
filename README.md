# Boxed In Studio website

The site for boxedin.studio. It is a plain set of web pages (no server, no database), hosted free on GitHub Pages.

You do almost everything in **one file: `source/projects.js`**. Edit it, then commit and push, then commit and push in GitHub Desktop.

---

## The quick recipe (do this every time)

1. Open `source/projects.js` in any text editor.
2. Change what you want (examples below). Save.
3. Open GitHub Desktop, tick the changed files (leave `.DS_Store` unticked), write a short message, **Commit**, then **Push**.
4. GitHub rebuilds the pages for you (about a minute) and the site updates a minute or two after that. Refresh boxedin.studio.
5. Before your next commit, click **Pull** in GitHub Desktop: the rebuild adds a commit of its own.

You can watch it happen in the **Actions** tab of the repo on github.com. A green tick means it worked; a red cross means something is wrong (a typo in `projects.js` is the usual cause; open the run to read the message, or ask Claude).

The same rebuild runs automatically if you edit `projects.js` directly on github.com. It also runs when you change photos, drawings, templates or `assets/css/project.css`. You can also press **Run workflow** on the Actions tab to rebuild by hand.

> Never edit the files inside `projects/` or `index.html` by hand. Each rebuild replaces them.

> **Search engines:** a project that still has the placeholder description ("Short description of the project goes here...") is hidden from Google (`noindex`) and left out of the sitemap. As soon as you write a real description and push, it becomes visible to search engines automatically. The studio, archive and journal pages are not hidden: add real text to them before they matter for search.

---

## Change a project's colour

Every project has a `color`. It is that project's page background, and the home page turns that colour when you point at the project's name.

1. Open `source/projects.js` and find the project (search for its name).
2. Find the `color:"#......"` on its first line:
   ```js
   {id:"carpentry-1", medium:"carpentry", name:"ply table", color:"#867350",
   ```
3. Replace the six characters after `#` with your new colour. Pick one at https://htmlcolorcodes.com (use the "Hex" value). For example `color:"#3d6b5a"` is a deep green.
4. Save, then commit and push (the quick recipe above).

Tips
- Keep the quotes and the `#`. Six letters/numbers only (0-9, a-f).
- Keep colours **mid to dark**. Text is always white, so very light colours make it hard to read, and Safari's top bar goes grey on very light colours.
- The site's signature blue `#2f4bff` is used on the home page and in `assets/css/project.css` (`--bg`). Change it in both places (and in `source/templates/index.html`, `--bg`) if you ever change the brand colour.

---

## Everything you can control (all in `source/projects.js`)

| I want to... | Change this | Example |
|---|---|---|
| Rename a project | `name` (the address follows automatically, and the old address forwards) | `name:"rimu kitchen block"` |
| Choose the address myself | add `slug` | `slug:"kitchen-block"` |
| Recolour a project | `color` | `color:"#3d6b5a"` |
| Reorder projects | move the project's lines up or down | |
| Hide a project for now | put `//` at the start of each of its lines | |
| Remove a project | delete its lines | |
| Add a project | copy a whole project, give it the next id for its medium (`carpentry-9`) and a new `name` | |
| Add a new tab | add a line to `mediums`, then use that `medium` on projects | `{id:"furniture", label:"furniture"}` |
| Write the text under the title | `description` (blank line = new paragraph) | |
| Edit the info row (year, materials, price...) | `details` (labels are yours to choose) | `[["year","2025"],["price","$450"]]` |
| Add a place name for search engines | `place` | `place:"Whananaki"` |
| Add photos, drawings and text blocks | `images` (see below) | |

The `id` (like `carpentry-1`) is only a label for you; the name people see is `name`.

---

## Photos, drawings and text blocks (`images`)

The photo area is a grid that repeats in threes: **1st cell wide (16:9), 2nd and 3rd small squares side by side**. Whatever you put in a cell is fitted to its shape. Squares stay side by side on phones.

**Photo**
1. Put the original (any size or shape) in `source/photos/<project-name>/`. It is never changed.
2. Add to `images`:
   ```js
   {src:"ply-table/ply-table-01.jpg", alt:"What the photo shows", focus:"50% 60%"}
   ```
   `focus` is optional: what stays in frame when the photo is cropped (left-to-right %, top-to-bottom %; `"50% 50%"` is the centre).
3. Commit and push. Visitors see a small fast version; clicking opens the full photo.

**Drawing (SVG from Illustrator)**
1. Save as SVG into `source/drawings/<project-name>/` (Illustrator: Styling "Internal CSS", Fonts "Convert to outline", keep Responsive ticked).
2. Add `{drawing:"ply-table/exploded-table.svg", alt:"What it shows"}`.
3. Draw in black on white. The site turns black into the text colour and white into the page colour, so it always matches the project. Use a square artboard for a square cell, 16:9 for a wide cell.

**Text block**
```js
{title:"About", text:"A short note.", legend:["First part","Second part"]}
```
Keep it short (about 100 characters) so it fits a square. `legend` is optional (small, ultra-light list at the bottom).

---

## Other things you can edit by hand

| What | Where |
|---|---|
| Home page words, tab names, menu links (archive / studio / journal) | `source/templates/index.html` |
| Studio, archive and journal pages (text, email, phone) | `studio/index.html`, `archive/index.html`, `journal/index.html` |
| Look of project pages (sizes, weights, spacing, grid gap) | `assets/css/project.css` |
| Header info row: labels solid, values faded | `.details dt` and `.details dd` in `assets/css/project.css` |
| Speed of the project list animation | `--open-delay`, `--row-in-step` etc. in `source/templates/index.html` |
| Link preview image (when shared on iMessage, social) | `assets/img/og-image.png` |
| Browser tab icon | `favicon.ico` and `assets/img/apple-touch-icon.png` |
| Logo (changes colour with the text) | `assets/img/boxed-in-logo.svg` |

After editing templates or `project.css`, just commit and push: the rebuild runs on its own.

---

## What is in each folder

```
index.html            Home page (generated)
.github/workflows/    The automatic rebuild instructions for GitHub
404.html              "Page not found" and old-address forwarding (generated)
sitemap.xml           Tells Google every page (generated)
robots.txt            Search engine rules (generated)
favicon.ico           Browser tab icon
studio/ archive/ journal/    Hand-written pages
projects/             One generated page per project (do not edit)
assets/
  css/                Page styling
  js/                 Small scripts (photo viewer, page behaviour)
  fonts/              Aileron font files
  img/                Logo, icons, link preview image
  photos/             Resized photos made by the build (do not edit)
source/
  projects.js         YOUR PROJECTS. The file you edit.
  build.js            The builder (runs on GitHub each time you push)
  templates/          Page layouts
  photos/             Your original photos
  drawings/           Your original SVG drawings
  slugs.json          Remembers old addresses so links keep working
```

---

## Fonts

All 16 Aileron styles are in `assets/fonts/`. The site uses Regular, Light, Ultra Light and Bold. To use another weight, add an `@font-face` for it at the top of `assets/css/project.css`.

## If something looks wrong

- **Page did not change:** check you pushed, then look at the Actions tab on github.com for a red cross.
- **Build warning:** the run log on the Actions tab names the project and what is missing or too long.
- **Stuck:** ask Claude; it can fix the file and rebuild.
