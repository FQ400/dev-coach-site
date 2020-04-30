# TDDCoach Blog

The purpose of this blog is to build up credibility and help others to understand TDD (Test-Driven Development), programming and software engineering.


## Development

The repository uses git submodules. The theme in `src/theme/minimal` is a submodule.
Therefor clone the repository using `git clone --recursive ...`.

Hugo runs in a Docker Container. See `Dockerfile` and `Makefile`

Files are mounted into the container.
- `src/` contains the blog relevant files
- `public/` contains the build result
- `scripts/` contain scripts that automate tasks


### Run locally

- Install Docker Version >= 19
- run `make build_container` to create an image called `tddcoach-blog`
- run `make run_dev_server` to start the development server
  - it is available on `http://localhost:1313/`

### File structure

... to be continued...


## Deployment

The page is hosted on github using Github pages.

URL: https://fq400.github.io/tddcoach-site/

`make publish` builds the page and deploys it to Github.



