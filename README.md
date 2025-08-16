# 🚀 create-keawon-app

A comprehensive CLI tool that creates modern Next.js applications with TypeScript, Tailwind CSS, Shadcn/ui components, and Supabase backend in one command.

## ✨ Features

- **One Command Setup** - Create a complete Next.js project in seconds
- **Modern Tech Stack** - Next.js 14, TypeScript 5, Tailwind CSS 3
- **UI Components** - Pre-configured Shadcn/ui + Radix UI components
- **Backend Ready** - Supabase integration with local development setup
- **Code Quality** - ESLint, Prettier, and TypeScript strict mode
- **Production Ready** - Optimized configuration for deployment
- **Multiple Package Managers** - Support for npm, yarn, and pnpm

## 🚀 Quick Start

### Install Globally

```bash
npm install -g create-keawon-app
```

### Create a New Project

```bash
create-keawon-app my-awesome-app
```

Or use npx (no installation required):

```bash
npx create-keawon-app my-awesome-app
```

## 📋 What You Get

Your new project will include:

- ✅ **Next.js 14** with App Router
- ✅ **TypeScript** configuration with strict mode
- ✅ **Tailwind CSS** with custom design system
- ✅ **Shadcn/ui** components (Button, Card, Badge, etc.)
- ✅ **Supabase** client and local development setup
- ✅ **ESLint + Prettier** for code quality
- ✅ **Git repository** initialized with first commit
- ✅ **Dependencies** installed and ready to go
- ✅ **Beautiful landing page** showcasing all features
- ✅ **Responsive design** with mobile-first approach
- ✅ **Dark mode support** built-in

## 🛠️ Prerequisites

- Node.js 18.0.0 or higher
- npm, yarn, or pnpm
- Git (for repository initialization)

## 📖 Usage

### Basic Usage

```bash
create-keawon-app [project-name]
```

### Options

```bash
create-keawon-app [project-name] --yes
```

- `--yes, -y`: Skip prompts and use defaults

### Interactive Mode

If you don't provide a project name, the CLI will prompt you for:

1. **Project Name** - Your application name
2. **Package Manager** - npm, yarn, or pnpm
3. **Git Initialization** - Initialize git repository
4. **Dependency Installation** - Install packages after setup

## 🎯 Example Workflow

```bash
# Create a new project
create-keawon-app my-saas-app

# Navigate to project directory
cd my-saas-app

# Start local Supabase (optional)
npm run supabase:start

# Start development server
npm run dev
```

## 📁 Project Structure

```
my-saas-app/
├── app/                    # Next.js 14 App Router
│   ├── globals.css        # Global styles with Tailwind
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── loading.tsx        # Loading component
│   ├── error.tsx          # Error component
│   └── not-found.tsx      # 404 page
├── components/
│   └── ui/                # Shadcn/ui components
│       ├── button.tsx     # Button component
│       ├── card.tsx       # Card component
│       └── badge.tsx      # Badge component
├── lib/
│   ├── utils.ts           # Utility functions
│   └── supabase.ts        # Supabase client
├── types/                  # TypeScript type definitions
├── public/                 # Static assets
├── supabase/              # Supabase configuration
├── docker-compose.yml     # Docker setup for Supabase
├── package.json           # Dependencies and scripts
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
├── .eslintrc.json         # ESLint configuration
├── .prettierrc            # Prettier configuration
└── README.md              # Project documentation
```

## 🎨 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking
- `npm run supabase:start` - Start local Supabase
- `npm run supabase:stop` - Stop local Supabase
- `npm run db:migrate` - Run database migrations
- `npm run db:generate-types` - Generate TypeScript types

## 🔧 Configuration

### Tailwind CSS

Pre-configured with:
- Custom color palette
- Typography plugin
- Dark mode support
- Responsive breakpoints
- Custom animations

### TypeScript

Strict mode enabled with:
- Path aliases (@/ for imports)
- Next.js optimizations
- Strict type checking
- Modern ES features

### ESLint & Prettier

Configured for:
- Next.js best practices
- TypeScript integration
- Consistent formatting
- Tailwind class sorting

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect repository to Vercel
3. Set environment variables
4. Deploy automatically

### Other Platforms

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch
3. **Make** your changes
4. **Test** thoroughly
5. **Submit** a pull request

### Development Setup

```bash
# Clone the repository
git clone https://github.com/Keawon86/create-keawon-app.git

# Install dependencies
npm install

# Make changes
# Test your changes
npm test

# Submit PR
```

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn/ui Documentation](https://ui.shadcn.com/)
- [Supabase Documentation](https://supabase.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🆘 Support

If you encounter any issues:

1. Check the [Issues](../../issues) page
2. Search existing discussions
3. Create a new issue with detailed information

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js Team](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Supabase](https://supabase.com/) for the open-source backend platform

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=Keawon86/create-keawon-app&type=Date)](https://star-history.com/#Keawon86/create-keawon-app&Date)

---

**Built with ❤️ for the Next.js community**

If this starter kit helps you build amazing applications, please consider giving it a ⭐️!
