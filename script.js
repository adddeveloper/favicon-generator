var debug__ = false;
// DOM elements
const faviconText = document.getElementById('faviconText');
const textColor = document.getElementById('textColor');
const textColorValue = document.getElementById('textColorValue');
const bgColor = document.getElementById('bgColor');
const bgColorValue = document.getElementById('bgColorValue');
const fontFamily = document.getElementById('fontFamily');
const fontWeight = document.getElementById('fontWeight');
const fontSize = document.getElementById('fontSize');
const fontSizeValue = document.getElementById('fontSizeValue');
const shapeType = document.getElementById('shapeType');
const borderRadius = document.getElementById('borderRadius');
const borderRadiusValue = document.getElementById('borderRadiusValue');
const borderColor = document.getElementById('borderColor');
const borderColorValue = document.getElementById('borderColorValue');
const borderWidth = document.getElementById('borderWidth');
const borderWidthValue = document.getElementById('borderWidthValue');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const faviconPreview = document.getElementById('faviconPreview');
const ctx = faviconPreview.getContext('2d');
const roundedControls = document.getElementById('roundedControls');
const canvasBgColor = document.getElementById('canvasBgColor');
const canvasBgColorValue = document.getElementById('canvasBgColorValue');

// Create link element for favicon
const faviconLink = document.createElement('link');
faviconLink.rel = 'icon';
faviconLink.type = 'image/png';
document.head.appendChild(faviconLink);

// === FONT HANDLING ===

// Load Google Fonts dynamically
function loadFont(font) {
    WebFont.load({
        google: { families: [font] },
        active: generateFavicon
    });
}

// Populate dropdown (manual list here, can be replaced with API fetch)
const fonts = [
  // Sans-serif
  "Roboto", "Open Sans", "Lato", "Montserrat", "Poppins",
  "Oswald", "Raleway", "Nunito", "Mukta", "Rubik",
  "Work Sans", "Noto Sans", "Source Sans Pro", "Inter", "Cabin",
  "Exo 2", "Karla", "Fira Sans", "Hind", "Titillium Web",
  
  // Serif
  "Playfair Display", "Merriweather", "Lora", "PT Serif", "Crimson Text",
  "Bitter", "Roboto Slab", "Noto Serif", "Cormorant Garamond", "Libre Baskerville",
  "Arvo", "Domine", "Vollkorn", "Spectral", "Source Serif Pro",
  
  // Display / Decorative
  "Pacifico", "Lobster", "Dancing Script", "Bebas Neue", "Fjalla One",
  "Anton", "Amatic SC", "Abril Fatface", "Great Vibes", "Shadows Into Light",
  "Fredoka One", "Chewy", "Permanent Marker", "Courgette", "Satisfy",
  "Gloria Hallelujah", "Caveat", "Architects Daughter", "Indie Flower", "Handlee",
  
  // Monospace
  "Ubuntu Mono", "Fira Mono", "Inconsolata", "Source Code Pro", "Space Mono",
  "Cousine", "PT Mono", "Roboto Mono", "Share Tech Mono", "Overpass Mono",

  // random ones
  "Baloo 2", "Coiny", "Chilanka", "Patrick Hand", "Covered By Your Grace",
"Finger Paint", "Cabin Sketch", "Walter Turncoat", "Yatra One", "Shojumaru",
"Sunshiney", "Frijole", "Special Elite", "Unica One", "Bowlby One",
"Allan", "Aladin", "Yellowtail", "Baumans", "Keania One",
"Fugaz One", "Gravitas One", "Jolly Lodger", "Rye", "Knewave",
"Megrim", "Titan One", "Stardos Stencil", "UnifrakturCook", "UnifrakturMaguntia",
"Vast Shadow", "Pirata One", "Press Start 2P", "Creepster", "Eater",
"Slackey", "Mountains of Christmas", "Henny Penny", "Love Ya Like A Sister", "Freckle Face"
];


