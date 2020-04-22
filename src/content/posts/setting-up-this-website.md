---
title: "Setting up this website"
date: 2020-04-11
draft: true
tags: ["learning", "git", "submodules"]
---

While setting up this website I learned something about git submodules.
I like to share my learnings as the first blog entry.


## Exchange Git Submodules

When using Hugo with themes Git submodules come into play.
This blog uses the minimal theme. When I set it up, I used the original theme.
Later I decided to fork the themes repo to make adjustments.

The submodule was already in place and I wanted to exchange the submodule.

The place of the submodule is in `src/themes/minimal`.

References to the submodules can be found in two files.

`.gitmodules`:
```
[submodule "src/themes/minimal"]
	path = src/themes/minimal
	url = git@github.com:FQ400/minimal.git
```

`.git/config`:
```
[submodule "src/themes/minimal"]
	url = git@github.com:FQ400/minimal.git
	active = true
```

I had to remove both entries to be able to reinnitialize a new submodule with the same name in the same place.
From the root directory I did `git submodule add https://github.com/FQ400/minimal themes/minimal`


## Decision against Git Submodules

To remove the reference of the submodule, I removed the entry from `.git/config` and the file `.gitmodules`.

The next step was to remove the directory `.git/modules`.
It is still there.



## Imprint

I found a english imprint template: https://language-boutique.com/lost-in-translation-full-reader/impressum-or-imprint.html


## Adapting the theme templates

- remove Google Fonts it makes the website faster and
