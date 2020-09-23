---
title: "Learning about the w command"
description: "Explaining what the w command is doing and showing example output."
date: 2020-09-23
lastmod: 2020-09-23
draft: false
tags: ["snippets", "learning", "linux", "mac", "tools"]
---

The following tweet inspired me to dig deeper and write down my findings. 😌

{{< tweet 1308329248680218625 >}}

I thought of using `w` as an alias. I can't because it is a command.

The command shows what users are currently logged in and what they are doing.
It also provides a summary of the current system activities.

See this example output (from a Mac):
```none
$ w
14:07  up 4 days, 19:28, 3 users, load averages: 1.69 1.75 1.66
USER     TTY      FROM              LOGIN@  IDLE WHAT
clamm    console  -                Fri18   4days -
clamm    s001     -                Tue18       - w
clamm    s002     -                Tue18       - nvim snippets/w-command-linux
```

The first line is the same as using the command `uptime` and contains the following:
- **time**
- **system running since time**
- **number of logged-in users**
- **system load averages** (the last 1, 5, 15 minutes)

The next lines contain information about:
- user **login names**
- **terminal names**
- source **hosts**
- **login time**
- **idle time**
- current **process with arguments**

`w` is available on Mac and Linux. The CLI options are different thought.

There are three options to the command when using it on a Mac:
 
- `w -h`, which hides the first line.
- `w -i`, which sort the output by ascending idle time
- `w user`, which filters the output by `user`

Linux has more options. Check them using `man w`.
