# Shrijeta Global Website

This repository contains the source code for the Shrijeta Global company website.

## Project Structure

-   `index.html`: The main homepage. Other HTML pages can be added as needed.
-   `assets/logo.svg`: The company logo.
-   `styles.css`: Contains non-critical, supplementary CSS styles.
-   `script.js`: Contains the JavaScript for interactive features, such as the mobile navigation.

## Header Configuration

The website features a reusable header component. To ensure consistency, the same HTML and CSS should be used on all pages. The instructions for reusing the header are included as comments in `index.html`.

### Changing the Logo

1.  Place your new logo file in the `assets/` directory.
2.  In each HTML file, find the `<header>` block.
3.  Update the `src` attribute of the `<img>` tag inside the `logo-link`:
    ```html
    <img src="assets/new-logo.svg" alt="Shrijeta Global" width="160" height="40">
    ```

### Changing the Phone Number

1.  In each HTML file, find the `<header>` block.
2.  Locate the anchor tag with the class `phone-number`.
3.  Update the `href` attribute (for the `tel:` link) and the display text:
    ```html
    <a href="tel:+91NEWNUMBER" class="phone-number">+91-NEW-NUMBER</a>
    ```

## Mobile Navigation

The website uses a responsive header with a JavaScript-powered mobile menu designed for accessibility and ease of use.

### How It Works

-   On viewports narrower than 768px, a hamburger button is displayed.
-   Clicking the hamburger button toggles the visibility of the main navigation menu.
-   The button's state is communicated to assistive technologies via the `aria-expanded` attribute, which the script toggles between `true` and `false`.
-   The menu is associated with the button via the `aria-controls` attribute.
-   When the menu is open, body scroll is locked to prevent scrolling of the background content.

### Keyboard Accessibility

-   **Tab**: The hamburger button and all navigation links are focusable, with a visible outline.
-   **Enter/Space**: When the hamburger button is focused, pressing `Enter` or `Space` will open or close the menu.
-   **Esc**: Pressing the `Escape` key will close the mobile menu if it is open.
-   Clicking on any navigation link will also close the menu.

## Testing Instructions

To test the responsive behavior and accessibility of the header:

### 1. Test Responsive Layout

1.  Open `index.html` in a web browser (e.g., Chrome, Firefox).
2.  Open the browser's Developer Tools (usually by pressing `F12` or `Ctrl+Shift+I`).
3.  Toggle the device toolbar to enter responsive design mode (icon of a phone/tablet, or `Ctrl+Shift+M`).
4.  Set the viewport width to **375px**.
5.  **Verify:**
    -   The logo is visible on the left.
    -   The hamburger menu icon is visible on the right.
    -   The phone number is visible in a bar just beneath the main header.
    -   Clicking the hamburger icon opens the navigation menu.
    -   Clicking a link in the menu closes it.

### 2. Test Keyboard Navigation (on mobile viewport)

1.  With the responsive view open, click on the page content and press the `Tab` key.
2.  **Verify:**
    -   A visible focus outline appears on the logo link, then the hamburger button.
3.  Tab to the hamburger button and press `Enter` to open the menu.
4.  Press `Tab` again.
5.  **Verify:**
    -   Focus moves to the first link inside the opened menu (`Home`).
    -   You can tab through all the links in the menu, including the "Get a Quote" link.
6.  Press `Esc`.
7.  **Verify:**
    -   The menu closes, and focus returns to the hamburger button.
