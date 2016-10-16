#!/bin/bash

# Build content and static files
gulp build-for-production

# Commit and push
git add .
git commit -m "Update"
git push

# Deploy on GitHub Pages
git subtree push --prefix build origin gh-pages