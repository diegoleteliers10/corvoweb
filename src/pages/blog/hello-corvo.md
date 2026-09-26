---
layout: ../../layouts/Post.astro
title: Hello, Corvo
description: Why a native launcher, what ships in 0.x, and where the roadmap goes next.
date: "2026-09-26"
---

Corvo is a native application launcher for macOS, Linux, and Windows,
written in Rust with GPUI. It exists because launchers tend to drift
toward Electron apps with plugin marketplaces, and we wanted the opposite:
one binary, one keystroke, zero ceremony.

## What ships today

The 0.x line covers the daily core: an app launcher with frecency ranking,
clipboard history for text and images, window tiling, snippets, quicklinks,
file search, an emoji picker, inline calculations, and system actions.
Everything runs locally. Nothing phones home except the update check, and
that one is signature-verified.

## Why native Rust

The spec has one hard constraint: memory footprint is a first-class
concern in every decision. That rules out embedded browsers and runtime
plugin systems. Commands are Rust crates registered at link time, so the
binary stays lean and every extension gets reviewed like the rest of the
codebase.

## What is next

The first extension batch is on the roadmap: process killer, Homebrew
integration, text utilities, a pomodoro timer, weather, markdown notes,
media control, and browser tab search. Each one follows the same rule as
the built-ins, native code only.

Follow along in the [repository](https://github.com/diegoleteliers10/corvo),
or grab a build from [Releases](https://github.com/diegoleteliers10/corvo/releases).
