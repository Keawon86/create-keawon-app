#!/bin/bash

echo "🚀 Setting up Next.js Starter Kit CLI..."

# Make CLI executable
chmod +x bin/cli.js

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create global symlink
echo "🔗 Creating global symlink..."
npm link

echo "✅ Setup complete!"
echo ""
echo "You can now use the CLI tool:"
echo "  my-nextjs-starter my-awesome-app"
echo ""
echo "Or use npx (no installation required):"
echo "  npx my-nextjs-starter my-awesome-app"
echo ""
echo "To uninstall globally:"
echo "  npm unlink -g my-nextjs-starter"
