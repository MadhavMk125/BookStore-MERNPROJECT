# 📚 Online BookStore Management System

A full-stack **BookStore Management System** developed using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**. The application provides separate dashboards for **Users**, **Sellers**, and **Administrators**, enabling secure authentication, book management, and online order processing.

---

## 🚀 Features

### 👤 User
- User Registration & Login
- Secure JWT Authentication
- Browse Available Books
- View Book Details
- Place Orders
- View Order History
- Logout

### 🏪 Seller
- Seller Login
- Seller Dashboard
- Add New Books
- Upload Book Images
- View Own Books
- Delete Books

### 👨‍💼 Admin
- Admin Dashboard
- View System Statistics
- Manage Users
- Manage Books
- Manage Orders

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- Bootstrap
- Context API

### Backend
- Node.js
- Express.js
- JWT Authentication
- Multer (Image Upload)
- bcrypt.js

### Database
- MongoDB
- Mongoose

---

## 📂 Project Structure

```
BookStore/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   │   ├── admin/
│   │   │   └── seller/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/MadhavMk125/BookStore-MERNPROJECT.git
```

---

### 2. Install Backend Dependencies

```bash
cd server
npm install
```

---

### 3. Install Frontend Dependencies

```bash
cd client
npm install
```

---

### 4. Configure Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## ▶️ Run the Application

### Backend

```bash
cd server
npm run dev
```

### Frontend

```bash
cd client
npm run dev
```

Frontend URL:

```
http://localhost:5173
```

or

```
http://localhost:5174
```

Backend URL:

```
http://localhost:8000
```

---

## 🔐 Authentication

This project uses **JWT (JSON Web Token)** for secure authentication.

Security features include:

- Password Hashing using bcrypt
- JWT Token Authentication
- Protected Routes
- Role-Based Authorization
- Secure REST APIs

---

## 📖 REST APIs

### User APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/users/register` | Register User |
| POST | `/api/users/login` | Login User |

---

### Book APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/books` | Get All Books |
| GET | `/api/books/:id` | Get Single Book |
| POST | `/api/books/add` | Add Book |
| PUT | `/api/books/update/:id` | Update Book |
| DELETE | `/api/books/delete/:id` | Delete Book |

---

### Order APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/orders/place` | Place Order |
| GET | `/api/orders/myorders` | User Orders |

---

### Seller APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/seller/books` | Seller Books |
| GET | `/api/seller/orders` | Seller Orders |

---

### Admin APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/admin/dashboard` | Dashboard Statistics |
| GET | `/api/admin/users` | Manage Users |
| GET | `/api/admin/books` | Manage Books |
| GET | `/api/admin/orders` | Manage Orders |

---

## 📸 Screenshots

Add screenshots inside the `screenshots` folder.

Example:

```
screenshots/website/

home.png

login.png

register.png

books.png

book-details.png

my-orders.png

seller-dashboard.png

sellr-viewbooks.png

admin-dashboard.png

admin-dashboard-statictis.png

admin-manage-users.png
```

Then display them like this:

```markdown
## Home Page

![Home](screenshots/website/home.png)

## Login Page

![Login](screenshots/website/login.png)

## Books Page

![Books](screenshots/website/books.png)
```

---

## 🎯 Learning Outcomes

This project demonstrates practical knowledge of:

- Full Stack MERN Development
- MongoDB Database Design
- REST API Development
- React Routing
- React Context API
- JWT Authentication
- Role-Based Authorization
- CRUD Operations
- File Upload using Multer
- Git & GitHub

---

## 🔮 Future Enhancements

- Online Payment Gateway
- Search & Category Filters
- Wishlist
- Book Ratings & Reviews
- Email Notifications
- Cloudinary Image Upload
- Responsive UI Improvements
- Dark Mode

---

## 👨‍💻 Authors
**Akhila M,**
**Nandhini M N,**
**Madhav Krishna Yadav Mandapati**

- GitHub: https://github.com/MadhavMk125


## 📄 License

This project was developed for educational purposes as part of the **SkillWallet Full Stack Development with MERN Internship Program**.
