---
# the default layout is 'page'
icon: fas fa-broadcast-tower
order: 6
---

<div class="container">
        <h1>Remove Image Background</h1>
        <input type="file" id="imageInput" accept="image/*">
        <button onclick="removeBackground()">Remove Background</button>
        <div id="preview">
            <h3>Original Image</h3>
            <img id="originalImage" src="" alt="Original" style="display: none;">
            <h3>Result</h3>
            <img id="resultImage" src="" alt="Result" style="display: none;">
        </div>
        <a id="downloadLink" style="display: none;">Download Result</a>
</div>
<script>
        const apiKey = 'rQ1f3JW7pkwN8g3UQ7tsVpkN';
        const imageInput = document.getElementById('imageInput');
        const originalImage = document.getElementById('originalImage');
        const resultImage = document.getElementById('resultImage');
        const downloadLink = document.getElementById('downloadLink');

  imageInput.addEventListener('change', () => {
            const file = imageInput.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                    originalImage.src = reader.result;
                    originalImage.style.display = 'block';
                };
                reader.readAsDataURL(file);
            }
        });

  async function removeBackground() {
            const file = imageInput.files[0];
            if (!file) {
                alert('Please select an image first!');
                return;
            }

  const formData = new FormData();
            formData.append('image_file', file);
            formData.append('size', 'auto');

  try {
                const response = await fetch('https://api.remove.bg/v1.0/removebg', {
                    method: 'POST',
                    headers: {
                        'X-Api-Key': apiKey
                    },
                    body: formData
                });

  if (!response.ok) {
                    throw new Error('Failed to remove background');
                }

  const blob = await response.blob();
                const url = URL.createObjectURL(blob);
                resultImage.src = url;
                resultImage.style.display = 'block';

  // Set up download link
                downloadLink.href = url;
                downloadLink.download = 'no-background.png';
                downloadLink.style.display = 'block';
                downloadLink.textContent = 'Download Result';
            } catch (error) {
                console.error('Error:', error);
                alert('Error removing background. Please try again.');
            }
        }
    </script>

<script>
document.addEventListener("DOMContentLoaded", function() {
    var btn = document.querySelector(".pgm-enforcer-btn");
    var href = btn.getAttribute("href");
    btn.setAttribute("href", href.replace("{window.location.href}", encodeURIComponent(window.location.href)));
    
    btn.addEventListener("animationend", function(e) {
        if (e.animationName === "pgm-fadeOutButton") {
            this.style.display = "none";
        }
    });
});
</script>
