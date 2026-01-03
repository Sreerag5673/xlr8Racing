# XLR8 HYRON - Bi-Fuel ATV Website

Revolutionary bi-fuel all-terrain vehicle with hydrogen technology. Powered by 395cc engine delivering 9.5 HP and 22.5 Nm torque. AIS-028 certified for safe, sustainable adventure.

## Features

- Bi-Fuel System: Petrol, CNG & 18% Hydrogen
- 395cc Engine with 9.5 HP Power
- 22.5 Nm Torque
- CVT Transmission
- AIS-028 Certified Safety Systems

## Technologies

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Framer Motion

## Getting Started

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```sh
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Development

The development server will start on `http://localhost:8080`

## Project Structure

```
src/
├── components/     # React components
├── pages/         # Page components
├── assets/        # Images and static assets
├── hooks/         # Custom React hooks
└── lib/           # Utility functions
```

## Deployment

### Vercel

This project is configured for easy deployment on Vercel:

1. Push your code to GitHub, GitLab, or Bitbucket
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect the Vite configuration
4. Deploy!

The `vercel.json` file is already configured with:
- Proper routing rewrites for React Router (no 404 errors on refresh)
- Asset caching headers for optimal performance
- Build and output directory settings

**Note:** All routes are configured to serve `index.html`, allowing React Router to handle client-side routing properly. This means refreshing on any route will work correctly.

## License

© 2026 XLR8 HYRON. All rights reserved.
