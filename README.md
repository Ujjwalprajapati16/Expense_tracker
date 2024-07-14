# Expense Tracker

An Expense Tracker application built with the MERN stack (MongoDB, Express, React, Node.js). This application allows users to track their income and expenses efficiently.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Demo

A live demo of the application can be found [here](#).

## Features

- User Authentication
- Add, view, and delete income entries
- Add, view, and delete expense entries
- Dashboard with a summary of income and expenses
- Responsive design

## Tech Stack

**Frontend:**
- React
- Styled-Components
- Context API

**Backend:**
- Node.js
- Express
- MongoDB

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/expense-tracker.git
    ```

2. Navigate to the project directory:

    ```sh
    cd expense-tracker
    ```

3. Install dependencies for both frontend and backend:

    ```sh
    # For frontend
    cd frontend
    npm install

    # For backend
    cd ../backend
    npm install
    ```

4. Set up environment variables:

    Create a `.env` file in the `backend` directory and add the following:

    ```env
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

5. Start the application:

    ```sh
    # For frontend
    cd frontend
    npm start

    # For backend
    cd ../backend
    npm start
    ```

6. Open your browser and navigate to `http://localhost:3000`.


## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.

## Contact

Ujjwal Prajapati - [ujjwalprajapati154@gmail.com](mailto:ujwalprajapati154@gmail.com)

## Usage

1. Register or log in to your account.
2. Add income and expense entries using the respective forms.
3. View your financial summary on the dashboard.
4. Navigate between different sections using the navigation menu.
