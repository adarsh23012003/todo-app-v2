# 📌 Todo App v2  

A modern **Todo List Application** built with **React**.  
This project demonstrates CRUD operations (Create, Read, Update, Delete) with persistent storage using **localStorage**. It also includes **dark/light theme support**, **search functionality**, and a clean UI for better user experience.  

---

## 🚀 Features  

✅ Add, edit, and delete todos  
✅ Mark todos as completed or pending  
✅ Search and filter todos easily  
✅ Save todos in **localStorage**  
✅ Toggle between **Light & Dark theme**  
✅ Clear all todos at once  

---

## 🛠️ Tech Stack  

- **Frontend:** React (CRA)  
- **Styling:** CSS  
- **State Management:** React Hooks (`useState`, `useEffect`, Context API)  
- **Storage:** Browser `localStorage`  

---

## 📂 Project Structure  

```bash
todo-app-v2/
│── public/               # Static files
│   ├── index.html
│   └── favicon.ico
│
│── src/
│   ├── components/       # Reusable UI components
│   │   ├── SearchBar.js
│   │   ├── ThemeToggle.js
│   │   ├── TodoForm.js
│   │   ├── TodoItem.js
│   │   └── TodoList.js
│   │
│   ├── contexts/         # Context API for theme
│   │   └── ThemeContext.js
│   │
│   ├── utils/            # Utility functions
│   │   └── localStorage.js
│   │
│   ├── App.js            # Main app logic
│   ├── App.css           # Styling
│   ├── index.js          # Entry point
│   └── index.css
│
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```
## ⚡ Installation & Setup
1. Clone the repository
```bash
git clone https://github.com/adarsh23012003/todo-app-v2.git
cd todo-app-v2
```
2. Install dependencies
```bash
npm install
```
3. Run the development server
```bash
npm start
```
4. Build for production
```bash
npm run build
```

## 🎯 Usage

- Type a task in the input box and press **Enter** or click **Add**  
- Click on a **todo** to mark it as **completed**  
- Use the **Search Bar** to quickly filter todos  
- Switch between **Light/Dark theme** using the toggle  
- Click **Delete button** to remove individual todos  
- Use **Clear All** to remove all todos from storage  

## 📸 Screenshots
<img width="1859" height="826" alt="image" src="https://github.com/user-attachments/assets/b6aed98e-14d8-4693-bd40-c3b154178f02" />
<img width="1886" height="906" alt="image" src="https://github.com/user-attachments/assets/7c09d223-5080-435b-8a3f-7cc0086aae54" />
<img width="844" height="893" alt="image" src="https://github.com/user-attachments/assets/1e3126d3-b1c9-4e2a-94bc-eb23f42a81ef" />
<img width="823" height="347" alt="image" src="https://github.com/user-attachments/assets/e881e1d9-4f75-451f-8410-18b15e1bd508" />
<img width="812" height="484" alt="image" src="https://github.com/user-attachments/assets/f11e6d82-6758-429d-9748-bdaf1085f852" />
<img width="807" height="334" alt="image" src="https://github.com/user-attachments/assets/f973c497-9bd4-439f-a538-55e75d303131" />


## 🔮 Future Improvements

- ✅ Drag & drop todo ordering
- ✅ Category/labels for tasks
- ✅ Due date & reminders
- ✅ Cloud sync with backend


## 🤝 Contribution

Want to improve this project? Follow these steps:

1. Fork the repo
2. Create a new branch (`feature-xyz`)
3. Commit changes & push
4. Open a Pull Request
