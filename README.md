# BudgetCure - Smart Hospital Search Platform

BudgetCure is a modern web application that helps users find hospitals based on their location, budget, and medical needs. The platform provides a user-friendly interface to search, filter, and compare hospitals, making healthcare decisions easier and more informed.

## Features

- 🔍 **Smart Search**: Find hospitals based on location, budget, and medical specialties
- 💰 **Budget Filtering**: Filter hospitals within your budget range
- 📍 **Location-based Search**: Find hospitals near your location
- ⭐ **Rating System**: View hospital ratings and reviews
- 🏥 **Detailed Hospital Profiles**: Comprehensive information about each hospital
- 🔐 **User Authentication**: Secure login and signup system
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

- **Frontend**:
  - React.js
  - TypeScript
  - Tailwind CSS
  - Shadcn UI Components
  - React Router for navigation
  - React Query for data fetching

- **Backend**:
  - Appwrite (Backend as a Service)
  - Appwrite Database
  - Appwrite Authentication

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Appwrite account and project setup

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/BudgetCure.git
   cd BudgetCure
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory and add your Appwrite configuration:
   ```
   VITE_APPWRITE_ENDPOINT=your_appwrite_endpoint
   VITE_APPWRITE_PROJECT_ID=your_project_id
   VITE_APPWRITE_DATABASE_ID=your_database_id
   VITE_APPWRITE_COLLECTION_ID=your_collection_id
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Project Structure

```
src/
├── _auth/           # Authentication related components
├── _root/           # Root layout and pages
├── components/      # Reusable components
│   ├── shared/     # Shared components
│   └── ui/         # UI components
├── lib/            # Utility functions and configurations
│   ├── appwrite/   # Appwrite related configurations
│   └── react-query/# React Query configurations
└── types/          # TypeScript type definitions
```

## Features in Detail

### Search Functionality
- Search hospitals by location
- Filter by budget range
- Filter by medical specialties
- Sort by ratings
- View detailed hospital information

### User Authentication
- Secure signup and login
- User profile management
- Session management

### Hospital Information
- Hospital details
- Specialties offered
- Consultation fees
- Ratings and reviews
- Location information

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Appwrite](https://appwrite.io/) for the backend services
- [Shadcn UI](https://ui.shadcn.com/) for the UI components
- [Lucide Icons](https://lucide.dev/) for the icons
- [Tailwind CSS](https://tailwindcss.com/) for the styling

## Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)
Project Link: [https://github.com/yourusername/BudgetCure](https://github.com/yourusername/BudgetCure)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Deployment

### Option 1: Vercel (Recommended)

Vercel is the recommended platform for deploying BudgetCure due to its excellent support for React applications and seamless integration with GitHub.

1. Create a Vercel account at [vercel.com](https://vercel.com)
2. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Login to Vercel:
   ```bash
   vercel login
   ```
4. Deploy the project:
   ```bash
   vercel
   ```
5. Configure environment variables in Vercel dashboard:
   - Go to Project Settings > Environment Variables
   - Add all the environment variables from your `.env` file

### Option 2: Netlify

Netlify is another excellent option for deploying the application.

1. Create a Netlify account at [netlify.com](https://netlify.com)
2. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```
3. Login to Netlify:
   ```bash
   netlify login
   ```
4. Deploy the project:
   ```bash
   netlify deploy
   ```
5. Configure environment variables in Netlify dashboard:
   - Go to Site Settings > Build & Deploy > Environment
   - Add all the environment variables from your `.env` file

### Build Process

Before deploying, build the project:

```bash
npm run build
# or
yarn build
```

This will create a `dist` folder with optimized production files.

### Environment Variables

Make sure to set up the following environment variables in your deployment platform:

```
VITE_APPWRITE_ENDPOINT=your_appwrite_endpoint
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
```

### Deployment Checklist

Before deploying, ensure:

1. All environment variables are properly configured
2. The build process completes successfully
3. Appwrite backend is properly set up and accessible
4. CORS settings in Appwrite are configured to allow requests from your deployment domain
5. All API endpoints are using the correct production URLs

### Post-Deployment

After deployment:

1. Test all features in the production environment
2. Verify authentication flows
3. Check if all API calls are working
4. Monitor error logs
5. Set up proper error tracking (e.g., Sentry)
