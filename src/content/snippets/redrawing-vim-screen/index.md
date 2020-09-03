---
title: "Redrawing Vim Screen"
date: 2020-09-02
lastmod: 2020-09-03
draft: false
tags: ["vim", "commands", "workflow"]
---

Part of my current workflow for web development is writing code in NeoVim in an iTerm2 Terminal on one screen and checking results in the browser on another screen.
The screens are virtual and can be changed using `Cmd + ←` and `Cmd + →`. I reload a browser tab using `Cmd + R`.

When switching screens and reloading is down quickly it happens that the `Cmd + R` hits the terminal which results in a nicely cleared terminal.
All windows in NeoVim are cleared as well. This is especially annoying when I have multiple windows.

A time-saving command is `:mod`, which redraws all vim windows. Even faster is the shortcut is `Ctrl + L`.

The following animation shows the command in action.

![Show command in action](./assets/clearing-the-terminal.gif)

See `:help mod` for further documentation.

