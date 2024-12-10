# kanbanBoard
Description

This repository contains a Kanban board application enhanced with JWT-based authentication for secure access and session management. The goal of this challenge is to implement authentication features, enhance the login UI, and deploy the fully functional application to Render.

Secure Login:

Users can log in to the Kanban board application with a username and password.
JWT-Based Authentication:

Valid credentials generate a JSON Web Token (JWT) for secure and authenticated API requests.
Invalid credentials display an appropriate error message.
Session Management:

Upon successful login, the JWT is securely stored in the client's local storage.
Users are logged out automatically after a period of inactivity or when they manually log out.
Access Control:

Only authenticated users can access the main Kanban board page.
Non-authenticated users are redirected to the login page.

Installation

Clone the repository:

git clone  https://github.com/nadiahashe/kanbanBoard.git
cd kanban-board-app
Install dependencies for both the client and server:

cd client
npm install
cd ../server
npm install
Run the application:

Server:

npm start
