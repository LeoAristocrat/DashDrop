<p align="center">
  <img src="./docs/dashdrop_logo_slow.svg" width="160" alt="DashDrop Logo">
</p>

<h1 align="center">DashDrop</h1>

<p align="center">
  <strong>Instant, secure, account-free local transfers between your Android phone and any browser.</strong>
</p>

<p align="center">
  <a href="https://github.com/LeoAristocrat/DashDrop/releases/tag/v1.0.0"><img src="https://img.shields.io/badge/Release-v1.0.0-blue?style=flat-square" alt="Version 1.0.0"></a>
  <a href="https://developer.android.com"><img src="https://img.shields.io/badge/Platform-Android_13+-brightgreen?style=flat-square&logo=android" alt="Android 13+"></a>
  <a href="https://kotlinlang.org"><img src="https://img.shields.io/badge/Kotlin-2.0-purple?style=flat-square&logo=kotlin" alt="Kotlin"></a>
  <a href="./LICENSE"><img src="https://img.shields.io/badge/License-MIT-yellow?style=flat-square" alt="License: MIT"></a>
  <img src="https://img.shields.io/badge/Cloud-Zero_Dependency-informational?style=flat-square" alt="Zero Cloud">
</p>

<p align="center">
  <strong>Developed and Maintained by Sayeem Sadik / Leo Aristocrat</strong><br>
  🌐 <a href="https://leoaristocrat.eu.cc/">https://leoaristocrat.eu.cc/</a> &nbsp;|&nbsp; 🐙 <a href="https://github.com/LeoAristocrat/DashDrop">GitHub Repository</a>
</p>

---

## 💡 Overview

**DashDrop** turns your Android phone into an ephemeral, high-speed local transfer hub. By launching an embedded lightweight Ktor server, any device on the same local Wi-Fi or hotspot—Mac, Windows, Linux, iOS, or another Android—can instantly connect via its web browser to send files and messages in real time.

* **Zero accounts or sign-ups.**
* **Zero internet or cloud requirements.**
* **Zero client software needed on receiving devices.**
* **100% private and confined to your local network.**

---

## 📸 Screenshots

<table align="center" width="100%">
  <tr>
    <td align="center" width="50%">
      <strong>Clean Home Hub</strong><br>
      <img src="./docs/screenshot/dashdrop_home.png" alt="DashDrop Home Screen" width="100%">
      <br><em>One-tap start with modern Material 3 interface</em>
    </td>
    <td align="center" width="50%">
      <strong>Instant Connection & QR Pairing</strong><br>
      <img src="./docs/screenshot/dashdrop_connection_qr.png" alt="Connection & QR Code" width="100%">
      <br><em>Direct IP, custom mDNS address, and instant QR pairing</em>
    </td>
  </tr>
  <tr>
    <td align="center" width="50%">
      <strong>Expressive Settings & Themes</strong><br>
      <img src="./docs/screenshot/dashdrop_settings.png" alt="Settings & Themes" width="100%">
      <br><em>Catppuccin Mocha, Hacker, AMOLED Black & custom icon shapes</em>
    </td>
    <td align="center" width="50%">
      <strong>Real-Time Web Browser Client</strong><br>
      <img src="./docs/screenshot/dashdrop_web_client.png" alt="Mobile Web Client" width="46%">
      <br><em>Responsive browser interface for fast two-way transfers</em>
    </td>
  </tr>
</table>

---

## ✨ Key Features

### 🚀 Seamless Two-Way Transfer
* **Chat-Style Exchange:** Send messages, links, snippets, documents, APKs, photos, and high-resolution videos seamlessly.
* **Live Progress & Streaming:** Instant feedback on transfer speeds, completed files, and connection health backed by WebSocket.
* **Drag-and-Drop Web UI:** Drop files anywhere onto the web client to start immediate transfers.

