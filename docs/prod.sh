#!/bin/bash
# CAOS Docs - Production Build
cd "$(dirname "$0")"
npm run build
echo "Build complete. Output in dist/"
echo "Preview with: npm run preview"
