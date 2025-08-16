# {{PROJECT_NAME}}

A modern, production-ready Next.js application built with TypeScript, Tailwind CSS, Shadcn/ui components, and Supabase backend.

## 🚀 Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** with custom design system
- **Shadcn/ui** components built on Radix UI
- **Supabase** for backend services
- **ESLint + Prettier** for code quality
- **Responsive design** with mobile-first approach
- **Dark mode support** built-in
- **Git hooks** for consistent code formatting

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3
- **UI Components**: Shadcn/ui + Radix UI
- **Backend**: Supabase (PostgreSQL, Auth, Storage)
- **Code Quality**: ESLint + Prettier
- **Package Manager**: npm/yarn/pnpm

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.0.0 or higher
- **npm**, **yarn**, or **pnpm**
- **Git** for version control
- **Docker** for local Supabase development

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Set Up Environment Variables

Copy the environment template and configure your variables:

```bash
cp env.local.example .env.local
```

Edit `.env.local` with your Supabase credentials:

```bash
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### 3. Start Local Supabase (Optional)

For local development with Supabase:

```bash
npm run supabase:start
# or
yarn supabase:start
# or
pnpm supabase:start
```

### 4. Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
{{PROJECT_NAME}}/
├── app/                    # Next.js 14 App Router
│   ├── globals.css        # Global styles with Tailwind
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── loading.tsx        # Loading component
│   ├── error.tsx          # Error component
│   └── not-found.tsx      # 404 page
├── components/
│   └── ui/                # Shadcn/ui components
├── lib/
│   ├── utils.ts           # Utility functions
│   └── supabase.ts        # Supabase client
├── types/                  # TypeScript type definitions
├── public/                 # Static assets
├── supabase/              # Supabase configuration
└── docker-compose.yml     # Docker setup for Supabase
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
- `npm run db:generate-types` - Generate TypeScript types from database

## 🔧 Configuration

### Tailwind CSS

The project includes a custom Tailwind configuration with:

- Design system colors and spacing
- Custom animations and keyframes
- Typography plugin integration
- Dark mode support

### ESLint & Prettier

Configured with:

- Next.js recommended rules
- TypeScript integration
- Consistent code formatting
- Tailwind class sorting

### Supabase

Local development setup includes:

- PostgreSQL database
- Authentication service
- Real-time subscriptions
- Storage service

## 🎯 Development Workflow

1. **Create Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Changes**
   - Write your code
   - Follow TypeScript best practices
   - Use Tailwind CSS for styling
   - Leverage Shadcn/ui components

3. **Quality Checks**
   ```bash
   npm run lint
   npm run type-check
   npm run format
   ```

4. **Commit Changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

5. **Push and Create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn/ui Documentation](https://ui.shadcn.com/)
- [Supabase Documentation](https://supabase.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run quality checks
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues:

1. Check the [Issues](../../issues) page
2. Search existing discussions
3. Create a new issue with detailed information

## 🙏 Acknowledgments

- [Next.js Team](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Supabase](https://supabase.com/) for the open-source backend platform

---

Built with ❤️ using modern web technologies
