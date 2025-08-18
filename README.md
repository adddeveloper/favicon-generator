```
+----------------------------------------------------------------------+
|   _____         _     _          _____           _                   |
|  |_   _|____  _| |_  | |_ ___   |  ___|_ ___   _(_) ___ ___  _ __    |
|    | |/ _ \ \/ / __| | __/ _ \  | |_ / _` \ \ / / |/ __/ _ \| '_ \   |
|    | |  __/>  <| |_  | || (_) | |  _| (_| |\ V /| | (_| (_) | | | |  |
|    |_|\___/_/\_\\__|  \__\___/  |_|  \__,_| \_/ |_|\___\___/|_| |_|  |
+----------------------------------------------------------------------+

```

This project is a **Text to Favicon Generator**.  
It lets you create favicons from text with **custom fonts, shapes, and colors**, then download them as a ready-to-use package.  

---

🚀 Features
- Live preview on canvas 🖼️  
- Choose from many **fonts**, **shapes**, and **colors**  
- Supports **transparent backgrounds**  
- Download as a ZIP with:  
  - `favicon.ico`  
  - Multiple PNG sizes (16x16 → 180x180)  
  - `site.webmanifest`  

---

## 💻 How to Use
1. Open **`index.html`** in your browser  
2. Enter your text + pick styles  
3. Click **Generate** → **Download**  
4. Extract the ZIP → add to your website  

```html
<!-- Standard favicon -->
<link rel="icon" type="image/x-icon" href="/favicon.ico">

<!-- PNG favicons -->
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png">
<link rel="icon" type="image/png" sizes="64x64" href="/favicon-64x64.png">

<!-- Apple Touch Icon -->
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">

<!-- Web App Manifest -->
<link rel="manifest" href="/site.webmanifest">
