#!/usr/bin/env node

const { Command } = require('commander');
const inquirer = require('inquirer');
const chalk = require('chalk');
const ora = require('ora').default;
const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

// Fix chalk import for CommonJS
const chalkInstance = chalk.default || chalk;

const program = new Command();

// ASCII art banner
const banner = `
╔══════════════════════════════════════════════════════════════╗
║                    🚀 Next.js Starter Kit                    ║
║                                                              ║
║  Create modern Next.js apps with TypeScript, Tailwind,      ║
║  Shadcn/ui, and Supabase in one command!                   ║
╚══════════════════════════════════════════════════════════════╝
`;

program
  .name('create-keawon-app')
  .description('Create a modern Next.js application with TypeScript, Tailwind CSS, Shadcn/ui, and Supabase')
  .version('1.0.0')
  .argument('[project-name]', 'Name of the project')
  .option('-y, --yes', 'Skip prompts and use defaults')
  .action(async (projectName, options) => {
    console.log(chalkInstance.cyan(banner));
    
    try {
      const answers = await getProjectDetails(projectName, options);
      await createProject(answers);
    } catch (error) {
      console.error(chalkInstance.red('\n❌ Error creating project:'), error.message);
      process.exit(1);
    }
  });

async function getProjectDetails(projectName, options) {
  let answers = {};
  
  if (options.yes && projectName) {
    answers.projectName = projectName;
    answers.packageManager = 'npm';
    answers.gitInit = true;
    answers.installDeps = true;
  } else {
    const questions = [];
    
    if (!projectName) {
      questions.push({
        type: 'input',
        name: 'projectName',
        message: 'What is your project named?',
        default: 'my-app',
        validate: (input) => {
          if (!input.trim()) return 'Project name is required';
          if (!/^[a-z0-9-]+$/.test(input)) {
            return 'Project name must be lowercase, no spaces, only letters, numbers, and hyphens';
          }
          if (fs.existsSync(input)) {
            return 'A directory with this name already exists';
          }
          return true;
        }
      });
    } else {
      answers.projectName = projectName;
    }
    
    questions.push(
      {
        type: 'list',
        name: 'packageManager',
        message: 'Which package manager would you like to use?',
        choices: ['npm', 'yarn', 'pnpm'],
        default: 'npm'
      },
      {
        type: 'confirm',
        name: 'gitInit',
        message: 'Initialize a new git repository?',
        default: true
      },
      {
        type: 'confirm',
        name: 'installDeps',
        message: 'Install dependencies after setup?',
        default: true
      }
    );
    
    const promptAnswers = await inquirer.prompt(questions);
    answers = { ...answers, ...promptAnswers };
  }
  
  return answers;
}

async function createProject(answers) {
  const { projectName, packageManager, gitInit, installDeps } = answers;
  const projectPath = path.resolve(process.cwd(), projectName);
  
  console.log(chalkInstance.blue(`\n📁 Creating project: ${chalkInstance.bold(projectName)}`));
  
  try {
    // Create project directory
    await fs.ensureDir(projectPath);
    
    // Copy template files
    const spinner = ora('Copying template files...').start();
    await copyTemplateFiles(projectPath);
    spinner.succeed('Template files copied successfully');
    
    // Replace placeholders
    spinner.start('Configuring project...');
    await replacePlaceholders(projectPath, projectName);
    spinner.succeed('Project configured successfully');
    
    // Initialize git if requested
    if (gitInit) {
      spinner.start('Initializing git repository...');
      await initializeGit(projectPath);
      spinner.succeed('Git repository initialized');
    }
    
    // Install dependencies if requested
    if (installDeps) {
      spinner.start('Installing dependencies...');
      await installDependencies(projectPath, packageManager);
      spinner.succeed('Dependencies installed successfully');
    }
    
    // Display success message
    displaySuccessMessage(projectName, projectPath, packageManager);
    
  } catch (error) {
    // Cleanup on error
    if (fs.existsSync(projectPath)) {
      await fs.remove(projectPath);
    }
    throw error;
  }
}

async function copyTemplateFiles(projectPath) {
  const templatePath = path.join(__dirname, '..', 'templates', 'default');
  
  if (!fs.existsSync(templatePath)) {
    throw new Error('Template directory not found. Please ensure the CLI is properly installed.');
  }
  
  await fs.copy(templatePath, projectPath);
}

async function replacePlaceholders(projectPath, projectName) {
  const files = [
    'package.json',
    'README.md',
    'next.config.js',
    'tailwind.config.ts',
    'tsconfig.json',
    '.eslintrc.json',
    'app/layout.tsx',
    'app/page.tsx'
  ];
  
  for (const file of files) {
    const filePath = path.join(projectPath, file);
    if (fs.existsSync(filePath)) {
      let content = await fs.readFile(filePath, 'utf8');
      content = content.replace(/\{\{PROJECT_NAME\}\}/g, projectName);
      content = content.replace(/\{\{PROJECT_NAME_CAMEL\}\}/g, projectName.replace(/-([a-z])/g, (g) => g[1].toUpperCase()));
      await fs.writeFile(filePath, content);
    }
  }
}

async function initializeGit(projectPath) {
  try {
    process.chdir(projectPath);
    execSync('git init', { stdio: 'ignore' });
    execSync('git add .', { stdio: 'ignore' });
    execSync('git commit -m "Initial commit: Next.js starter kit setup"', { stdio: 'ignore' });
  } catch (error) {
          console.warn(chalkInstance.yellow('Warning: Git initialization failed. You can run git init manually.'));
  }
}

async function installDependencies(projectPath, packageManager) {
  try {
    process.chdir(projectPath);
    
    let installCommand;
    switch (packageManager) {
      case 'yarn':
        installCommand = 'yarn install';
        break;
      case 'pnpm':
        installCommand = 'pnpm install';
        break;
      default:
        installCommand = 'npm install';
    }
    
    execSync(installCommand, { stdio: 'inherit' });
  } catch (error) {
    throw new Error(`Failed to install dependencies: ${error.message}`);
  }
}

function displaySuccessMessage(projectName, projectPath, packageManager) {
  console.log(chalkInstance.green('\n🎉 Project created successfully!'));
  console.log(chalkInstance.blue('\nNext steps:'));
  console.log(chalkInstance.white(`  cd ${projectName}`));
  
  if (packageManager === 'npm') {
    console.log(chalkInstance.white('  npm run supabase:start  # Start local Supabase'));
    console.log(chalkInstance.white('  npm run dev             # Start development server'));
  } else if (packageManager === 'yarn') {
    console.log(chalkInstance.white('  yarn supabase:start    # Start local Supabase'));
    console.log(chalkInstance.white('  yarn dev                # Start development server'));
  } else {
    console.log(chalkInstance.white('  pnpm supabase:start    # Start local Supabase'));
    console.log(chalkInstance.white('  pnpm dev                # Start development server'));
  }
  
  console.log(chalkInstance.blue('\n📚 Documentation:'));
  console.log(chalkInstance.white('  Read README.md for detailed setup instructions'));
  console.log(chalkInstance.white('  Visit https://nextjs.org/docs for Next.js docs'));
  console.log(chalkInstance.white('  Visit https://supabase.com/docs for Supabase docs'));
  
  console.log(chalkInstance.blue('\n🚀 Happy coding!'));
}

program.parse();
