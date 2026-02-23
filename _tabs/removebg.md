---
# the default layout is 'page'
icon: fas fa-broadcast-tower
order: 6
---

 <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            text-align: center;
        }
        img {
            max-width: 100%;
            margin: 10px 0;
        }
        button {
            padding: 10px 20px;
            background-color: #007bff;
            color: white;
            border: none;
            cursor: pointer;
        }
        button:hover {
            background-color: #0056b3;
        }
    </style>

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

<style>
/* Base modal styles */
.pgm-enforcer-btn {
    position: fixed;
    bottom: 20px;
    left: 20px; 
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.81);
    border: none;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    z-index: 100000000;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    pointer-events: auto !important;
}

.pgm-fadeOutButton {
    animation: pgm-fadeOutButton 9s forwards;
}

@keyframes pgm-fadeOutButton {
    0% { opacity: 0; }
    25% { opacity: 0; }
    35% { opacity: 1; } 
    90% { opacity: 1; }
    100% { opacity: 0; }
}

.pgm-enforcer-btn:hover {
    transform: scale(1.1);
    background:rgba(165, 165, 165, 0.53);
    opacity: 1; 
}

/* Mobile styles */
@media (max-width: 768px) {
    .pgm-enforcer-btn {
        bottom: 15px;
        left: 15px;
        width: 35px;
        height: 35px;
    }

    .pgm-enforcer-btn svg {
        width: 14px;
        height: 14px;
    }
}
</style>

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
</script><!-- End of pgm-modal -->
