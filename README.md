# Wild Oasis Hotel Management System

## Overview

**Wild Oasis Hotel Management** is a modern React-based application designed to streamline hotel operations. It includes features for managing bookings, cabins, check-ins/outs, user accounts, and dashboards. The app is built with a modular and scalable architecture, ensuring ease of maintenance and feature expansion.

---

## Features

### Core Functionalities
- **Authentication**: Secure login, signup, and account management.
- **Bookings Management**: View, create, update, and delete bookings.
- **Cabin Management**: Add, edit, and manage hotel cabins.
- **Check-in/Check-out**: Simplified processes for guest check-ins and check-outs.
- **Dashboard**: Comprehensive analytics and visualizations for recent activities and sales.
- **Settings**: Update application settings and user preferences.

### Developer Features
- **Dark Mode**: Integrated dark mode toggle for better user experience.
- **Custom Hooks**: Reusable hooks for state management and API interactions.
- **Modular Components**: Reusable UI components for forms, tables, and modals.
- **API Integration**: Interaction with Supabase for backend services.
- **Global Styles**: Centralized styling using styled-components.

---

## Directory Structure

### Root Files
- **`README.md`**: Project documentation.
- **`index.html`**: Entry HTML file.
- **`package.json`**: Project dependencies and scripts.
- **`vite.config.js`**: Configuration for Vite.
- **`netlify.toml`**: Configuration for Netlify deployment.
- **`vercel.json`**: Configuration for Vercel deployment.

### Key Folders and Files

#### **`src/`**
- **Main Files**:
  - `App.jsx`: Main application component.
  - `main.jsx`: Entry point for rendering the React app.

- **Context**:
  - `DarkModeContext.jsx`: Context for managing dark mode.

- **Data**:
  - Predefined data files for bookings, cabins, and guests.
  - `Uploader.jsx`: Utility for handling data uploads.

- **Features**:
  - **Authentication**: Components and hooks for user authentication.
    - `LoginForm.jsx`, `SignupForm.jsx`, `useLogin.js`, etc.
  - **Bookings**: Components and hooks for managing bookings.
    - `BookingTable.jsx`, `useBookings.js`, etc.
  - **Cabins**: Components and hooks for managing cabins.
    - `CabinTable.jsx`, `useCabins.js`, etc.
  - **Check-in/Check-out**: Components for managing guest activities.
    - `CheckinBooking.jsx`, `useCheckin.js`, etc.
  - **Dashboard**: Components for displaying analytics and stats.
    - `DashboardLayout.jsx`, `SalesChart.jsx`, etc.
  - **Settings**: Components and hooks for updating settings.
    - `UpdateSettingsForm.jsx`, `useSettings.js`.

- **Hooks**:
  - Custom hooks like `useLocalStorageState.js`, `useOutsideClick.js`.

- **Pages**:
  - Page components like `Dashboard.jsx`, `Bookings.jsx`, `Login.jsx`.

- **Services**:
  - API interaction files for authentication, bookings, cabins, and settings.
  - `supabase.js`: Configuration for Supabase.

- **Styles**:
  - `GlobalStyles.js`: Centralized global styling.

- **UI Components**:
  - Reusable components like `Button.jsx`, `Modal.jsx`, `Spinner.jsx`, `Table.jsx`.

- **Utils**:
  - Utility files like `constants.js`, `helpers.js`.

---

## Installation and Setup

### Prerequisites
- Node.js (v16 or higher)
- Vite for React development
- Supabase account for backend services

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Zahidul-Turja-wild-oasis-hotel-management.git
   cd Zahidul-Turja-wild-oasis-hotel-management
   ```

2. Install Dependencies:
  ```
  npm install
  ```
3. Setup environment variables:
   Create a file named `.env.local` and add the following variables
   ```
   NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>
   NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-anon-key>
   NEXTAUTH_SECRET=<your-nextauth-secret>
   NEXTAUTH_URL=<your-application-url>
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
