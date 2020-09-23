---
title: "Converting Sass to SCSS by Using Vim Recordings"
description: "Converting Sass to SCSS using vim recordings. Showing detailed key-stroke examples and videos"
date: 2020-09-09
lastmod: 2020-09-09
draft: false
tags: ["learning", "vim", "vim recording", "Sass", "SCSS"]
---

The task is to convert Sass files to SCSS files.
There are Sass to CSS compilers, which aren't applicable because of Sass mixin can't be converted into valid CSS.

Converting Sass to SCSS manually is a repetitive task of setting curly braces and semicolons.

Since [NeoVim](https://neovim.io/) is my current editor why not use a feature called `recording` to automate as much as possible.


## Vim recording key-strokes into a register

In general, a recording works as the following:

1. Start recording into a register
2. Use commands
3. Stop recording
4. Play recording from the register

Here is Example 1, which **adds a semicolon after a line and moves the cursor one line down**.

- *(1)* Type `:qq` in normal mode to start the recording into register `q`. The message `recording @q` at the bottom of the screen is shown.
- *(2)* Press {{< kbd "Shift-A" >}} to move the cursor to the end of the line and enter insert mode
- *(2)* Add a semicolon
- *(2)* Exit insert mode using {{< kbd "Esc" >}}
- *(2)* Move to the next line using {{< kbd "j" >}} or {{< kbd "↓" >}}
- *(3)* Press {{< kbd "q" >}} to stop the recording
- *(4)* Type `@q` to play the recording from register `q`

{{< video src="assets/key-stroke-recording.mp4" type="video/mp4" >}}

A recording can be played repeatedly by using a number in front of `@`.
`2@q` plays the recording two times. `100@q` plays it 100 times.
Keep in mind that each iteration of a recording should leave the cursor in a position that it can be played again.
In Example 1 we move the cursor one line down before we stop the recording.

Further documentation is available via `:help recording` or `:help q` in NeoVim.


## Nesting recordings

A powerful feature is nested recordings. Commands can be recordings as well.

Example 2: **Surrounding a block with `{}` and place semicolons**

- Type `:qw` to start a recording into register `w`. `q` is already used for setting the semicolon.
- Press {{< kbd "Shift-A" >}} to move the cursor to the end of the line and enter insert mode
- Place an opening `{` and move the cursor one line down
- Exit Insert-Mode using {{< kbd "Esc" >}}
- Use 4 times the semicolon recording: `4@q`
- Add a closing `}` and move the cursor one line down
- Press {{< kbd "q" >}} to stop the recording
- Play the recording multiple times

{{< video src="assets/nested-recording.mp4" type="video/mp4" >}}

Example 2 can be used to convert a Sass selector block containing 4 declarations to SCSS.
This kind of recording can be done for blocks with 1-6 declarations. With these, a Sass file can be quickly converted into SCSS.

It is helpful if the Sass file is uniformly formatted to increase the repetitiveness of recordings.


## Thinking of improvements

The approach mentioned above is good for semi-automatically convert Sass to SCSS and it speeds up the manual conversion.
A cool addition would be if NeoVim somehow figures out how often the semicolon recording should be played, like `x@q` where `x` potentially changes in each block.
I know that `{` and `}` jumps between paragraphs. A Sass block matches a paragraph.
Maybe there is a command that gets the number of lines in between.


## Conclusion

With a bit of practise, key-stroke recordings are easy to use.
They represent a nice additional tool in the belt of a developer.
I stumbled upon them using NeoVim.
I am certain that other editors provide a similar feature.


