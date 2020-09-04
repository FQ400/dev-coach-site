---
title: "Setting up a Hugo page made me work with git submodules"
date: 2020-06-01
lastmod: 2020-06-10
draft: false
tags: ["learning", "git", "submodule"]
---

This blog is using [Hugo](https://gohugo.io/) with the minimal theme.
I followed the [README](https://github.com/calintat/minimal) on how to integrate a theme into a Hugo site.
It mentioned git submodules, so I added a submodule with the original repo URL.

I got comfortable with the ecosystem. So I wanted to adapt the theme to my needs, which led me to fork the theme repo.

After changing some code in the submodule I realized working with a submodule is a bit inconvenient and I decided to remove it.
For instance, every time I change something in the submodule,
I have to commit the change in the submodule and I have to create a new commit with the reference of the submodule's commit in the main repo.

I used git in version `2.26.2` for this post.


## Exchanging a Git Submodule

The problem was, replacing the original submodule with my forked version with the same name.
It means I had to exchange the remote URLs.
The place of the submodule is in `src/themes/minimal`.
References to the submodules can be found in two files.

`.gitmodules`:
```none
[submodule "src/themes/minimal"]
	path = src/themes/minimal
	url = git@github.com:FQ400/minimal.git
```

`.git/config`:
```none
[submodule "src/themes/minimal"]
	url = git@github.com:FQ400/minimal.git
	active = true
```

I had to remove both entries to be able to reinitialize a new submodule with the **same name** in the **same place**.
From the root directory, I did `git submodule add https://github.com/FQ400/minimal themes/minimal`

Later in the process, I decided against submodules and needed to remove it.


## Removing a Git Submodule

My reasons against Git submodules are mentioned in [ADR 0004](https://github.com/FQ400/tddcoach-site/blob/master/docs/adr/0004-Git-Submodules.md).

I wanted to remove the submodule without losing my git history.

To remove the reference of the submodule, I removed the entry from `.git/config`, the file `.gitmodules` and the directory `.git/modules/minimal`.


**Checking with `git submodule`, the submodule is still there.**

The next idea was to remove the local repo and clone it again.

**Checking with `git submodule`, the submodule is still there.** How?

As it turned out submodule references are stored in commits. Now all I needed to do was to find the respective commit.

A `git log --oneline --graph --decorate` lists all my commits:

```none
* 11192a7 (HEAD -> master, origin/master, origin/HEAD) WIP
* 275d582 Update submodule theme                           <-- COMMIT NOT NEEDED
* 720e143 Add initial exchange-git-submodules post
* 40f793a Add initial about page
* 5704ca7 Add forked minimal theme from me as submodule    <-- COMMIT NOT NEEDED
* bfcbb27 Remove theme submodule                           <-- COMMIT NOT NEEDED
* 8796c54 Add params from theme to config
* 2fbc121 Setup Basic Hugo Blog                            <-- COMMIT PARTIALLY NEEDED
* e6fd64a Add decission about hugo static site generator
* 566dd4c Add docs/adr structure and first ADR
```

I saw 2 options:

1. going back in history using interactive rebase and drop commits
2. rerun the repo history using patch files

With option 1 I failed with the adjustment of `2fbc121 Setup Basic Hugo Blog`.

The second option worked.

`git format-patch -10 HEAD` creates a patch file for each commit from `HEAD` to `HEAD~10`.
In my case `HEAD~10` was the first commit of the repo.
The whole repo is now represented in files, which looked like this:
```none
0001-Add-docs-adr-structure-and-first-ADR.patch
0002-Add-decission-about-hugo-static-site-generator.patch
0003-Setup-Basic-Hugo-Blog.patch                          <-- PARTIALLY NEEDED
0004-Add-params-from-theme-to-config.patch
0005-Remove-theme-submodule.patch                         <-- NOT NEEDED
0006-Add-forked-minimal-theme-from-me-as-submodule.patch  <-- NOT NEEDED
0007-Add-initial-about-page.patch
0008-Add-initial-exchange-git-submodules-post.patch
0009-Update-submodule-theme.patch                         <-- NOT NEEDED
0010-WIP.patch
```

After I removed all files, which are `NOT NEEDED` the last step was to modify
[0003-Setup-Basic-Hugo-Blog.patch](https://gist.github.com/FQ400/b53f78c757b01a832773385bfa210311)
and remove the submodule references.

Line 38-46 needed to be removed:
```none
diff --git a/.gitmodules b/.gitmodules
new file mode 100644
index 0000000..901e09c
--- /dev/null
+++ b/.gitmodules
@@ -0,0 +1,3 @@
+[submodule "src/themes/minimal"]
+	path = src/themes/minimal
+	url = git@github.com:calintat/minimal.git
```

Line 181-186 needed to be removed:
```none
diff --git a/src/themes/minimal b/src/themes/minimal
new file mode 160000
index 0000000..c50ae4a
--- /dev/null
+++ b/src/themes/minimal
@@ -0,0 +1 @@
+Subproject commit c50ae4adf79f2c43262c035704a6124cff8e8b9a
```

With that modification, I used `git am < *.patch` in a newly created repo to apply all patch files.

**Checking with `git submodule`, the submodule is gone. DONE**

I found multiple answers on [Stackoverflow](https://stackoverflow.com/questions/1260748/how-do-i-remove-a-submodule/36593218).
That shows that there are multiple ways of solving the issue. Removing git submodules is **not** an easy task.

