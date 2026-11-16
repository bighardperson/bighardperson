# Haoze Yu — Personal Academic Website

This is the source code for Haoze Yu's responsive academic portfolio website.

## Website sections

- About & introduction
- Research interests and ongoing research
- Education
- Selected open-source projects
- Publications disclosure notice (no private manuscript details)
- Honors & awards
- Technical skills
- Contact

## Stack

Plain HTML, CSS, and vanilla JavaScript. No bundler, npm dependencies, frameworks, secrets, or backend.

- Responsive layouts for desktop, tablet and mobile
- Light/dark mode with preference persistence
- Accessible navigation, skip link, reduced motion preferences
- Lightweight metadata, SVG favicon and scroll progress
- External links point to the owner's public GitHub repositories

## Live preview with a local server

Open a terminal in the folder containing this README:

\`\`\`bash
python3 -m http.server 8000
\`\`\`

Then visit http://localhost:8000.

## GitHub Pages deployment

**Current location:** the \`docs/\` folder inside the \`bighardperson/bighardperson\` GitHub profile repository. This keeps the existing profile README untouched.

### Option A: Publish from the profile repository

1. In \`bighardperson/bighardperson\`, open **Settings → Pages**.
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Select **main**, folder **/docs**, and click **Save**.
4. GitHub Pages will give a URL similar to \`https://bighardperson.github.io/bighardperson/\`.

### Option B: Use the clean personal URL (recommended)

1. Create a new **public** repository named **\`bighardperson.github.io\`**.
2. Copy \`docs/index.html\` and \`docs/assets/\` from this repository to the **root** of the new repository (not the \`docs/\` directory).
3. In the new repository, go to **Settings → Pages**, select **Deploy from a branch**, **main**, **/(root)**, and save.
4. The resulting personal site URL will be **https://bighardperson.github.io/**.

## Important privacy note

Detailed publication/manuscript information is intentionally omitted to respect collaborators' disclosure requirements. Do not commit manuscript titles, submission venues, unpublished research material, phone numbers, or date of birth without explicit consent.

## Maintenance

Edit \`index.html\` to update text, and \`assets/site.css\` for appearance. Dates, milestones, academic status, and links should be checked before future updates.
