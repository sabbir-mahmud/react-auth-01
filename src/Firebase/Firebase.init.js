// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjdACsA2fKgJR083ol8196PS1hHHVKZ7I",
    authDomain: "smauth01-b141a.firebaseapp.com",
    projectId: "smauth01-b141a",
    storageBucket: "smauth01-b141a.appspot.com",
    messagingSenderId: "508455061006",
    appId: "1:508455061006:web:ff96eae9c63385b8c49e5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;