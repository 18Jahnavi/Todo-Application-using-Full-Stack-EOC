
Project Name :Creative Todo Application using Full Stack Development

Project Conditions / Requirements
Frontend
React
TypeScript
Chakra UI
Zustand (State Management)

Backend
Node.js
Express.js
TypeScript

Database
MongoDB Atlas (Cloud Database)
Mongoose ODM

Features
Add Todo Task
View Todo Tasks
Delete Todo Task
Store tasks permanently in MongoDB
Connect Frontend ↔ Backend via REST APIs
Manage state using Zustand

What You Did (Step-by-Step)
1. Created Frontend
   Using Vite + React + TypeScript.
 Created:
     client/
2. Installed Chakra UI
    Used Chakra UI to build UI components.
Examples:
Buttons
Input fields
Layout containers
3. Implemented Zustand
Created Zustand store to:
Store todos
Fetch todos
Add todos
Delete todos
Example actions:
fetchTodos()
addTodo()
removeTodo()
4. Built Todo UI
Created:
Input field
Add button
Todo list display
Delete button
5. Created Backend
Created:
server/
Built Express server.
6. Configured MongoDB Atlas
Created:
Atlas account
Cluster0
Database user
IP Access List
Connected using:
mongodb+srv://...
7. Connected MongoDB with Mongoose
Created:
config/db.ts
Used:
mongoose.connect(...)
8. Created Todo Schema
Created:
Todo Model
Fields:
title: string
completed: boolean
9. Created REST APIs
GET Todos
GET /api/todos

Fetch all tasks.

POST Todo
POST /api/todos

Add new task.

DELETE Todo
DELETE /api/todos/:id

Delete task.

10. Connected Frontend to Backend

Used:

fetch()

or API calls from Zustand.

Flow:

React UI
   ↓
Zustand
   ↓
Express API
   ↓
MongoDB Atlas
🛠 Tools Used
Frontend
React
TypeScript
Vite
Chakra UI
Zustand
Backend
Node.js
Express.js
Database
MongoDB Atlas
Mongoose
Development Tools
Visual Studio Code
GitHub
Postman
📥 Installations You Performed
Frontend
npm create vite@latest client -- --template react-ts
npm install
Chakra UI
npm install @chakra-ui/react
npm install @emotion/react
npm install react-icons
Zustand
npm install zustand
Backend
Initialize Project
npm init -y
Runtime Dependencies
npm install express cors mongoose dotenv
Development Dependencies
npm install -D typescript ts-node-dev
npm install -D @types/node
npm install -D @types/express
npm install -D @types/cors
📂 Architecture
client (React + TS + Chakra + Zustand)
        ↓
Express API
        ↓
MongoDB Atlas


Developed a full-stack Todo Application using React, TypeScript, Chakra UI, and Zustand for the frontend. Built REST APIs using Node.js, Express.js, and TypeScript. Integrated MongoDB Atlas using Mongoose for persistent data storage. Implemented features such as adding, viewing, and deleting tasks while managing application state through Zustand and connecting the frontend with backend APIs.
