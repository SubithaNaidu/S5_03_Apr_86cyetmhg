# Getting Started with Create React App
# Recipe Book App
**🔗 Video Demo:** ".Recording 2025-04-03 101828.mp4"

## 📌 Overview
The **Recipe Book App** is a web application built with **React + TypeScript** that allows users to **create, view, edit, and delete recipes**. The app uses **Redux Toolkit** for state management, **Formik + Yup** for form validation, and **React Router** for navigation. It also includes authentication pages for **login and signup**.

---

## 🚀 Features
### ✅ **Authentication**
- User **Signup** and **Login** pages.
- Redirects users based on account status.

### ✅ **Home Page**
- Displays a **list of recipes** (title, image, short description).
- **Search functionality** to filter recipes.
- Click on a recipe to view **detailed information**.

### ✅ **Recipe Details Page**
- Shows **full details** of a recipe.
- Options to **edit or delete** the recipe.

### ✅ **Add/Edit Recipe Page**
- Allows users to **add new recipes** or **edit existing ones**.
- Uses **Formik + Yup** for form validation.
- Supports **image URL input and file upload**.
- Displays an **image preview** before saving.

### ✅ **State Management**
- Uses **Redux Toolkit** for managing recipe data.

### ✅ **UI & Design**
- Styled with **CSS Modules**.
- Background images for improved UI.

---

## 📌 Tech Stack
| Technology       | Purpose |
|-----------------|---------|
| **React + TypeScript** | Frontend framework |
| **Redux Toolkit** | State management |
| **React Router** | Page navigation |
| **Formik + Yup** | Form handling & validation |
| **React Icons** | UI enhancements |
| **CSS Modules** | Styling components |

---

## 📌 Installation & Setup
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-repo/recipe-book-app.git
cd recipe-book-app
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Run the App**
```sh
npm start
```

The app will be available at **http://localhost:3000/**.

---

## 📌 Project Structure
```
recipe-book-app/
│── src/
│   ├── components/        # Reusable components (RecipeCard, Navbar, etc.)
│   ├── pages/             # Pages (Home, RecipeDetails, RecipeForm)
│   ├── redux/             # Redux Toolkit store & slices
│   ├── assets/            # Images & static files
│   ├── App.tsx            # Main App Component
│   ├── index.tsx          # React Entry Point
│
│── public/                # Static assets
│── package.json           # Dependencies & scripts
│── README.md              # Project Documentation
```

---

## 📌 Demo & Video Walkthrough
If you've recorded a video walkthrough, you can upload it to a public platform like **YouTube, Google Drive, or Dropbox**, and update the link below.

**🔗 Video Demo:** [Upload & Insert Link Here]

---

## 📌 Future Enhancements
- 🔹 **User Authentication with Firebase**
- 🔹 **Recipe Categories & Filtering**
- 🔹 **Favorite Recipes / Bookmark Feature**
- 🔹 **Dark Mode Toggle**
- 🔹 **Improve UI with Tailwind CSS or Material-UI**

---

## 📌 Author
👤 **Subin & Team**

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
