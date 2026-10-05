An include file in Jekyll is simply a regular Markdown or HTML fragment. When creating a Markdown (.md) file inside the _includes/ directory, the format is very straightforward: you do not need a YAML front matter block unless you specifically intend to define page-level variables that only apply to the snippet itself.

### The Standard Format
Simply write the plain Markdown content exactly as you want it to be parsed:
```markdown
### This is a reusable section
```
Here is some standard Markdown text that will be included elsewhere. 
* You can use **bold text** or lists.
* You can even use Liquid variables like {{ site.title }}.

### Key Rules & Requirements
• No Front Matter Needed: Standard pages require --- at the top to tell Jekyll to process them. Files inside _includes/ are processed by the calling page instead, so you typically skip the front matter entirely.
• Liquid Processing: You can pass parameters dynamically into your Markdown include if you want it to be configurable. For example:markdown

Content passed from the parent page: {{ include.custom_text }}

### How to Use the Markdown Include
To pull this file into a layout or another page, call it using the {% include %} Liquid tag followed by the filename:

1. Including it as raw Markdown
If you insert a .md include directly inside another .md file, Jekyll will parse the Markdown normally:
liquid
{% include snippet.md %}

2. Including it inside an HTML file / Layout
If you are calling the .md file inside an .html template (like a footer or layout file), you must run it through the markdownify filter so Jekyll knows to translate the Markdown syntax into HTML tags:
liquid
{{ include.snippet.md | markdownify }}