### 🌐 Smart Local Networking
* **Memorable Local Hostname:** Access your device via `http://dashdrop{N}.local:port` powered by an ultra-lightweight embedded mDNS responder.
* **Seamless QR Code Pairing:** Connect any mobile phone by scanning the on-screen QR code.
* **Direct LAN Binding:** Services bind directly to the active Wi-Fi IPv4 address or portable hotspot, bypassing all external internet routing.

### 🎨 Material 3 Expressive UI & Themes
* **Modern Themes:** Includes **Catppuccin Mocha**, **Hacker** (terminal green), **Anan Blue**, and dynamic Material You palette.
* **Deep AMOLED Black:** Dedicated battery-saving pure black mode for OLED displays.
* **Visual Personalization:** Configurable icon shapes (nine-sided cookie, squircle, pebble) and custom avatar presets.

### 📦 Media & System Integrations
* **In-App Media Preview:** Built-in lightbox for images and media players for video playback.
* **Send Installed APKs:** Easily extract and transmit installed Android applications (`AppName_Version.apk`) with a single tap.
* **Phone Storage & Album Access:** Optional, fine-grained read-only browser exploration of the phone's media albums and storage.
* **Favorites (Ammo Box):** Star important messages and files for instant access across sessions.

### 🔒 Privacy & Security by Design
* **Single-Use PIN Authentication:** Protected by default against unauthorized local access.
* **Host Header Verification:** Rejects unauthenticated cross-site requests and DNS rebinding attacks.
* **Self-Contained Client:** The entire browser client (HTML, CSS, JS, Material Symbols) is bundled inside the APK with strict Content Security Policy (CSP).

---

## 🚦 Quick Start

1. **Launch:** Open DashDrop on your phone and tap **Start service**.
2. **Connect:** The app presents two connection addresses:
   * Direct IP: `http://192.168.x.x:8080`
   * Local Name: `http://dashdrop{N}.local:8080`
3. **Open in Browser:** Navigate to either address on your computer or scan the QR code with another mobile device.
4. **Authenticate:** Enter the six-digit PIN shown on the phone (if enabled).
5. **Drop & Share:** Transfer files and messages with native speed over your local Wi-Fi.

> [!NOTE]
> Ensure both devices are on the same Wi-Fi network. Networks with client isolation (such as public guest Wi-Fi) may restrict peer-to-peer connections.

---

## 🛠 Building from Source

### Prerequisites
* **Android Studio Ladybug** or newer
* **JDK 17** or **JDK 21**
* **Android SDK Platform 37** (minSdk 33, targetSdk 36)

### Clone & Build

```bash
git clone https://github.com/LeoAristocrat/DashDrop.git
cd DashDrop

# Run unit tests
./gradlew testDebugUnitTest

# Build debug APK
./gradlew assembleDebug

# Build signed production release APK
./gradlew assembleRelease
```

On Windows (PowerShell):
```powershell
.\gradlew.bat testDebugUnitTest
.\gradlew.bat assembleDebug
.\gradlew.bat assembleRelease
```

## 🏗 Architecture

```text
DashDrop (com.leoaristocrat.dashdrop)
├── ui/              ── Jetpack Compose UI (Material 3 Expressive, Themes, Sheets)
├── service/         ── Foreground service lifecycle, Wi-Fi lock, notifications
├── server/          ── Embedded Ktor CIO HTTP & WebSocket server
├── session/         ── In-memory active session manager & message pipeline
├── data/            ── Room database (DashDropDatabase), file storage & DataStore
├── network/         ── Local IP discovery & embedded mDNS responder
└── assets/web/      ── Bundled offline browser client (Zero CDN dependencies)
```

---

## 👥 Authors & Maintainers

DashDrop is developed and maintained by:

* **Sayeem Sadik / Leo Aristocrat**
  * Website: [https://leoaristocrat.eu.cc/](https://leoaristocrat.eu.cc/)
  * GitHub: [@LeoAristocrat](https://github.com/LeoAristocrat)
  * Repository: [https://github.com/LeoAristocrat/DashDrop](https://github.com/LeoAristocrat/DashDrop)

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.
