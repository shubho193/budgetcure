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

## Acknowledgments

- [Appwrite](https://appwrite.io/) for the backend services
- [Shadcn UI](https://ui.shadcn.com/) for the UI components
- [Lucide Icons](https://lucide.dev/) for the icons
- [Tailwind CSS](https://tailwindcss.com/) for the styling
