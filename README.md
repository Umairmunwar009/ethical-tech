# Ethical Tech

## Project Overview
Ethical Tech is a multi-page website dedicated to promoting awareness about ethical technology. The site features news articles, quizzes, and insights into the latest technologies, aiming to educate users on the importance of ethical practices in the tech industry.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used
- **Frontend:** React, CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB

## Project Structure
```
ethical-tech
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── app.js
│   ├── server.js
│   └── .env
├── frontend
│   ├── public
│   ├── src
│   └── package.json
├── package.json
└── .gitignore
```

## Setup Instructions

### Backend
1. Navigate to the `backend` directory.
2. Create a `.env` file and add your MongoDB connection string and any other environment variables.
3. Install dependencies:
   ```
   npm install
   ```
4. Start the server:
   ```
   node server.js
   ```

### Frontend
1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the React application:
   ```
   npm start
   ```

## Features
- **Home Page:** Introduction to Ethical Tech with latest technologies and an about section.
- **News & Articles:** A dynamic list of news articles with timestamps and links to full articles.
- **Tech Insights:** Placeholder for future content related to technology insights.
- **Quizzes:** A collection of quizzes with a timed interface and progress tracking.
- **User Authentication:** Login and sign-up functionality with basic validation.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.