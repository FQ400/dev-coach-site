---
title: "Adding <meta> elements to get a Twitter preview"
description: "What <meta> elements are needed to get a Twitter preview? How to add them using the Hugo static site generator."
date: 2020-09-24
lastmod: 2020-09-24
draft: false
tags: ["learning", "hugo", "html", "twitter"]
---

As you might know, this blog is made using [Hugo](https://gohugo.io/) with the [minimal theme](https://github.com/FQ400/minimal). When a post is shared on Twitter, I like to have a nice post preview.

{{< tweet 1308789001990664195 >}}

This post is about figuring out what I need to add to the page.


### Some Basics

In general social media platforms use a service/bot that fetches a page, looks for certain data, and extracts it to use it for their purpose.

HTML is a common option to represent a website.
It structures the content and adds semantic meaning to content.
These semantics can be used by services or bots to easily extract specific data.

The [`<meta>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta) is used to describe the document. It contains data that describes data. 😉


### Twitter Cards

[@coderbyheart](https://twitter.com/coderbyheart) pointed me to the [documentation of Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started).

Twitter's preview service understands among others the following meta elements:

```html
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="Page title">
<meta name="twitter:description" content="Describe the post" />
<meta name="twitter:image" content="http://site.com/post/image.jpg">
```

The data contains a **card type**, a **title**, a **description**, and a location of an **image**.
Adding these `<meta>` elements to the page solves the preview issue. 👍🏽


### Going one step further

Twitter's preview service understands [The Open Graph protocol](https://ogp.me/).
The open graph was created by Facebook to enrich web pages with metadata to turn them into a graph object.

There are 4 basic required properties:

```html
<meta property="og:title" content="Title of the post" />
<meta property="og:type" content="website" />
<meta property="og:url" content="http://site.com/post/1" />
<meta property="og:image" content="http://site.com/post/image.jpg" />
```

This data contains a **title**, a **type**, a canonical **url** and a location of an **image**.

The reason why I consider the open graph is, combining the twitter metadata with the open graph metadata gives this blog previews in major social network posts
and I don't have to duplicate similar metadata.
I tested it with Twitter, Facebook, Linkedin, and Xing.


### Here is my solution

```html
<meta property="og:title" content="{{ .Title }}" />

{{ if .Description }}
  <meta name="description" content="{{ .Description }}"/>
  <meta property="og:description" content="{{ .Description }}" />
{{ end }}

<meta property="og:type" content="website" />
<meta property="og:url" content="{{ .Permalink }}" />
<meta property="og:image" content="{{ .Site.BaseURL }}{{ .Site.Params.profilePic }}" />
<meta name="twitter:card" content="summary" />
```

The curly braces are Hugo's string interpolation technique.
It replaces the content attribute of `<meta>` with page or site-specific data.

This was the first time I worked on an issue and wrote down what I was doing.
It was fun.
By the way, here is the [commit](https://github.com/FQ400/dev-coach-site/commit/4d09090fc4bc4a767a78eecec8c9b68ebdf08e47)

