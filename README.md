<p align="center"><img src="static/logo-small.png" alt="MarkText+" width="128" height="128"></p>

<h1 align="center">MarkText+</h1>

<p align="center">
  A modern, enhanced fork of <a href="https://github.com/marktext/marktext">MarkText</a> — the elegant markdown editor.<br>
  Focused on <strong>stability</strong>, <strong>daily usability</strong>, and going beyond markdown-only editing.
</p>

<p align="center">
  <a href="https://github.com/wplusg/marktext-plus/blob/main/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-blue.svg">
  </a>
</p>

---

## Why MarkText+?

[MarkText](https://github.com/marktext/marktext) is one of the best open-source markdown editors — minimal, fast, and distraction-free. But the original project has been unmaintained for years.

[Tkaixiang's fork](https://github.com/Tkaixiang/marktext) did a great job modernizing the codebase (Vue 3, Pinia, electron-vite, i18n support), but there were still rough edges in daily use: false "unsaved changes" prompts, occasional crashes, and the inability to open anything other than markdown files.

**MarkText+** picks up where those projects left off.

## What's New

- **Open any text file** — not just markdown. JSON, YAML, Python, JavaScript, and more open with syntax highlighting
- **No more phantom "unsaved" warnings** — files no longer appear dirty right after opening
- **Undo fully works** — editing and undoing back to the original content correctly marks the file as clean
- **Fewer crashes** — fixed several crash scenarios around tab switching, empty history, and file watchers
- **Auto-reload files** — unmodified files automatically update when changed on disk (configurable)
- **Smarter file watcher** — ignores binary files (images, fonts, archives) to reduce unnecessary I/O
- **Quick Open finds everything** — `Ctrl+P` searches all files in your project, not just `.md`
- **Drag & drop any file** — drop files onto the editor to open them regardless of extension
- **Auto-hide notifications** — notifications with countdown timers that dismiss themselves
- **Experimental preferences** — new settings category for opt-in features

## Features

Everything from MarkText you already love:

- Real-time WYSIWYG preview with a clean, distraction-free interface
- CommonMark, GitHub Flavored Markdown, and Pandoc support
- Math expressions (KaTeX), Mermaid diagrams, front matter, emojis
- **33 built-in themes** — Dracula, Nord, Catppuccin, Tokyo Night, Gruvbox, and many more
- Source Code, Typewriter, and Focus editing modes
- Paste images directly from clipboard
- Export to HTML and PDF
- Available in **9 languages**

## Installation

Download from the [Releases page](https://github.com/wplusg/marktext-plus/releases) — available for Windows, macOS, and Linux.

> **macOS users:** You may see a "damaged and can't be opened" warning due to lack of notarization. See [this fix](https://github.com/marktext/marktext/issues/3004#issuecomment-1038207300).

## Building from Source

```bash
git clone https://github.com/wplusg/marktext-plus.git
cd marktext-plus
npm install
npm run dev
```

To build distributable packages: `npm run build:linux`, `build:win`, or `build:mac`.

## Acknowledgements

MarkText+ stands on the shoulders of giants:

- **[MarkText](https://github.com/marktext/marktext)** by [Jocs (Luo Ran)](https://github.com/Jocs) and [contributors](https://github.com/marktext/marktext/graphs/contributors) — the original editor
- **[Tkaixiang's fork](https://github.com/Tkaixiang/marktext)** by [Teo Kai Xiang](https://github.com/Tkaixiang) — the Vue 3 / electron-vite modernization and i18n
- **[Jacob Whall's fork](https://github.com/jacobwhall/marktext)** — early maintenance efforts

## Contributing

Bug reports, pull requests, and testing on different platforms are all welcome.

## License

[MIT](LICENSE)

Copyright (c) 2017-present Luo Ran & MarkText Contributors
Copyright (c) 2025 Teo Kai Xiang
Copyright (c) 2026 William Guedes Lubrigati
