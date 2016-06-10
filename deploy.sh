#!/bin/bash

# React needs this for production build
export NODE_ENV=production

# Run Gulp task
gulp build-for-production

# Commit
git add .
git commit -m "Update" && git push

# Publish on GitHub Pages
git subtree push --prefix build origin gh-pages