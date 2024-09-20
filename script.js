// Use corsproxy.io as the proxy service
const proxyUrl = "https://corsproxy.io/?";

// Handle form submission for the proxy unblocker
document.getElementById('unblockForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const urlInput = document.getElementById('urlInput').value;
    const iframe = document.getElementById('unblockFrame');

    // Add http:// if it's missing
    let formattedUrl = urlInput.startsWith('http') ? urlInput : `http://${urlInput}`;

    // Load the URL via the proxy into the iframe
    iframe.src = proxyUrl + formattedUrl;
});
