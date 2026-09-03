---
# the default layout is 'page'
icon: fas fa-broadcast-tower
order: 6
---

<div class="container">
    <h1>Remove Image Background</h1>
    <label for="apiKey">remove.bg API key</label>
    <input type="password" id="apiKey" autocomplete="off" required>
    <input type="file" id="imageInput" accept="image/*">
    <button id="removeBackgroundButton" type="button">Remove Background</button>
    <p id="status" role="status" aria-live="polite"></p>
    <div id="preview">
        <h3>Original Image</h3>
        <img id="originalImage" alt="Original image preview" style="display: none;">
        <h3>Result</h3>
        <img id="resultImage" alt="Image with background removed" style="display: none;">
    </div>
    <a id="downloadLink" style="display: none;" download="no-background.png">Download Result</a>
</div>
<script>
    const apiKeyInput = document.getElementById('apiKey');
    const imageInput = document.getElementById('imageInput');
    const removeBackgroundButton = document.getElementById('removeBackgroundButton');
    const originalImage = document.getElementById('originalImage');
    const resultImage = document.getElementById('resultImage');
    const downloadLink = document.getElementById('downloadLink');
    const status = document.getElementById('status');
    let resultUrl;

    imageInput.addEventListener('change', () => {
        const file = imageInput.files && imageInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                originalImage.src = reader.result;
                originalImage.style.display = 'block';
            };
            reader.readAsDataURL(file);
            resultImage.style.display = 'none';
            downloadLink.style.display = 'none';
            status.textContent = '';
        }
    });

    removeBackgroundButton.addEventListener('click', removeBackground);

    async function removeBackground() {
        const apiKey = apiKeyInput.value.trim();
        const file = imageInput.files && imageInput.files[0];
        if (!apiKey || !file) {
            status.textContent = !apiKey
                ? 'Please enter your remove.bg API key.'
                : 'Please select an image first.';
            return;
        }

        const formData = new FormData();
        formData.append('image_file', file);
        formData.append('size', 'auto');

        removeBackgroundButton.disabled = true;
        status.textContent = 'Removing background...';
        try {
            const response = await fetch('https://api.remove.bg/v1.0/removebg', {
                method: 'POST',
                headers: {
                    'X-Api-Key': apiKey
                },
                body: formData
            });

            if (!response.ok) {
                throw new Error('The remove.bg request failed (' + response.status + ').');
            }

            const blob = await response.blob();
            if (resultUrl) {
                URL.revokeObjectURL(resultUrl);
            }
            resultUrl = URL.createObjectURL(blob);
            resultImage.src = resultUrl;
            resultImage.style.display = 'block';
            downloadLink.href = resultUrl;
            downloadLink.style.display = 'inline-block';
            status.textContent = 'Background removed successfully.';
        } catch (error) {
            console.error('Error removing background:', error);
            status.textContent = error.message || 'Error removing background. Please try again.';
        } finally {
            removeBackgroundButton.disabled = false;
        }
    }
</script>
