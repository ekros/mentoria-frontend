# Let's practice the devTools with random dogs

## Setup

Load index.html in the browser. For that, you can use `live-server` or similar tool (https://www.npmjs.com/package/live-server).

## Tasks

- 1. No images are loaded. Use the console to identify the error. What could be happening?
- 2. To fix the problem, go to the Network tab and look for a request called "20". If you go to the "Response" tab you will see the shape of the data. Try to understand what is the issue in the `loadMore` function.
- 3. Now the images are visible, but they are too small. Use the inspector to find out what style is setting the size of the images. Figure out how to make them bigger using existing css classes (we want them to be 200px tall) 
- 4. Application tab (there's manu things in there, but we will be working only with local storage now):
    - Use the button "Save current search" to persist the current search into local storage.
    - Go to the Application tab and under Local Storage you will find the key "lastImagesURL".
    - Reload the page and see how a different set of images are loaded.
    - Click on "Load last search" and... boom! your last search is back!
    - As we don't have a button to clear the local storage, let's do it manually. Right click on the key "lastImagesURL" and select "delete".
    - Reload the page again and click on "Load last search". Nothing happens, because now there's nothing stored.
    - Click again in "Save current search" and observe how the key "lastImagesURL" is back.
    - Read the functions `saveToLocalStorage` and `loadFromLocalStorage` and try to understand what they do.
