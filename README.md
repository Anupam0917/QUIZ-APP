# 🧠 Quiz App (Full Stack Web Project)

A multi-page quiz application where users can create quizzes, join using a 6-digit PIN, attempt quizzes, and view results with leaderboard support.

---

## 🚀 Features

* 🔐 User Authentication (Login & Register)
* 📝 Create Quiz (dynamic form, no JSON typing)
* 🔢 Join Quiz using 6-digit PIN
* 📊 Auto Evaluation with percentage score
* 📄 Result Page with answer review
* 🏆 Leaderboard (sorted by score)
* 📂 Dashboard with navigation
* 💾 Data stored using MongoDB

---

## 🛠️ Tech Stack

### Frontend

* HTML
* CSS (simple styling)
* JavaScript (Vanilla JS)

### Backend

* Node.js
* Express.js

### Database

* MongoDB (Mongoose)

---

## 📁 Project Structure

```
quiz-app/
│
├── backend/
│   ├── server.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Quiz.js
│   │   └── Result.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── quiz.js
│   │   └── result.js
│
├── frontend/
│   ├── index.html
│   ├── register.html
│   ├── dashboard.html
│   ├── create.html
│   ├── join.html
│   ├── quiz.html
│   ├── result.html
│   ├── leaderboard.html
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone or Download Project

```
git clone <your-repo-link>
cd quiz-app/backend
```

---

### 2️⃣ Install Dependencies

```
npm install
```

---

### 3️⃣ Start Backend Server

```
node server.js
```

Server will run on:

```
http://localhost:5000
```

---

### 4️⃣ Start Frontend

* Open `frontend/index.html` in browser
* (No build tools required)

---

## 🧪 How to Use

### 🔹 Register

* Go to Register page
* Enter username, email, password

### 🔹 Login

* Login using registered credentials

### 🔹 Create Quiz

* Enter subject & number of questions
* Fill questions, options, and correct answers
* Get a 6-digit PIN

### 🔹 Join Quiz

* Enter PIN to access quiz

### 🔹 Attempt Quiz

* Select answers
* Submit to get score

### 🔹 View Result

* See percentage and correct/incorrect answers

### 🔹 Leaderboard

* Enter quiz ID
* View rankings

---

## 🧠 Key Concepts Learned

* REST API development
* MongoDB schema design
* Authentication basics
* DOM manipulation
* Data flow (Frontend ↔ Backend)
* Dynamic form handling

---

## ⚠️ Limitations (Future Improvements)

* ❌ No JWT Authentication
* ❌ No email verification
* ❌ No timer for quizzes
* ❌ Basic UI (no framework)

---

## 🚀 Future Enhancements

* Add JWT-based authentication
* Add quiz timer ⏱️
* Add user history page
* Improve UI using React
* Deploy project online

---

## 👨‍💻 Author

**Anupam Kumar Sriwastava**

---

## ⭐ If you like this project

Give it a ⭐ and improve it further!