// function populateFonts() {
//     fonts.forEach(f => {
//         const opt = document.createElement("option");
//         opt.value = f;
//         opt.textContent = f;
//         fontFamily.appendChild(opt);
//     });
// }
// populateFonts();

// Load selected font
fontFamily.addEventListener("change", () => {
    loadFont(fontFamily.value);
});

// === RANGE INPUT UPDATERS ===
function updateRangeValueDisplay(rangeInput, valueDisplay) {
    valueDisplay.textContent = rangeInput.value;
}

fontSize.addEventListener('input', () => {
    updateRangeValueDisplay(fontSize, fontSizeValue);
    generateFavicon();
});

borderRadius.addEventListener('input', () => {
    updateRangeValueDisplay(borderRadius, borderRadiusValue);
    generateFavicon();
});

borderWidth.addEventListener('input', () => {
    updateRangeValueDisplay(borderWidth, borderWidthValue);
    generateFavicon();
});

// Initialize range value displays
updateRangeValueDisplay(fontSize, fontSizeValue);
updateRangeValueDisplay(borderRadius, borderRadiusValue);
updateRangeValueDisplay(borderWidth, borderWidthValue);

// === COLOR HANDLING WITH TRANSPARENCY SUPPORT ===

// Helper function to sync color inputs
function syncColor(colorInput, textInput) {
    const value = textInput.value.trim().toLowerCase();
    if (value === 'transparent') {
        // Keep the color picker's value but mark the text input
        textInput.style.fontStyle = 'italic';
        textInput.style.color = '#888';
    } else if (value.match(/^#[0-9a-f]{6}$/i) || value.match(/^#[0-9a-f]{3}$/i)) {
        colorInput.value = value;
        textInput.style.fontStyle = '';
        textInput.style.color = '';
    }
    generateFavicon();
}

// set up canvas background color listners
canvasBgColor.addEventListener('input', () => {
    canvasBgColorValue.value = canvasBgColor.value;
    canvasBgColorValue.style.fontStyle = '';
    canvasBgColorValue.style.color = '';
    generateFavicon();
});

canvasBgColorValue.addEventListener('input', () => {
    syncColor(canvasBgColor, canvasBgColorValue);
});

// Set up color event listeners
textColor.addEventListener('input', () => {
    textColorValue.value = textColor.value;
    textColorValue.style.fontStyle = '';
    textColorValue.style.color = '';
    generateFavicon();
});

textColorValue.addEventListener('input', () => {
    syncColor(textColor, textColorValue);
});

bgColor.addEventListener('input', () => {
    bgColorValue.value = bgColor.value;
    bgColorValue.style.fontStyle = '';
    bgColorValue.style.color = '';
    generateFavicon();
});

bgColorValue.addEventListener('input', () => {
    syncColor(bgColor, bgColorValue);
});

borderColor.addEventListener('input', () => {
    borderColorValue.value = borderColor.value;
    borderColorValue.style.fontStyle = '';
    borderColorValue.style.color = '';
    generateFavicon();
});

borderColorValue.addEventListener('input', () => {
    syncColor(borderColor, borderColorValue);
});

// Shape type change
shapeType.addEventListener('change', () => {
    roundedControls.style.display = shapeType.value === 'rounded' ? 'block' : 'none';
    generateFavicon();
});

// Input event listeners
[faviconText, fontWeight].forEach(el => {
    el.addEventListener('input', generateFavicon);
});

// === DRAWING FUNCTIONS WITH TRANSPARENCY SUPPORT ===
function generateFavicon() {
    const size = 128;
    ctx.clearRect(0, 0, size, size);

    // Draw canvas background first
    const canvasBgTransparent = canvasBgColorValue.value.trim().toLowerCase() === 'transparent';
    if (!canvasBgTransparent) {
        ctx.fillStyle = canvasBgColorValue.value;
        ctx.fillRect(0, 0, size, size);
    }

    // Then draw the shape and text
    drawShape(ctx, size);
    drawText(ctx, size);

    downloadBtn.disabled = false;
    updateSiteFavicon();
}

function updateSiteFavicon() {
    const faviconSize = 32;
    const faviconCanvas = document.createElement('canvas');
    faviconCanvas.width = faviconSize;
    faviconCanvas.height = faviconSize;
    const faviconCtx = faviconCanvas.getContext('2d');

    // Clear with transparent background
    faviconCtx.clearRect(0, 0, faviconSize, faviconSize);
    faviconCtx.drawImage(faviconPreview, 0, 0, faviconSize, faviconSize);

    // Remove all existing favicon / manifest links
    document.querySelectorAll(
        'link[rel="icon"], link[rel="shortcut icon"], link[rel="apple-touch-icon"], link[rel="manifest"]'
    ).forEach(el => el.remove());

    // Create and inject new favicon
    const faviconLink = document.createElement('link');
    faviconLink.rel = 'icon';
    faviconLink.type = 'image/png';
    faviconLink.href = faviconCanvas.toDataURL('image/png');
    document.head.appendChild(faviconLink);
}


function drawShape(ctx, size) {
    const center = size / 2;
    const shape = shapeType.value;

    // keep border sane
    const borderSize = parseInt(borderWidth.value, 10) || 0;
    const maxAllowedBorder = Math.min(size / 2 - 1, borderSize);
    const shapeSize = size - maxAllowedBorder * 2;

    // decide what to use for FILL
    const useBorderAsFill = false;
    const fillRaw = (useBorderAsFill ? borderColorValue.value : bgColorValue.value).trim().toLowerCase();
    const strokeRaw = borderColorValue.value.trim().toLowerCase();

    const fillTransparent = fillRaw === 'transparent';
    const strokeTransparent = strokeRaw === 'transparent' || maxAllowedBorder === 0;

    if (!fillTransparent) {
        ctx.fillStyle = useBorderAsFill ? borderColorValue.value : bgColorValue.value;
    }
    if (!strokeTransparent) {
        ctx.strokeStyle = borderColorValue.value;
        ctx.lineWidth = maxAllowedBorder;
    }

    ctx.beginPath();

    switch (shape) {
        case 'circle':
            ctx.arc(center, center, shapeSize / 2, 0, Math.PI * 2);
            break;

        case 'square':
            ctx.rect(center - shapeSize / 2, center - shapeSize / 2, shapeSize, shapeSize);
            break;

        case 'rounded':
            ctx.roundRect(
                center - shapeSize / 2,
                center - shapeSize / 2,
                shapeSize,
                shapeSize,
                parseInt(borderRadius.value, 10) || 0
            );
            break;

        case 'triangle':
            ctx.moveTo(center, center - shapeSize / 2);
            ctx.lineTo(center + shapeSize / 2, center + shapeSize / 2);
            ctx.lineTo(center - shapeSize / 2, center + shapeSize / 2);
            ctx.closePath();
            break;

        case 'pentagon':
            drawPolygon(ctx, center, center, shapeSize / 2, 5);
            break;

        case 'hexagon':
            drawPolygon(ctx, center, center, shapeSize / 2, 6);
            break;

        case 'octagon':
            drawPolygon(ctx, center, center, shapeSize / 2, 8);
            break;

        case 'star': {
            const outer = (shapeSize / 2) * 0.9;
            const inner = outer * 0.4;
            drawStar(ctx, center, center, 5, outer, inner);
            break;
        }

        case 'diamond':
            ctx.moveTo(center, center - shapeSize / 2);
            ctx.lineTo(center + shapeSize / 2, center);
            ctx.lineTo(center, center + shapeSize / 2);
            ctx.lineTo(center - shapeSize / 2, center);
            ctx.closePath();
            break;

        case 'heart':
            drawHeart(ctx, center, center, shapeSize);
            break;
    }

    if (!fillTransparent) ctx.fill();
    if (!strokeTransparent) ctx.stroke();
}


function drawPolygon(ctx, x, y, radius, sides) {
    ctx.moveTo(x + radius * Math.cos(0), y + radius * Math.sin(0));
    for (let i = 1; i <= sides; i++) {
        ctx.lineTo(
            x + radius * Math.cos(i * 2 * Math.PI / sides),
            y + radius * Math.sin(i * 2 * Math.PI / sides)
        );
    }
    ctx.closePath();
}

function drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius) {
    // Adjust the center position for the star specifically
    // to account for its pointy nature
    const verticalOffset = outerRadius * 0.1; // Slight adjustment to vertically center
    
    let rot = Math.PI / 2 * 3;
    let x, y;
    const step = Math.PI / spikes;

    ctx.moveTo(cx, cy - outerRadius + verticalOffset);
    for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius + verticalOffset;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius + verticalOffset;
        ctx.lineTo(x, y);
        rot += step;
    }
    ctx.lineTo(cx, cy - outerRadius + verticalOffset);
    ctx.closePath();
}

