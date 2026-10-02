# coolWallpaper

> A custom HTML5 live wallpaper built for Lively Wallpaper on Windows.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript\&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Lively Wallpaper](https://img.shields.io/badge/Made%20for-Lively%20Wallpaper-4f46e5)](https://github.com/rocksdanister/lively)

## About

**coolWallpaper** is an HTML5-based animated desktop wallpaper created specifically for [Lively Wallpaper](https://github.com/rocksdanister/lively).

Rather than using a traditional static image, the wallpaper uses HTML, CSS, and JavaScript to create a dynamic desktop experience. Lively Wallpaper allows webpages to be used as desktop wallpapers, making it possible to build the wallpaper using standard web technologies.

## Features

* HTML5-based live wallpaper
* Custom background and styling
* JavaScript-powered behavior and animation
* Designed for Windows and Lively Wallpaper
* Web-based layout and rendering
* Simple structure that is easy to modify

## Built With

| Technology       | Purpose                                       |
| ---------------- | --------------------------------------------- |
| HTML5            | Wallpaper structure and content               |
| CSS3             | Styling, positioning, and visual presentation |
| JavaScript       | Dynamic behavior and animation                |
| PNG              | Background artwork                            |
| Lively Wallpaper | Runs the HTML5 webpage as a desktop wallpaper |

Lively Wallpaper supports webpage-based wallpapers, allowing HTML, CSS, and JavaScript projects to run as interactive desktop backgrounds.

## Project Structure

```text
coolWallpaper/
├── background.png    # Wallpaper background
├── index.html        # Main HTML entry point
├── main.js           # JavaScript and dynamic behavior
├── style.css         # Styling and layout
└── README.md         # Project documentation
```

## Installation

### Requirements

* Windows 10 or Windows 11
* [Lively Wallpaper](https://github.com/rocksdanister/lively)

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Billet1010/coolWallpaper.git
   ```

2. Open Lively Wallpaper.

3. Import the project and select:

   ```text
   index.html
   ```

4. Select **coolWallpaper** from your Lively Wallpaper library and apply it to your desktop.

Alternatively, download the repository as a ZIP file from GitHub and import the project through Lively Wallpaper.

## Customization

Since the wallpaper is built using standard web technologies, it can be modified like a normal webpage.

### HTML

Modify `index.html` to change the structure and content of the wallpaper.

### CSS

Modify `style.css` to change the wallpaper's:

* Layout
* Positioning
* Sizing
* Fonts
* Effects
* Animations
* Visual styling

### JavaScript

Modify `main.js` to change the wallpaper's behavior and animations.

### Background

The wallpaper uses:

```text
background.png
```

Replace this file with your own background image, or update the corresponding image reference in the project files.

## How It Works

The wallpaper is a webpage running inside Lively Wallpaper.

```text
Lively Wallpaper
       |
       v
  index.html
       |
   +---+---+
   |       |
   v       v
style.css main.js
   |
   v
background.png
```

Lively Wallpaper provides the environment that displays the HTML5 webpage as a desktop wallpaper. The HTML provides the structure, CSS controls the appearance, JavaScript handles dynamic behavior, and the background image provides the primary artwork.

## Development

No build system or framework is required.

Clone the repository and edit the files directly:

```bash
git clone https://github.com/Billet1010/coolWallpaper.git
cd coolWallpaper
```

After making changes, reload the wallpaper in Lively Wallpaper to view the updated version.

## Preview

A preview image or GIF can be added to the repository and displayed here:

```markdown
![coolWallpaper Preview](preview.png)
```

For example, add a file named `preview.png` to the root of the repository and use the following:

![coolWallpaper Preview](preview.png)

## Contributing

Contributions and improvements are welcome.

To contribute:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Test the wallpaper with Lively Wallpaper.
5. Open a pull request.

## License

No license is currently specified for this repository.

If you intend to allow others to freely modify and redistribute the project, consider adding an appropriate open-source license.

## Author

Created by **Billet1010**.

* GitHub: [@Billet1010](https://github.com/Billet1010)
* Repository: [coolWallpaper](https://github.com/Billet1010/coolWallpaper)

## Support

If you find the project useful, consider giving the repository a star on GitHub.

---

**coolWallpaper** — An HTML5 webpage designed to run as a desktop wallpaper through Lively Wallpaper.
