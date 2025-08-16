#!/bin/bash

# Deployment script for create-keawon-app
# This script will help you deploy your CLI tool to npm

set -e

echo "🚀 Deploying create-keawon-app to npm..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📁 Initializing git repository..."
    git init
    git add .
    git commit -m "Initial commit: create-keawon-app CLI tool"
    echo "✅ Git repository initialized"
else
    echo "📁 Git repository already exists"
fi

# Check if remote origin is set
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "🔗 Please add your GitHub repository as remote origin:"
    echo "   git remote add origin https://github.com/YOUR_USERNAME/create-keawon-app.git"
    echo "   Then run this script again."
    exit 1
fi

# Check if we have uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    echo "📝 You have uncommitted changes. Please commit them first:"
    git status --short
    echo "   git add . && git commit -m 'Your commit message'"
    exit 1
fi

# Check if we're logged into npm
if ! npm whoami > /dev/null 2>&1; then
    echo "🔐 Please log in to npm first:"
    echo "   npm login"
    exit 1
fi

# Check if package name is available
PACKAGE_NAME=$(node -p "require('./package.json').name")
echo "📦 Checking if package name '$PACKAGE_NAME' is available on npm..."

if npm view "$PACKAGE_NAME" > /dev/null 2>&1; then
    echo "❌ Error: Package name '$PACKAGE_NAME' is already taken on npm."
    echo "   Please choose a different name in package.json"
    exit 1
else
    echo "✅ Package name '$PACKAGE_NAME' is available!"
fi

# Push to GitHub
echo "📤 Pushing to GitHub..."
git push origin main

# Publish to npm
echo "📦 Publishing to npm..."
npm publish

echo ""
echo "🎉 Success! Your CLI tool has been published to npm!"
echo ""
echo "You can now use it with:"
echo "  npx $PACKAGE_NAME my-project-name"
echo ""
echo "To test it:"
echo "  cd /tmp"
echo "  npx $PACKAGE_NAME test-project"
echo ""
echo "Happy coding! 🚀"
