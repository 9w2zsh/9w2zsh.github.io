---
title: "Add custom html to Jekyll on github.io"
categories: [html,jekyll]
tags: [add]
---
## Add custom html
To add custom HTML scripts and JavaScript to a Jekyll site hosted on GitHub Pages, use Liquid include tags for individual pages or modify layout templates for sitewide application. Writing scripts directly inside Markdown files often fails on live deployment due to strict Markdown parsing.  

---
### Method 1: Inject Scripts into a Specific Post or Page
This is the safest approach if you only need the HTML and JavaScript to execute on a single blog post or page.
* Create the Script Asset: Inside your Jekyll project root, create a file at `_includes/my-custom-script.html`.
* Add Your Code: Open that file and insert your raw HTML and JavaScript
  ```html
  <!-- _includes/my-custom-script.html -->
  <div id="my-custom-element">
    <p>HTML content goes here.</p>
  </div>

  <script>
    console.log("JavaScript is executing successfully!");
    // Your custom JS logic goes here
  </script>
  ```
* Include It in Your Markdown: Open your blog post or page `.md` file and call the file using Jekyll's Liquid tag syntax exactly where you want it to appear:
  {% raw %}
  ```markdown
  ---
  title: "My Jekyll Post"
  layout: post
  ---

  This is regular markdown text.

  {% include my-custom-script.html %}

  More markdown text follows.

  ```
  {% endraw %}

---
### Method 2: Load External JavaScript Files Globally
If you have a larger `.js` file that you want to reference on all posts or multiple pages, structure it using Jekyll's asset directory.
* Save Your Script: Create a dedicated JavaScript file at `assets/js/custom.js`.
* Inject into Layout: Open your site's default layout file, usually found at `_layouts/default.html` or `_includes/head.html`.
* Use the Relative URL Filter: Add the script tag before the closing `</head>` or `</body>` tag. Use Jekyll's `relative_url` filter to prevent broken paths on GitHub project subdirectories:
  {% raw %}
  ```html
  <script src="{{ '/assets/js/custom.js' | relative_url }}"></script>
  ```
  {% endraw %}

---
### Method 3: Conditional Loading via Front Matter
If you want a global script setup but only want the browser to download the script file on selected posts, use Front Matter variables.
* Modify Layout: Open `_layouts/post.html` or `_layouts/default.html` and wrap your script tag in a Liquid conditional block:
  {% raw %}
  ```html
  {% if page.load_custom_script %}
  <script src="{{ '/assets/js/custom.js' | relative_url }}"></script>
  {% endif %}
  ```
  {% endraw %}
* Trigger in Post: In the specific blog post where you need the script, declare the variable as true in the top YAML configuration:
  ```
  ---yaml
  layout: post
  title: "Interactive Log Page"
  load_custom_script: true
  ---
  ```