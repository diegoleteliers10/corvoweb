# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

People who use macOS, Windows, or Linux and want to launch apps and run common tasks from one keyboard-driven launcher. The website must work for a broad audience.

## Product Purpose

Corvo is a desktop launcher. It gives users one palette to find applications, files, and commands, then perform common system tasks. The website should help visitors understand how Corvo works through real use cases and find a platform download.

## Positioning

Corvo is an open-source launcher written in Rust with a native GPUI interface. Built-in commands are compiled into the application and registered at link time. Corvo does not load a plugin runtime.

## Operating Context

Visitors use the website to learn what Corvo can do, see how its workflows work, and download a build for macOS, Windows, or Linux. The available commands and platform support can differ by operating system.

## Capabilities and Constraints

- The application has app search, file search, clipboard history, emoji search, calculator, snippets, quicklinks, window management, system actions, and process management.
- Homebrew integration is for macOS.
- The website must use verified functions and platform claims. Do not invent performance numbers, customer quotes, testimonials, pricing, or compatibility.
- Use screenshots and videos captured from the real Corvo app for product previews. You can create realistic use cases by operating Corvo and capturing its actual interface. Do not fabricate Corvo screens or claim unverified behavior.
- Corvo is free and open source under the MIT license.

## Brand Commitments

- Preserve the Corvo name and existing brand icon.
- Use Corvo's existing dark interface and green accent as product identity references, not as a requirement to copy the current website layout.

## Evidence on Hand

- Application code and built-in command crates: `/Users/dleteliers/Dev/corvo/commands`.
- Product overview and installation instructions: `/Users/dleteliers/Dev/corvo/README.md`.
- Brand assets: `public/brand/`.
- Real application screenshots: `public/showcase/`.
- The screenshots show app search, calculator, emoji picker, and the Search Files command. The Search Files screenshot does not show its file results page.
- Do not use clipboard-history captures because the current view may contain private clipboard data.

## Product Principles

- Make common desktop tasks easy to reach from the keyboard.
- Show visitors how real Corvo workflows work.
- State platform support clearly for each capability.
- Keep the launcher native and its built-in commands local to the application.
