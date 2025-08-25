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

## How to Switch Themes

To change your site's color scheme:

1. **Open** `themes/terminus/sass/css/_main.scss`
2. **Replace** the `:root` color variables (lines 3-7) with any theme from above
3. **Or import** a theme file by adding at the top: `@use '../colors/tokyo-night';`
4. **Build** your site: `./zola build` or `npm run build`

## Creating Custom Themes

Each theme file defines these CSS custom properties:
- `--background-color`: Main page background
- `--text-color`: Primary text color  
- `--accent-color`: Links, buttons, highlights
- `--footnote-color`: Muted text, metadata

Additional semantic colors are available for enhanced designs:
- `--secondary-accent`: Alternative highlight color
- `--success-color`: Success states (green tones)
- `--warning-color`: Warning states (yellow/orange tones)
- `--error-color`: Error states (red tones)