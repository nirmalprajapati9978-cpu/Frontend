# Frontend
🔐 Login / Sign-Up UI (Frontend)

A clean and modern login + signup interface built using HTML, CSS, and JavaScript with a smooth 3D flip animation. This project connects to a backend API for authentication.

---

✨ Features

- 🔁 Flip animation between Login & Sign-Up
- 🎨 Modern UI with gradients and shadows
- ✅ Client-side validation (username & password)
- 🌐 API integration using "fetch"
- ⚡ Real-time feedback messages
- 📱 Responsive design using "clamp()"

---

📂 Project Structure

├── index.html      # Main HTML file
├── style.css       # Styling (UI + animation)
├── script.js       # Logic & API calls

---

🚀 Getting Started

1. Clone the repository:

git clone https://github.com/your-username/your-repo-name.git

2. Open the project folder:

cd your-repo-name

3. Run the project:

- Just open "index.html" in your browser

---

🔌 API Endpoints Used

Action| Endpoint
Login| "POST /login"
Sign Up| "POST /sign"

Example Request Body:

{
  "username": "example",
  "password": "1234"
}

---

🧠 Validation Rules

- Username must be at least 3 characters
- Password must be at least 4 characters
- Fields cannot be empty

---

🎭 UI Behavior

- Click "Sign up" → flips to signup form
- Click "Login" → flips back to login form
- Shows messages like:
  - "All fields are required 😳"
  - "Checking..."
  - "Login success ✔️"
  - "Server error 😵"

---

⚠️ Notes

- This is only the frontend
- Backend must be running at:

https://backend-js1e.onrender.com

- On success, user is redirected to Google (can be changed)

---

🛠️ Tech Stack

- HTML5
- CSS3 (Flexbox + 3D transforms)
- Vanilla JavaScript (No frameworks)

---

💡 Future Improvements

- 🔐 Add JWT token handling
- 🧂 Password hashing (frontend hint + backend secure)
- 💾 Store session (localStorage / cookies)
- 🎯 Better error handling
- 🌙 Dark mode toggle

---

🙌 Contributing

Pull requests are welcome. For major changes, open an issue first.

---

📄 License

This project is open source and free to use.

---

👨‍💻 Author

Made with 💙 by Nirmal

---
