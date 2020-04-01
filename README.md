# TDDCoach Blog

The purpose of this blog is to build up credibility and help others to understand programming and software engineering.


## Development

Hugo runs in a Docker Container. See `Dockerfile` and `Makefile`

Files are mounted into the container.
- `src/` contains the blog relevant files
- `public/` contains the build result
- `scripts/` contain scripts that run inside the container


### Run locally

- Install Docker Version >= 19
- run `make build_container` to create an image called `tddcoach-blog`
- run `make run_dev_server` to start the development server
  - it is available on `http://localhost:1313/`

### File structure

... to be continued...

