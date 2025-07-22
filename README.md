# 🌐 Ubiquitous

**Ubiquitous** is a powerful and modern full-stack web application built using the **MERN** stack (MongoDB, Express.js, React.js, and Node.js). This application is designed to be scalable, secure, and extensible, with core functionalities like **user authentication**, **JWT-based session management**, and space for many advanced features.

---

## Backend Deployed Link : [Link](https://ubiquitous-vs99.onrender.com)
## Frontend Deployed Link : [Link](https://ubiquitous-vik.netlify.app)


## 🛠️ Tech Stack

### Frontend
- **React.js**
- **React Router**
- **Tailwind CSS / CSS Modules / Styled Components** *(choose your preferred styling method)*
- **Axios** (for API requests)

### Backend
- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**

### Authentication
- **JWT (JSON Web Token)**
- **bcrypt.js** for password hashing
- **Middleware** for route protection

---

## 👤 Author

- **GitHub**: [@vikram043](https://github.com/vikram043)

---

## 🔐 Features

- ✅ User Registration
- ✅ Secure Login with JWT
- ✅ Protected Routes & Middleware
- ✅ Password Encryption using bcrypt
- ✅ Persistent Login Sessions
- ✅ Modular Codebase for Future Additions
- ✅ RESTful API design
- ✅ Clean folder structure for separation of concerns
- 🚧 *More features like user profile, file uploads, role-based access control, and dashboards coming soon*

---

## 📁 Project Structure

ubiquitous/
├── backend/
│ ├── config/
│ ├── controllers/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ └── server.js
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── services/
│ │ ├── App.jsx
│ │ └── index.js
├── .env
├── README.md
└── package.json

---

## 📦 Installation

### Prerequisites
Make sure you have the following installed:
- **Node.js**
- **npm** or **yarn**
- **MongoDB** (local or cloud-based like MongoDB Atlas)

### Steps

```bash
# Clone the repository
git clone https://github.com/vikram043/ubiquitous.git
cd ubiquitous

# Backend setup
cd backend
npm install
# Create a .env file with MONGO_URI, JWT_SECRET, etc.
npm run dev

# Frontend setup
cd ../frontend
npm install
npm start
🌍 Environment Variables
In the backend/.env file:


PORT=5000
MONGO_URI=your_mongo_db_connection_string
JWT_SECRET=your_secret_key
📌 Future Enhancements
🔄 Refresh Tokens

🌐 Social Logins (Google, GitHub)

📊 Admin Dashboard with Analytics

🧑‍💼 User Roles and Permissions

🧾 Activity Logs

🖼️ File Uploads (e.g. images, documents)

⚙️ Settings Page

🧪 Testing
Manual testing via Postman or Thunder Client

Integration of Jest or Mocha (optional future setup)

🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

📄 License
This project is licensed under the MIT License.

Created with ❤️ by vikram043
Making the web Ubiquitous, one line of code at a time.

