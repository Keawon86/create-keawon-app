# Deployment Guide for create-keawon-app

This guide will walk you through the steps to publish your CLI tool to npm so it can be used with `npx create-keawon-app`.

## Prerequisites

1. **Node.js and npm**: Make sure you have Node.js 18+ and npm installed
2. **GitHub account**: You'll need a GitHub account to host your repository
3. **npm account**: You'll need an npm account to publish packages

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `create-keawon-app`
3. Make it public (required for npx to work)
4. Don't initialize with README, .gitignore, or license (we already have these)

## Step 2: Update Repository URLs

Before pushing to GitHub, update the repository URLs in `package.json`:

```json
"repository": {
  "type": "git",
  "url": "git+https://github.com/YOUR_USERNAME/create-keawon-app.git"
},
"bugs": {
  "url": "https://github.com/YOUR_USERNAME/create-keawon-app/issues"
},
"homepage": "https://github.com/YOUR_USERNAME/create-keawon-app#readme"
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 3: Initialize Git and Push to GitHub

```bash
# Initialize git repository
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial commit: create-keawon-app CLI tool"

# Add remote origin (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/create-keawon-app.git

# Push to GitHub
git push -u origin main
```

## Step 4: Test Locally

Before publishing, test your package locally:

```bash
# Install dependencies
npm install

# Test the CLI locally
npm link

# Test the command
create-keawon-app test-project

# Unlink when done testing
npm unlink
```

## Step 5: Publish to npm

1. **Login to npm** (if not already logged in):
   ```bash
   npm login
   ```

2. **Publish the package**:
   ```bash
   npm publish
   ```

   Note: The package name `create-keawon-app` must be available on npm. If it's taken, you'll need to choose a different name.

## Step 6: Test the Published Package

After publishing, test that it works:

```bash
# Create a new project using your published package
npx create-keawon-app my-test-project

# Or test in a different directory
cd /tmp
npx create-keawon-app another-test
```

## Troubleshooting

### Package Name Already Exists
If `create-keawon-app` is already taken on npm, you can:
- Use a different name (e.g., `create-keawon-nextjs-app`)
- Add a scope: `@yourusername/create-keawon-app`

### Permission Issues
Make sure you're logged in to npm with the correct account:
```bash
npm whoami
npm login
```

### Git Issues
If you get git errors, make sure:
- The repository exists on GitHub
- You have the correct remote URL
- You have write permissions to the repository

## Updating the Package

When you make changes:

1. Update the version in `package.json`
2. Commit and push to GitHub
3. Publish to npm: `npm publish`

## Package.json Fields Explained

- **name**: Must start with `create-` for npx to work properly
- **bin**: Maps the command name to the executable file
- **main**: Entry point for the package
- **files**: Files to include when publishing (npm will automatically include necessary files)

## Success!

Once published, anyone can use your CLI tool with:
```bash
npx create-keawon-app my-project-name
```

The `npx` command will:
1. Download your package from npm
2. Execute the CLI tool
3. Create a new Next.js project with your template
