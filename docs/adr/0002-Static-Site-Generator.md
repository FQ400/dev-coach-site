# 0002 Using Static Site Generator

Date: 01-04-2020

## Status

Accepted

## Context

I think I don't need the complexity of a database in the backend for some blog posts
and a contact website.

There are lots of static site generators out there. Jekyll, Hugo, ...
There are also CMS/Blog Systems like WordPress, Medium, Contentful, ...

I like to try [Hugo](https://gohugo.io/). It is a golang based static site generator
with a hugh number of templates. 

## Decision

Give Hugo static site generator a try.

## Consequences

Using a static site will probably have some migration effort later when new unknown features
are coming.

Static pages can be deployed almost everywhere.

The page might be fast, because there isn't much javascript (framework) involved.

The HTML code is semantically correct, because the template and the parsing can be adjusted.


