##

🔗 **LinkedIn Profile Picture Modifier Chrome Extension**

This Chrome extension modifies profile pictures on the LinkedIn homepage by replacing them with a specified image.

## Installation

To install and use this extension:

1. Clone or download this repository to your local machine.
2. Open Google Chrome.
3. Navigate to `chrome://extensions/`.
4. Enable Developer mode using the toggle switch in the upper-right corner.
5. Click on "Load unpacked" and select the folder containing the extension files.

## Usage

Once the extension is installed:

1. Open Google Chrome.
2. Visit [LinkedIn](https://www.linkedin.com/).
3. The extension will automatically modify profile pictures on the LinkedIn homepage.

## Customization

To customize the replacement image for profile pictures:

1. Open the `content.js` file in the `src` directory.
2. Locate the `modifyProfilePictures()` function.
3. Replace the `img.src` value with the URL of your desired replacement image.

```javascript
// Replace the src attribute with the URL of the specified image
img.src = "";
