# Color Themes

This directory contains alternative color schemes for the website. Each theme is designed for excellent readability and accessibility.

## Available Themes

### 🌃 Tokyo Night (`_tokyo-night.scss`)
- **Personality**: Modern, tech-focused, neon-inspired
- **Best for**: Developers, long coding/reading sessions
- **Colors**: Deep navy background with bright blue accents

### 🌅 Solarized Dark (`_solarized-dark.scss`)  
- **Personality**: Scientific, eye-strain optimized
- **Best for**: Precision work, academic content
- **Colors**: Blue-green base with carefully calibrated contrast ratios

### ❄️ Nord (`_nord.scss`)
- **Personality**: Calm, Arctic-inspired, minimalist
- **Best for**: Clean presentation, professional content
- **Colors**: Frost blues and snow whites

### 🌙 One Dark (`_one-dark.scss`)
- **Personality**: Modern, warm, popular editor theme  
- **Best for**: Balanced readability, general use
- **Colors**: Warm dark gray with bright blue accent

### 🍂 Gruvbox Dark (`_gruvbox-dark.scss`)
- **Personality**: Retro, high contrast, warm
- **Best for**: Vintage aesthetic, high readability needs
- **Colors**: Dark gray with warm cream text and orange accent

### 🔥 Current (`_current.scss`)
- **Personality**: Original warm theme
- **Best for**: Current aesthetic preference
- **Colors**: Dark olive-brown with orange accent

### 🌑 OLED Abyss (`_oled-abyss.scss`)
- **Personality**: Pure black for OLED displays
- **Best for**: Battery saving, true black aesthetics
- **Colors**: Pure black background with bright cyan accent

### ☀️ Solar Flare (`_solar-flare.scss`)
- **Personality**: Bright white eye-burner
- **Best for**: High contrast needs, bright environments
- **Colors**: Pure white background with orange-red accent

## How to Switch Themes

### Runtime Theme Switching (Recommended)
The site includes a dynamic theme switcher accessible via the navigation menu. Users can:
- Click "Theme ↓" in the menu to see all available themes
- Hover over themes to preview them instantly
- Click to apply permanently (saved to localStorage)

### Manual Theme Configuration
To set a default theme in the code:

1. **Open** `themes/terminus/sass/css/_main.scss`
2. **Find** the default theme block (lines 14-20)
3. **Replace** the `:root` color variables with values from any theme below
4. **Build** your site: `./zola build` or `npm run build`

Note: The individual theme files (`_tokyo-night.scss`, etc.) define themes using `data-theme` attributes and are automatically included in `_main.scss`.
