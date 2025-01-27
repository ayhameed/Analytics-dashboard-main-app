# Analytics Dashboard

## Overview
This project is an analytics dashboard that consumes various APIs to display metrics related to tokens, user profiles, and admin functionalities. The dashboard includes a home screen showing top tokens, a user profile section, and an admin dashboard for metrics visualization.

## Table of Contents
- [Overview](#overview)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [File Locations](#file-locations)
- [API Integration](#api-integration)
- [Logo and Assets](#logo-and-assets)
- [Building the Application](#building-the-application)
- [Contributing](#contributing)
- [License](#license)

## Folder Structure
```
/project-root
│
├── /src
│   ├── /app
│   │   ├── /admin
│   │   │   └── page.tsx
│   │   ├── /dashboard
│   │   │   ├── page.tsx
│   │   │   ├── defi
│   │   │   │   └── page.tsx
│   │   │   └── nft
│   │   │       └── page.tsx
│   │   └── /blockchain
│   │       └── page.tsx
│   │
│   ├── /common
│   │   ├── /hooks
│   │   │   ├── useCryptoApi
│   │   │   │   └── index.ts
│   │   │   └── useUserApi
│   │   │       └── index.ts
│   │   └── /services
│   │       └── api
│   │           └── ApiService.ts
│   │
│   ├── /ui
│   │   ├── /pages
│   │   │   ├── /AdminDashboard
│   │   │   │   ├── index.tsx
│   │   │   │   └── ui
│   │   │   │       └── components
│   │   │   │           ├── AdminDashboardLayout
│   │   │   │           ├── UserCountries
│   │   │   │           └── UsersGeography
│   │   │   └── /AdminUsers
│   │   │       └── ui
│   │   │           └── components
│   │   │               └── AdminUsersPage
│   │   │
│   │   └── /assets
│   │       └── /images
│   │           └── logo.png
│   │
│   └── /styles
│       └── theme
│           └── default-theme.ts
│
├── /public
│   └── favicon.ico
│
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation
1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install the dependencies:
```bash
npm install
```

### Running the Application
To run the application in development mode:
```bash
npm run dev
```
The application will start on [http://localhost:3000](http://localhost:3000).

## File Locations & API Integration
API calls are managed in the following files:
- `src/common/hooks/useCryptoApi/index.ts`: Contains functions to fetch token details, top tokens, and other crypto-related data
- `src/common/hooks/useUserApi/index.ts`: Handles user-related API calls

## Logo and Assets
To change the logo or other assets:
1. Replace the logo file in `src/ui/assets/images/logo.png` with your desired logo
2. Ensure the new logo has the same name and format

## Building the Application
To build the application for production:
```bash
npm run build
```
This will create an optimized build in the `.next` folder.

## Contributing
Please read our contributing guidelines for details on our code of conduct and the process for submitting pull requests.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
