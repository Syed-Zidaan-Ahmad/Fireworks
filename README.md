# 🎇 Fireworks

## A mesmerizing, fully interactive mathematical fireworks experience that responds to your touch, mouse movement, and device tilt.

**Developed by: Zidaan**

---

## ✨ Overview

Welcome to **Fireworks**, a visually captivating Progressive Web App (PWA) designed to blend mathematics, motion, and creativity into a stunning interactive experience.

This isn't just another animation. Every particle is generated and animated in real-time using mathematical formulas, creating an ever-changing display of glowing neon fireworks that react to your interactions.

Whether you're moving your mouse, touching the screen, or tilting your smartphone, the entire universe of particles dynamically responds to you.

---

## 🎆 Experience It Live

### Try it now:

🔗 **https://syed-zidaan-ahmad.github.io/Fireworks/**

If you enjoy the experience, don't forget to ⭐ star the repository and share it with others!

---

## 🚀 Features

### ✅ Fully Interactive Fireworks

The particle system continuously reacts to user interaction.

* Mouse tracking on Desktop
* Touch tracking on Mobile
* Smooth motion interpolation
* Dynamic particle positioning

The fireworks follow your movements in real-time, creating a fluid and immersive experience.

---

### ✅ Device Tilt & Gyroscope Support

Experience the magic of motion controls.

On supported mobile devices, the application uses the Device Orientation API to detect:

* Tilt Left / Right (Gamma)
* Tilt Forward / Backward (Beta)

Simply tilt your phone and watch the fireworks shift naturally across the screen.

---

### ✅ Mathematical Particle Engine

Built on real-time trigonometric calculations using:

* `Math.sin()`
* `Math.cos()`

The particle engine dynamically computes positions, movement paths, and wave patterns while maintaining smooth performance across devices of all sizes.

---

### ✅ Neon Glow Rendering

The visual effect is powered by:

* HTML5 Canvas
* Dynamic HSL Colors
* Additive Blending

Using:

```javascript
globalCompositeOperation = "lighter";
```

particles blend together to create vibrant neon glows and luminous color trails.

---

### ✅ Beautiful User Interface

Includes:

* Elegant Information Modal
* Glass-morphism Effects
* Responsive Design
* Glowing Typography
* Smooth Animations

---

### ✅ Custom "Traffic Light" Scrollbars

A unique scrollbar design inspired by traffic lights:

🔴 Red

🟡 Yellow

🟢 Green

Adding personality and polish to the user experience.

---

### ✅ Progressive Web App (PWA)

Install the experience directly on:

* Android Devices
* iPhones & iPads
* Windows PCs
* macOS Devices

Benefits:

* Offline functionality
* Fast launch times
* App-like experience
* Home Screen support
* Taskbar integration

Works fully offline after the first successful visit.

---

### ✅ Playful Developer Protection

Includes fun JavaScript interactions that respond to common inspection attempts such as:

* Right Click
* F12
* Developer Tools Shortcuts

These are intended as playful user interactions and educational demonstrations rather than security mechanisms.

---

## 💡 Tech Stack

Built entirely with modern web technologies.

### Core Technologies

* HTML5 Canvas
* CSS3
* Vanilla JavaScript

### Concepts Demonstrated

* Real-Time Particle Systems
* Trigonometric Animations
* Device Orientation API
* Touch Events
* Mouse Tracking
* Responsive Rendering
* Progressive Web Apps
* Service Workers
* Dynamic Color Generation

### No External Dependencies

❌ No Frameworks

❌ No Libraries

❌ No Animation Engines

Pure JavaScript from start to finish.

---

## 🛠️ Setup Guide

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Syed-Zidaan-Ahmad/Fireworks.git
```

Or download the ZIP file and extract it.

---

### 2️⃣ Configure PWA Assets

The repository already includes:

* `manifest.json`
* `service-worker.js`

To make the application fully installable, add the following icons to the project root:

```text
icon-192.png
icon-512.png
```

Ensure the filenames match those specified inside `manifest.json`.

---

### 3️⃣ Run Locally

Open:

```text
index.html
```

in your preferred web browser.

#### Optional

To test offline functionality and Service Workers:

* Use VS Code Live Server
* Or any local HTTP server

---

## ✍️ Customization Guide

### 📐 Particle Shapes & Patterns

Modify variables such as:

```javascript
dynamicRadiusMax
wavePattern
```

to create entirely new visual effects including:

* Spirals
* Stars
* Waves
* Flowers
* Clover Patterns
* Abstract Geometry

---

### 🎨 Color Animation Speed

Inside the rendering loop, adjust values related to:

```javascript
timeTracker
```

to control how quickly colors transition through the neon spectrum.

---

### 📱 Tilt Sensitivity

Within the `deviceorientation` event listener, modify the sensitivity multiplier to increase or decrease device tilt responsiveness.

---

### ✨ Glow Intensity

Experiment with:

```javascript
globalAlpha
shadowBlur
```

to create softer or more intense neon effects.

---

## 🛡️ Privacy & Data Usage

### ✅ Zero Tracking

No:

* Analytics
* Cookies
* Advertising
* Third-Party Trackers

---

### ✅ 100% Local Processing

All calculations occur directly on the user's device.

This includes:

* Touch Input
* Mouse Input
* Gyroscope Data
* Particle Calculations
* Rendering

No user data is transmitted or stored remotely.

---

### ✅ No Account Required

No registration.

No login.

No personal information collection.

Simply open and enjoy.

---

## 🌐 Deployment

You can host this project for free using:

### Recommended

* GitHub Pages

### Alternatives

* Netlify
* Vercel

Deployment Steps:

1. Upload project files.
2. Enable hosting.
3. Publish.
4. Share your interactive experience with the world.

---

## 🏆 Why This Project Stands Out

✅ Interactive Mathematical Visualization

✅ Device Tilt Integration

✅ Advanced Particle Effects

✅ Neon Glow Rendering

✅ Fully Responsive Design

✅ Offline Support

✅ Progressive Web App Ready

✅ Pure Vanilla JavaScript

✅ Lightweight & High Performance

✅ Easy to Customize & Extend

---

## 🤝 Contributing

Contributions are welcome!

Feel free to:

* Create new particle formulas
* Design unique geometric patterns
* Improve visual effects
* Enhance performance
* Add new interaction modes
* Expand PWA capabilities

Pull Requests are always appreciated.

Let's make the experience even more magical together.

---

## 🎉 Final Words

Move your mouse.

Touch the screen.

Tilt your phone.

Watch mathematics transform into light.

✨ Enjoy the Fireworks Experience! ✨

If you enjoyed this project:

⭐ Star the repository

🍴 Fork it

📢 Share it with others

Thank you for checking out **Fireworks**!

Happy Exploring! 🎇
