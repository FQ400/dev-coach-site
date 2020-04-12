---
title: "Exchange Git Submodules"
date: 2020-04-11T12:50:00Z
draft: true
tags: ["learnings", "git", "submodules", "quick-fix"]
---

Docs are here:

When using Hugo with themes Git submodules come into play.
This blog uses the minimal theme. When I set it up, I used the original theme.
Later I decided to fork the themes repo to make adjustments.

The submodule was already in place and I wanted to exchange the submodule.

The place of the submodule is in `src/themes/minimal`.

References to the submodules can be found in the file `.gitmodules` and in `.git/config`

.gitmodules:
```
[submodule "src/themes/minimal"]
	path = src/themes/minimal
	url = git@github.com:FQ400/minimal.git
```

.git/config:
```
[submodule "src/themes/minimal"]
	url = git@github.com:FQ400/minimal.git
	active = true
```

I had to remove both entries to be able to reinnitialize a new submodule with the same name in the same place.
From the root directory I did `git submodule add https://github.com/FQ400/minimal themes/minimal`

