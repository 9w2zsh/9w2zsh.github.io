// Get current domain dynamically
const pgm_currentDomain = window.location.origin;

// Create the bell button
let pgm_bellButton = document.createElement("button");
pgm_bellButton.innerHTML = "ðŸ””"; // Bell icon
pgm_bellButton.id = "pgm_bellButton";
pgm_bellButton.style.position = "fixed";
pgm_bellButton.style.bottom = "20px";
pgm_bellButton.style.left = "20px";
pgm_bellButton.style.width = "50px";
pgm_bellButton.style.height = "50px";
pgm_bellButton.style.background = "blue";
pgm_bellButton.style.color = "white";
pgm_bellButton.style.borderRadius = "50%";
pgm_bellButton.style.border = "none";
pgm_bellButton.style.cursor = "pointer";
pgm_bellButton.style.fontSize = "24px";
pgm_bellButton.style.zIndex = "9999";
document.body.appendChild(pgm_bellButton);

// Create the modal
let pgm_modal = document.createElement("div");
pgm_modal.id = "pgm_modal";
pgm_modal.style.display = "none";
pgm_modal.style.position = "fixed";
pgm_modal.style.zIndex = "10000";
pgm_modal.style.left = "0";
pgm_modal.style.top = "0";
pgm_modal.style.width = "100%";
pgm_modal.style.height = "100%";
pgm_modal.style.backgroundColor = "rgba(0,0,0,0.5)";
pgm_modal.innerHTML = `
    <div id="pgm_modalContent" style="background:white; margin:10% auto; padding:20px; width:50%; border-radius:10px; position:relative;">
        <span id="pgm_closeModal" style="float:right; font-size:24px; cursor:pointer;">&times;</span>
        <h2>Report a Malicious Page</h2>
        <form id="pgm_reportForm">
            <label for="pgm_reporterEmail">Your Email:</label>
            <input type="email" id="pgm_reporterEmail" name="email" required style="width:100%; padding:8px; margin:5px 0;">

            <label for="pgm_reportReason">Reason:</label>
            <textarea id="pgm_reportReason" name="reason" required style="width:100%; padding:8px; margin:5px 0;"></textarea>

            <input type="hidden" id="pgm_pageURL" name="url" value="${window.location.href}">
            <input type="hidden" id="pgm_domain" name="domain" value="${pgm_currentDomain}">

            <button type="submit" id="pgm_submitButton" style="background:blue; color:white; padding:10px; border:none; cursor:pointer;">Submit</button>
        </form>
    </div>
`;
document.body.appendChild(pgm_modal);

// Show modal when bell button is clicked
pgm_bellButton.addEventListener("click", () => pgm_modal.style.display = "block");

// Close modal
document.getElementById("pgm_closeModal").addEventListener("click", () => pgm_modal.style.display = "none");
window.addEventListener("click", event => {
    if (event.target === pgm_modal) pgm_modal.style.display = "none";
});

// Handle form submission
document.getElementById("pgm_reportForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let pgm_formData = new FormData(this);

    fetch(pgm_currentDomain + "/api/pgm-page-monitor.php", {  // Uses the current domain dynamically
        method: "POST",
        body: pgm_formData
    })
    .then(response => response.text())
    .then(data => {
        alert("Report submitted successfully!");
        pgm_modal.style.display = "none";
    })
    .catch(error => console.error("Error:", error));
});