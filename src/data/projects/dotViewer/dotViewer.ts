import { Project } from "../projects";

export const project_dotViewer: Project = {
  title: "dotViewer - Quick Look for Code & Dotfiles",
  publishDate: "2026-03-01",
  previewDate: "March 2026",
  description: [
    "A native macOS Quick Look extension that brings syntax-highlighted previews to source code, dotfiles, and markdown — right inside Finder. Press Space on any code file and get an instant, beautifully rendered preview without opening an editor.",
    "Supports 600+ file types out of the box with full syntax highlighting powered by Highlight via an XPC service, plus Tree-sitter for language detection. Includes a dedicated Quick Look thumbnail extension so code files show readable previews in Finder icon and gallery views.",
    "Features rich markdown rendering with table-of-contents, inline images, and a toggle between raw syntax-highlighted and rendered views. Handles edge cases like binary plists (auto-converted to XML), sensitive file detection, transport stream filtering, and configurable file-size limits with truncation warnings.",
    "Ships with a companion settings app for managing themes (auto/light/dark), font sizes, line numbers, word wrap, content width and alignment, preview caching, custom file extensions, and per-type enable/disable toggles — all synced between the app and the extension via App Group shared settings.",
  ],
  technologies: [
    "Swift 6",
    "SwiftUI",
    "AppKit",
    "Quick Look Extensions",
    "XPC Services",
    "Highlight (libhighlight)",
    "Tree-sitter",
    "Lua",
    "XcodeGen",
    "macOS 15+",
  ],
  websiteUrl: "https://dotviewer.app",
  githubUrl: "https://github.com/stianlars1/dotViewer",
};
