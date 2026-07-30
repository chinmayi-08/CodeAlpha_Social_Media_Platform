# 🌐 CodeAlpha Social Media Platform

A full-stack **Social Media Platform** developed as part of the **CodeAlpha Full Stack Development Internship**. This project enables users to register, log in, create posts, like posts, comment on posts, follow users, and view profile information through a simple and responsive interface.

---

## 📌 Project Description

The CodeAlpha Social Media Platform is a web application built using **React.js**, **Node.js**, and **Express.js**. It demonstrates the fundamentals of full-stack web development by integrating a frontend user interface with backend REST APIs.

The project focuses on implementing core social media functionalities in a beginner-friendly architecture without using a database, making it suitable for learning API integration, routing, and CRUD operations.

---

## ✨ Features

- 👤 User Registration
- 🔐 User Login
- 🏠 Home Page
- 📝 Create New Posts
- 📖 View All Posts
- ❤️ Like Posts
- 💬 Add Comments
- 👥 Follow Users
- 👤 User Profile Page
- 🧭 Navigation using React Router
- 🔗 REST API Integration with Axios
- 📱 Responsive User Interface

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- HTML5
- CSS3
- JavaScript (ES6)

### Backend
- Node.js
- Express.js
- CORS

### Development Tools
- Visual Studio Code
- Git
- GitHub
- Postman / Thunder Client

---

## 📂 Project Structure

```
CodeAlpha-Social-Media-Platform/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── package.json
│   └── server.js
│
├── screenshots/
│   ├── home.png
│   ├── register.png
│   ├── login.png
│   ├── feed.png
│   ├── profile.png
│   └── users.png
│
├── .gitignore
├── README.md
└── package-lock.json
```

---

## 🚀 Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/CodeAlpha-Social-Media-Platform.git
```

---

### Backend Setup

```bash
cd server
npm install
npm start
```

Backend runs on:

```
http://localhost:5000
```

---

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 📸 Screenshots

### 🏠 Home Page

![Home](screenshots/Home.png)

---

### 📝 Register Page

![Register](screenshots/Register.png)

---

### 🔐 Login Page

![Login](screenshots/Login.png)

---

### 📰 Feed Page

![Feed](screenshots/Feed.png)

---

### 👤 Profile Page

![Profile](screenshots/Profile.png)

---

### 👥 Users Page

![Users](screenshots/Users.png)

---

## 📡 API Endpoints

### Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |

### Posts

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/posts` | Get all posts |
| POST | `/api/posts` | Create a new post |
| PUT | `/api/posts/like/:id` | Like a post |

### Comments

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/comments` | Add a comment |

### Follow

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/follow` | Follow a user |

---

## 🎯 Learning Outcomes

Through this project, I learned:

- Full Stack Web Development
- REST API Development
- React Component Architecture
- React Router
- Axios API Integration
- CRUD Operations
- Express Routing
- Frontend & Backend Integration
- Git & GitHub Workflow
- Responsive UI Design

---

## 🔮 Future Improvements

- Database Integration (MongoDB/MySQL)
- JWT Authentication
- User Sessions
- Image Uploads
- Edit/Delete Posts
- Search Users
- Real-Time Chat
- Notifications
- Dark Mode

---

## 👨‍💻 Author

**Chinmayi R**

GitHub: https://github.com/chinmayi-08

---

## 📄 License

This project was developed for educational purposes as part of the **CodeAlpha Full Stack Development Internship**.
