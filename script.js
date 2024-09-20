// Handle the form submission
document.getElementById('unblockForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const urlInput = document.getElementById('urlInput').value;
    const iframe = document.getElementById('unblockFrame');

    // If the URL doesn't have http/https, prepend it
    let formattedUrl = urlInput.startsWith('http') ? urlInput : `http://${urlInput}`;

    // Set the iframe source to the entered URL
    iframe.src = formattedUrl;
});
