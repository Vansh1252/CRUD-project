<h1 align="center">Student Records – CRUD App</h1>

<p align="center">
  A server-rendered app to add, view, edit and delete student records, built with <b>Node.js</b>, <b>Express</b>, <b>MongoDB</b> and <b>EJS</b>.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white"/>
  <img src="https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black"/>
</p>

---

## Features

- **Create:** add a new student from a form on the home page
- **Read:** see all students in a table
- **Update:** edit any student on a pre-filled form
- **Delete:** remove a student with one click
- Shared header and footer partials for a consistent layout

## Routes

| Method | Route | Action |
|---|---|---|
| GET | `/` | List all students and show the add form |
| POST | `/` | Create a student |
| GET | `/edit/:id` | Show the edit form |
| POST | `/update/:id` | Save changes |
| POST | `/delete/:id` | Delete a student |

## Project structure

~~~text
├── app.js                # Express setup and server start
├── db/connectdb.js       # MongoDB connection
├── model/student.js      # Student schema
├── controllers/index.js  # CRUD handlers
├── routes/web.js         # Routes
├── views/                # index.ejs, edit.ejs and partials
└── public/css/           # Styles
~~~

## Getting started

**Prerequisites:** Node.js 18+ and MongoDB

~~~bash
git clone https://github.com/Vansh1252/CRUD-project.git
cd CRUD-project
npm install
~~~

Create a `.env` file:

~~~env
DATABASE_URL=mongodb://localhost:27017/
PORT=8000
~~~

Run the app:

~~~bash
npm run dev
~~~

## Author

**Vansh Jain**: [GitHub](https://github.com/Vansh1252) · sanklechav65@gmail.com
