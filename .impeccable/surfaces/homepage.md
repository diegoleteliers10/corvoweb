# Homepage

Mode: Persuade

## Visitor and goal

People on macOS, Windows, or Linux want to see how Corvo helps with desktop tasks. Show real use cases, explain platform differences, and give one clear path to the downloads.

## Approved direction

Use the product-story rhythm on raycast.com as a structural reference: a clear product promise, real interface proof, concise capability stories, platform information, and a direct download path. Keep Corvo's own name, dark charcoal surfaces, green selection color, and native interface. Do not reuse Raycast copy, assets, logos, or visual styling.

## Evidence

Use screenshots captured from Corvo itself.

- App search, calculator, emoji picker, and the Search Files command have real captures in `public/showcase/`.
- The Search Files capture proves that the command appears in the launcher. It does not prove the file results page opened successfully.
- Do not publish a clipboard-history capture. The current history view contains private clipboard content.

## Product truth

- Corvo is a native Rust application for macOS, Windows, and Linux.
- Built-in commands include app search, file search, calculator, clipboard history, emoji picker, snippets, quicklinks, window management, system actions, process management, and Homebrew tools.
- Homebrew tools apply to macOS. Command availability can differ by operating system.
- Install artifacts: DMG and Homebrew on macOS, MSI and portable ZIP on Windows, AppImage and DEB on Linux.
- Corvo is open source under the MIT license.

## Interaction and layout

- Use an asymmetric hero with one real app-search screenshot.
- Let visitors select among four real workflow screenshots using a keyboard-accessible radio group.
- Group built-in commands by task. Avoid a roadmap or claims about unverified speed, privacy, or compatibility.
- Keep the download action in the sticky navigation. Keep the hero action focused on the workflow demo.
- Collapse split layouts and the workflow selector for narrow screens.

## Unresolved decisions

None. Hero leads with the real app-search capture (user decision, 2026-09-28). The interactive palette mockup stays on the page as its own playground section, below the workflow proof.

## Direction contract

THESIS: The launcher is the hero object. The page is a dark desk under a single green lamp, and every real screenshot sits in the same floating window frame, so the visitor reads one repeated proof: type, see, act. It refuses the category arrangement of feature-wall grids with decorative art; every visual on the page is the actual interface.

OWN-WORLD: Near-black ground (#0e0f10) with a fine dot grid that fades under a green radial glow at the top; charcoal surfaces (#17181a); one emerald accent (#34d399) carried by glows, selected states, and the primary button; white type on system faces with tight tracking; mono for queries, tags, and shortcuts; keycap glyphs for keyboard hints. Signature component: the app-window frame — rounded capture with a hairline edge, top highlight, deep drop shadow, and an emerald under-glow.

STORY: The visitor sees the real palette in the first viewport, understands that typing a few characters launches apps, computes, finds files, and picks emoji, believes the tool is native, local, and open source, and clicks Download or copies the brew command.

FIRST VIEWPORT: Sticky blurred header. Below it a two-column asymmetric hero: left column holds the release badge, the headline "Everyday desktop tools. One native palette." with a green gradient second line, a two-line promise, Download button plus brew install pill, and a shortcuts row; right column holds the app-search capture in the signature window frame, large, with a green under-glow and a reflection. A slim availability ribbon closes the viewport.

FORM: Code-led. The brief-pinned direction (raycast.com rhythm, Corvo identity) replaces the roll. Signature interaction: the four-step workflow selector, a keyboard-accessible radio group whose pills swap real captures inside the same window frame with a spring cross-fade. The interactive palette playground and the bento suite reuse the frame language.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
