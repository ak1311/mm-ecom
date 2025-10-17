# TODO: Add logo.png as logo in Header component

- [x] Edit mmecom/src/components/Header.jsx: Replace the text "Logo" with an img tag pointing to /assets/logo.png
- [x] Edit mmecom/src/components/Header.css: Update .logo styles to suit an image (set width, height, etc.)
- [x] Test the header rendering in the app to ensure the logo displays correctly (App is running on http://localhost:5174/)

# TODO: Set Merriweather from Google Fonts as default font across the website

- [x] Add Google Fonts link for Merriweather in index.html
- [x] Update font-family in index.css to use Merriweather
- [x] Verify the font change in the running app (Hot reload shows updates applied)

# TODO: Change the background color of the search bar to white

- [x] Update .search-bar in Header.css to add background-color: white

# TODO: Update search bar styling and add MUI icon import

- [x] Decrease border-radius to 5px in Header.css
- [x] Change border-color to #006666 in Header.css
- [x] Add import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'; to Header.jsx

# TODO: Add search icon inside the search box on the right side

- [x] Modify Header.jsx to wrap input in a container and add SearchOutlinedIcon
- [x] Update Header.css to style the search container and position the icon

# TODO: Change the font color inside search box to black

- [x] Add color: black; to .search-bar in Header.css

# TODO: Move the search icon a little more to the right

- [x] Increase the right position of .search-icon in Header.css

# TODO: Replace Heart, Cart, Profile text with icons and remove background

- [x] Import MUI icons for Heart, Cart, Profile in Header.jsx
- [x] Replace text in icon-placeholder divs with icons
- [x] Update Header.css to remove background from .icon-placeholder and style icons

# TODO: Implement responsive design for smaller screens

- [x] Add hamburger menu icon on the left for small screens
- [x] Hide search bar on small screens
- [x] Center the logo on small screens
- [x] Show only profile icon on the right for small screens
- [x] Add media queries in Header.css for screens below 768px
