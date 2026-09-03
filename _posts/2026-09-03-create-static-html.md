---
title: "Create static HTML in Jekyll on GitHub Pages"
categories: [jekyll]
tags: [html]
---
## Create a static HTML page
To create a static HTML page in a Jekyll site hosted on GitHub Pages, you can either write a raw HTML file (which Jekyll copies as a static asset) or write a Markdown or HTML file with YAML front matter (which Jekyll converts into a page using your theme).  
This repository builds and deploys changes pushed to its `main` or `master` branch with GitHub Actions.

### Method 1: Create a Jekyll-Processed Page (Recommended)
This approach allows your new page to automatically inherit your website's navigation, header, footer, and CSS theme.  
* Create the file: In your project's root directory, create a new file named `services.md` or `services.html`.
* Add front matter: At the very top of the file, insert the required configuration block.
  ```yaml
  ---
  layout: default
  title: "Our Services"
  permalink: /services/
  ---
  ```
* Write the content: Below the closing `---`, write your page content in standard HTML or Markdown:
  ```html
  <h1>What We Do</h1>
  <p>Welcome to our static services page built with Jekyll.</p>
  ```
* Deploy: Commit and push the file to your repository's deployment branch. For this site, the page will be available at `https://9w2zsh.github.io/services/`.

### Method 2: Create a Pure Raw Static HTML Page
If you want a completely blank standalone landing page that completely bypasses your site's Jekyll theme and layouts, do the following:  
* Create the file: Add a file named `landing.html` directly in your repository root.
* Omit front matter: Do not include the `---` blocks at the top. Jekyll treats files without front matter as static assets and copies them as-is.
* Write complete HTML: Provide the complete HTML document structure manually:
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Standalone Page</title>
  </head>
  <body>
    <h1>This bypasses the Jekyll theme!</h1>
  </body>
  </html>
  ```
* Deploy: Push the changes. The raw page will be accessible at `https://9w2zsh.github.io/landing.html`.
