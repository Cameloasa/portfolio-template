# AI-Assisted Portfolio Website

A modern, responsive portfolio website created to explore AI-assisted UI design, frontend development, and automated deployment. The project combines visual design exploration with AI-generated React code and a GitHub-based deployment workflow.

**Live Demo:** [View Portfolio](https://cameloasa.github.io/portfolio-template/)

## Overview

This project explores how AI-powered design and development tools can support the creation of a modern personal portfolio website.

The design concept was developed using Google Stitch, while Google AI Studio was used to generate and refine the React application. The generated code was then connected to GitHub and prepared for deployment using GitHub Pages.

The project also provides an opportunity to explore the structure of a modern frontend application and understand the relationship between design, components, styling, and deployment.

## Tools and Technologies

- **React** — component-based UI development.
- **Vite** — frontend development server and production build tool.
- **TypeScript / JavaScript** — application logic, depending on the implementation.
- **Tailwind CSS** — utility-first styling.
- **Google Stitch** — visual design exploration and UI concept development.
- **Google AI Studio** — AI-assisted application generation and refinement.
- **Git and GitHub** — version control and source code hosting.
- **GitHub Actions** — automated build and deployment workflow.
- **GitHub Pages** — hosting for the live website.

## Design and Development Process

### 1. UI Design with Google Stitch

Google Stitch was used to explore the visual direction and layout of the portfolio. The goal was to establish a modern interface with a clear content hierarchy and a responsive design approach.

### 2. AI-Assisted Development with Google AI Studio

Google AI Studio was used to generate and refine the React application based on the design concept and project requirements.

The generated application uses reusable components and modern frontend tooling. The resulting code was reviewed and adapted for deployment.

### 3. Interactive Features

The project explores interface customization and interactive functionality, including light and dark themes. Additional features, such as switching between English and Swedish, can be developed and refined as the project evolves.

### 4. Deployment with GitHub Actions

The project is configured for deployment to GitHub Pages. The intended workflow builds the application with Vite and publishes the generated production files from the `dist` directory.

## Project Structure

The application follows a modern React project structure. The main configuration and source files include:

- `index.html` — HTML entry point.
- `vite.config.ts` — Vite configuration, including the deployment base path.
- `package.json` — project metadata, dependencies, and development scripts.
- `src/` — application source code and React components.
- `public/` — static assets, if used.
- `.github/workflows/deploy.yml` — GitHub Actions deployment workflow.

The exact structure may vary depending on the generated application.

## Running Locally

### Prerequisites

- Node.js
- npm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/Cameloasa/portfolio-template.git
cd portfolio-template
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the production version:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## AI-Assisted Workflow

This project demonstrates a workflow that combines visual design tools, AI-assisted code generation, source control, and automated deployment.

AI-generated code is treated as a starting point rather than a finished product. Configuration, dependencies, accessibility, responsive behavior, and deployment requirements still need to be reviewed and tested.

The design prompt and project instructions may be documented separately in `PROMPT.md` to make the design process more transparent and reproducible.

## Future Improvements

- Refine and test the light and dark themes.
- Implement and validate English/Swedish language switching.
- Review accessibility and keyboard navigation.
- Test responsive behavior across mobile, tablet, and desktop screens.
- Improve code organization and maintainability.
- Continue validating the automated deployment process.

## License

This project is intended as a personal portfolio and learning project. A license can be added if the source code is intended for reuse or distribution.
