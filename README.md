Tab Title Picker
Tab Title Picker is a lightweight Chrome Extension that allows you to quickly retrieve the title of your current browser tab with the click of a button. It's a handy tool for developers, researchers, or anyone needing to grab tab titles on the go.

🔍 Features
One-click access to the current tab's title

Modern and sleek popup UI with gradient background and animations

Error handling for edge cases (no active tab, permission issues, etc.)

📦 Files
File	Description
manifest.json	Declares extension metadata and permissions
popup.html	The user interface shown in the extension popup
popup.js	Handles logic to fetch and display the tab title

🚀 How It Works
Click the extension icon in the browser.

A popup appears with a "Get Tab Title" button.

On clicking the button, the extension fetches the title of the currently active tab.

The title is displayed inside the popup with a subtle animation.

🧩 Installation
Clone or download this repository.

Open Chrome and navigate to chrome://extensions/.

Enable Developer mode (top-right corner).

Click Load unpacked and select the folder where this project resides.

The "Tab Title Picker" extension icon will appear in your toolbar.
🛠 Technologies Used
HTML5

CSS3 (with gradient styles and animations)

JavaScript (with async/await)

Chrome Extensions API (Manifest V3)