function drawHeart(ctx, x, y, size) {
    const curve = size / 4;
    ctx.moveTo(x, y - size / 2);
    ctx.bezierCurveTo(x, y - size/2 + curve, x - size/2, y - size/2 + curve, x - size/2, y);
    ctx.bezierCurveTo(x - size/2, y + size/2 - curve, x, y + size/2, x, y + size/2);
    ctx.bezierCurveTo(x, y + size/2, x + size/2, y + size/2 - curve, x + size/2, y);
    ctx.bezierCurveTo(x + size/2, y - size/2 + curve, x, y - size/2 + curve, x, y - size/2);
}

function drawText(ctx, size) {
    const text = faviconText.value;
    const textTransparent = textColorValue.value.trim().toLowerCase() === 'transparent';
    if (!text || textTransparent) return;

    // Set font properties
    ctx.font = `${fontWeight.value} ${fontSize.value}px "${fontFamily.value}"`;
    ctx.fillStyle = textColorValue.value;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'alphabetic'; // We'll handle baseline ourselves

    // Measure the text
    const metrics = ctx.measureText(text);
    const textWidth = metrics.width;
    const textHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;

    // Calculate position
    const x = size / 2;
    const y = (size / 2) + (metrics.actualBoundingBoxAscent / 2) - (metrics.actualBoundingBoxDescent / 2);

    // Clear previous text
    // ctx.clearRect(0, 0, size, size);

    // Draw the text
    ctx.fillText(text, x, y);

    // Debug visualization (remove in production)
    if (debug__) { // Change to true to see alignment guides
        ctx.strokeStyle = 'rgba(255,0,0,0.5)';
        ctx.lineWidth = 1;
        
        // Center crosshair
        ctx.beginPath();
        ctx.moveTo(size/2, 0);
        ctx.lineTo(size/2, size);
        ctx.moveTo(0, size/2);
        ctx.lineTo(size, size/2);
        ctx.stroke();
        
        // Text bounding box
        ctx.strokeStyle = 'rgba(0,0,255,0.5)';
        ctx.strokeRect(
            x - textWidth/2,
            y - metrics.actualBoundingBoxAscent,
            textWidth,
            textHeight
        );
    }
}

