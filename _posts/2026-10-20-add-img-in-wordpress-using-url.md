---
title: "Add image in Wordpress using URL link"
categories: [wordpress]
tags: [link, url]
---
## how to find the image url link in wordpress

To find an image URL in WordPress, use the Media Library or inspect the image on the live page. 

### Method 1: Using the Media Library (Recommended)
1. Log in to your WordPress admin dashboard.
2. Click on Media → Library in the left-hand menu.
3. Click on the image you want to use.
4. In the attachment details panel or pop-up window, look for the field labeled File URL.
5. Click the Copy URL to clipboard (or "Copy link") button. 

### Method 2: From the Live Page Source
1. Open your website and go to the page containing the image.
2. Right-click the image and select Inspect (or Inspect Element).
3. Look for the src="..." attribute inside the <img> tag in the code panel, or right-click the image and select Copy image link / Copy link address. 

### How to use it in a Custom HTML Paragraph
Paste the copied URL into the src attribute of a standard HTML <img> tag inside your Custom HTML block: 
```html
<img src="YOUR_COPIED_IMAGE_URL_HERE" alt="Description of image" />
```