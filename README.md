# PostgreSQL React Fullstack Project

This project demonstrates how to build a simple fullstack application using PostgreSQL, Express.js, Sequelize, and React.js.  
The project includes backend structure creation, PostgreSQL installation and configuration, API setup, and frontend integration.

---

# 🚀 Technologies Used

- PostgreSQL
- Express.js
- React.js
- Sequelize ORM
- Node.js
- Axios
- Visual Studio Code
- PowerShell

---

# 📁 Project Structure

```bash
my-postgres-app/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   └── userController.js
│   │
│   ├── models/
│   │   └── User.js
│   │
│   ├── routes/
│   │   └── userRoutes.js
│   │
│   ├── package.json
│   │
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   └── package.json
│
└── README.md
```

---

# ⚡ Create Project Structure Using VS Code Terminal

## Create Main Folder

```powershell
mkdir my-postgres-app
cd my-postgres-app
```

---

## Create Backend and Frontend Folder

```powershell
mkdir backend, frontend
```

---

## Enter Backend Folder

```powershell
cd backend
```

---

## Create Backend Structure

```powershell
mkdir models, routes, controllers, config
```

---

## Create Project Files

```powershell
New-Item server.js
New-Item config/db.js
New-Item models/User.js
New-Item controllers/userController.js
New-Item routes/userRoutes.js
```

---

# 📦 Backend Installation

## Initialize Node.js

```bash
npm init -y
```

---

## Install Dependencies

```bash
npm install express sequelize pg pg-hstore cors body-parser
```

Installed packages:

- express
- sequelize
- pg
- pg-hstore
- cors
- body-parser

---

# 🗄️ PostgreSQL Installation

## Download PostgreSQL

Download PostgreSQL from the official website:

https://www.postgresql.org/download/windows/

Choose the latest version for:

```text
Windows x86-64
```

---

## Install PostgreSQL

Run the installer and follow these steps:

1. Click `Next`
2. Keep default components:
   - PostgreSQL Server
   - pgAdmin 4
   - Command Line Tools
3. Create PostgreSQL password

Example:

```text
123456
```

⚠️ Remember the password because it will be used for database connection.

---

## PostgreSQL Default Port

Keep the default port:

```text
5432
```

Complete the installation process.

---

# 🖥️ Open pgAdmin 4

After installation:

- Open `pgAdmin 4`
- Expand:

```text
Servers
```

If the server is not connected automatically:

```text
Right Click Servers
→ Register
→ Server
```

---

# 🔌 Register PostgreSQL Server

## General Tab

```text
Name: PostgreSQL
```

---

## Connection Tab

```text
Host name/address: localhost
Port: 5432
Maintenance database: postgres
Username: postgres
Password: YOUR_PASSWORD
```

Check:

```text
Save Password
```

Then click:

```text
Save
```

---

# 📂 Create Database

Expand:

```text
Servers
→ PostgreSQL
→ Databases
```

Then:

```text
Right Click Databases
→ Create
→ Database
```

Database name example:

```text
mydb
```

Click:

```text
Save
```

---

# 🔗 Connect PostgreSQL to Node.js

Open:

```text
backend/config/db.js
```

Paste:

```javascript
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('mydb', 'postgres', 'YOUR_PASSWORD', {
  host: 'localhost',
  dialect: 'postgres',
})

module.exports = sequelize
```

Replace:

```text
YOUR_PASSWORD
```

with your PostgreSQL password.

---

# 💻 Frontend Installation

## Create React App

```bash
cd ..
npx create-react-app frontend
```

---

## Enter Frontend Folder

```bash
cd frontend
```

---

## Install Axios

```bash
npm install axios
```

---

# ▶️ Run Backend Server

Open terminal in backend folder:

```bash
cd backend
node server.js
```

If successful:

```text
Server started on port 5000
```

Backend runs on:

```text
http://localhost:5000
```

---

# ▶️ Run Frontend React App

Open another terminal in frontend folder:

```bash
cd frontend
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

---

# ✅ Features

- PostgreSQL database integration
- Express.js REST API
- Sequelize ORM implementation
- React frontend integration
- Add and display users
- Axios HTTP requests
- Backend and frontend project structure setup

---

# ✅ Result

- Backend project structure successfully created
- PostgreSQL successfully installed
- Database successfully configured
- Sequelize connected to PostgreSQL
- Express.js backend running successfully
- React frontend successfully running
- Frontend connected to backend API

**Aditya Oki Ramadhan**
