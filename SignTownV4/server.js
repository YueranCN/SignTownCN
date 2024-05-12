const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Serve the page1.html and preload images and videos from 'page/sign-1'
app.get('/page/page1.html', async (req, res) => {
    const signDirPath = path.join(__dirname, 'public', 'page', 'sign-1');

    // Read all files in the 'page/sign-1' directory
    fs.readdir(signDirPath, (err, files) => {
        if (err) {
            console.error('Failed to list contents of directory:', err);
            return res.status(500).send('Error loading page');
        }

        // Filter and map the files to their public path
        const mediaFiles = files
            .filter(file => /\.(png|jpg|jpeg|gif|mp4|webm)$/.test(file))
            .map(file => `page/sign-1/${file}`);

        // Generate the preload script
        const preloadScript = `
            <script>
                document.addEventListener('DOMContentLoaded', function() {
                    const mediaToLoad = ${JSON.stringify(mediaFiles)};
                    let mediaLoaded = 0;
                    const totalMedia = mediaToLoad.length;
            
                    function mediaLoadedCallback() {
                        mediaLoaded += 1;
                        if (mediaLoaded === totalMedia) {
                            // After all media have loaded, display the body
                            document.body.style.display = 'block';
                        }
                    }
            
                    mediaToLoad.forEach(src => {
                        if (/\.(jpg|jpeg|png|gif)$/.test(src)) {
                            const img = new Image();
                            img.onload = mediaLoadedCallback;
                            img.onerror = mediaLoadedCallback;
                            img.src = src;
                        } else if (/\.(mp4|webm)$/.test(src)) {
                            const video = document.createElement('video');
                            video.onloadeddata = mediaLoadedCallback;
                            video.onerror = mediaLoadedCallback;
                            video.src = src;
                            video.load();
                        }
                    });
                });
            </script>
        `;

        // Read the page1.html content
        const page1HtmlPath = path.join(__dirname, 'public', 'page', 'page1.html');
        fs.readFile(page1HtmlPath, 'utf-8', (err, pageContent) => {
            if (err) {
                console.error('Failed to read page1.html:', err);
                return res.status(500).send('Error loading page');
            }

            // Construct the full HTML with the preload script
            const html = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Document</title>
                    ${preloadScript}
                </head>
                <body style="display: none;">
                    ${pageContent}
                </body>
                </html>
            `;
            res.send(html);
        });
    });
});

// Additional routes here
// ...

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