// Download favicon
// downloadBtn.addEventListener('click', () => {
//     const link = document.createElement('a');
//     link.download = 'favicon.png';
//     link.href = faviconPreview.toDataURL('image/png');
//     link.click();
// });
// Download favicon as ZIP with all required files
// Download favicon as ZIP with all required files
// Download favicon as ZIP with all required files
downloadBtn.addEventListener('click', async () => {
    const sizes = [
        { name: 'apple-touch-icon.png', size: 180 },
        { name: 'favicon-64x64.png', size: 64 },
        { name: 'favicon-48x48.png', size: 48 },
        { name: 'favicon-32x32.png', size: 32 },
        { name: 'favicon-16x16.png', size: 16 }
    ];

    const manifest = {
        "name": "Favicon",
        "short_name": "Favicon",
        "icons": [
            { "src": "/favicon-64x64.png", "sizes": "64x64", "type": "image/png" },
            { "src": "/favicon-48x48.png", "sizes": "48x48", "type": "image/png" },
            { "src": "/favicon-32x32.png", "sizes": "32x32", "type": "image/png" },
            { "src": "/favicon-16x16.png", "sizes": "16x16", "type": "image/png" }
        ],
        "theme_color": bgColorValue.value === 'transparent' ? "#ffffff" : bgColorValue.value,
        "background_color": bgColorValue.value === 'transparent' ? "#ffffff" : bgColorValue.value,
        "display": "standalone"
    };

    // Load JSZip dynamically
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js';
    document.head.appendChild(script);

    script.onload = async () => {
        const JSZip = window.JSZip;
        const zip = new JSZip();

        // Store PNG buffers for favicon.ico
        const pngBuffers = [];

        for (let { name, size } of sizes) {
            const canvas = document.createElement('canvas');
            canvas.width = size;
            canvas.height = size;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(faviconPreview, 0, 0, size, size);

            const dataURL = canvas.toDataURL('image/png');
            const base64Data = dataURL.replace(/^data:image\/png;base64,/, '');
            zip.file(name, base64Data, { base64: true });

            // Keep 16, 32, 48, 64 for ICO
            if ([16, 32, 48, 64].includes(size)) {
                const binary = atob(base64Data);
                const bytes = new Uint8Array(binary.length);
                for (let i = 0; i < binary.length; i++) {
                    bytes[i] = binary.charCodeAt(i);
                }
                pngBuffers.push({ size, bytes });
            }
        }

        // --- Generate favicon.ico ---
        function createICO(images) {
            const headerSize = 6;
            const dirEntrySize = 16;
            const imageCount = images.length;
            let offset = headerSize + dirEntrySize * imageCount;

            let totalSize = offset;
            for (let img of images) totalSize += img.bytes.length;

            const buffer = new ArrayBuffer(totalSize);
            const view = new DataView(buffer);
            let pos = 0;

            // ICONDIR header
            view.setUint16(pos, 0, true); pos += 2;
            view.setUint16(pos, 1, true); pos += 2; // ICO type
            view.setUint16(pos, imageCount, true); pos += 2;

            // ICONDIRENTRY for each image
            let imageOffset = offset;
            for (let img of images) {
                view.setUint8(pos++, img.size === 256 ? 0 : img.size); // width
                view.setUint8(pos++, img.size === 256 ? 0 : img.size); // height
                view.setUint8(pos++, 0); // colors in palette
                view.setUint8(pos++, 0); // reserved
                view.setUint16(pos, 1, true); pos += 2; // color planes
                view.setUint16(pos, 32, true); pos += 2; // bits per pixel
                view.setUint32(pos, img.bytes.length, true); pos += 4; // size
                view.setUint32(pos, imageOffset, true); pos += 4; // offset
                imageOffset += img.bytes.length;
            }

            // Append image data
            const outBytes = new Uint8Array(buffer);
            let dataPos = offset;
            for (let img of images) {
                outBytes.set(img.bytes, dataPos);
                dataPos += img.bytes.length;
            }

            return new Blob([buffer], { type: "image/x-icon" });
        }

        const icoBlob = createICO(pngBuffers);
        zip.file("favicon.ico", icoBlob);

        // Add webmanifest
        zip.file('site.webmanifest', JSON.stringify(manifest, null, 2));

        // Generate ZIP
        const content = await zip.generateAsync({ type: 'blob' });
        const link = document.createElement('a');
        link.download = 'favicons.zip';
        link.href = URL.createObjectURL(content);
        link.click();

        setTimeout(() => {
            URL.revokeObjectURL(link.href);
            document.head.removeChild(script);
        }, 100);
    };
});



// Initialize
loadFont(fonts[0]);
generateFavicon();