#!/bin/sh

hugo server -D -E -F --baseURL="http://localhost:1313" --bind="0.0.0.0" -p 1313 --i18n-warnings --noHTTPCache
