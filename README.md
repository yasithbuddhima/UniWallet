# UniWallet

UniWallet is a personal finance management application designed for students to help them take control of their finances. It provides an easy way to track expenses, view spending habits, and get reminders for upcoming bills.

## Key Features

- **Quick Add Expenses:** Add expenses in seconds without any hassle.
- **Visual Insights:** Get a clear picture of where your money is going with insightful charts and visualizations.
- **Bill Reminders:** Set reminders for your upcoming bills and never miss a payment.
- **User Authentication:** Secure user authentication system to protect your financial data.

## Tech Stack

### Frontend

- React
- React Router
- Recharts
- Firebase

### Backend

- Node.js
- Express
- Firebase Admin SDK

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js and npm installed on your machine.
- A Firebase project.

### Installation

1.  **Clone the repo**
    ```sh
    git clone https://your-repository-url.com
    ```
2.  **Install backend dependencies**
    ```sh
    cd backend
    npm install
    ```
3.  **Install frontend dependencies**
    ```sh
    cd ../frontend
    npm install
    ```
4.  **Set up environment variables**

    You will need to create a `.env` file in both the `frontend` and `backend` directories and add the necessary Firebase configuration.

    **Backend `.env`:**

    ```
    FIREBASE_SERVISE_ACCOUNT_KEY=<your-firebase-service-account-key>
    ADMIN_SECRET=<your-secret>
    ```

    **Frontend `.env`:**

    ```
    REACT_APP_FIREBASE_API_KEY=<your-api-key>
    REACT_APP_FIREBASE_AUTH_DOMAIN=<your-auth-domain>
    REACT_APP_FIREBASE_PROJECT_ID=<your-project-id>
    REACT_APP_FIREBASE_STORAGE_BUCKET=<your-storage-bucket>
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<your-messaging-sender-id>
    REACT_APP_FIREBASE_APP_ID=<your-app-id>
    REACT_APP_FIREBASE_CONFIG_MEASUREMENT_ID=<your-measurement-id>
    REACT_APP_BACKEND_API_BASE=<your-backend-api-base-url>
    GENERATE_SOURCEMAP=false
    ```

### Running the application

1.  **Run the backend server**
    ```sh
    cd backend
    npm start
    ```
2.  **Run the frontend development server**
    ```sh
    cd ../frontend
    npm start
    ```

## Available Scripts

### Frontend

- `npm start`: Runs the app in the development mode.
- `npm test`: Launches the test runner in the interactive watch mode.
- `npm run build`: Builds the app for production to the `build` folder.
- `npm run eject`: Removes the single dependency and copies all the configuration files and transitive dependencies into your project.

### Backend

- `npm start`: Starts the server.
- `npm run dev`: Starts the server in development mode with nodemon.
