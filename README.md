# XY KHOO & CO Website

A modern, responsive website for XY KHOO & CO, a trusted auditing partner in Malaysia for Financial Integrity and Compliance.

## Features

- Responsive design that works on all devices
- Modern and clean user interface
- Smooth scrolling navigation
- Interactive service cards
- Team member showcase
- Contact form with validation
- Language switching capability (EN/中文)
- Google Maps integration
- Social media links
- Mobile-friendly navigation

## Setup

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Navigate to the project directory:
```bash
cd xykhooco
```

3. Set up a local development server. You can use any of these methods:
   - PHP built-in server: `php -S localhost:8000`
   - Python: `python -m http.server 8000`
   - Node.js: Install `http-server` globally and run:
     ```bash
     npm install -g http-server
     http-server
     ```

4. Open your browser and visit `http://localhost:8000`

## Project Structure

```
xykhooco/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js          # JavaScript functionality
├── images/            # Image assets
│   ├── logo.png
│   ├── hero-bg.jpg
│   └── team/
└── README.md          # This file
```

## Customization

### Colors
The website uses CSS variables for easy color customization. Edit the `:root` section in `styles.css`:

```css
:root {
    --primary-color: #6B21A8;
    --secondary-color: #F97316;
    --text-color: #333;
    --light-bg: #F8FAFC;
    --white: #FFFFFF;
}
```

### Images
Replace the images in the `images` directory with your own:
- `logo.png`: Company logo
- `hero-bg.jpg`: Hero section background
- Team member photos in `team` directory

### Content
Edit the content in `index.html` to match your company's information:
- Company description
- Services offered
- Team member details
- Contact information
- Social media links

## Browser Support

The website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

XY KHOO & CO - [admin@xykhoo.co](mailto:admin@xykhoo.co)

Project Link: [https://github.com/yourusername/xykhooco](https://github.com/yourusername/xykhooco)