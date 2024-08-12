// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import Login from "./components/Login";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDzP_BP77JpYeQwDmSWrDqs_DlzO39Kh6k",
    authDomain: "otp-project-6ebee.firebaseapp.com",
    projectId: "otp-project-6ebee",
    storageBucket: "otp-project-6ebee.appspot.com",
    messagingSenderId: "909532235256",
    appId: "1:909532235256:web:8cc702fea05da94e7e420d",
    measurementId: "G-MY8YTR469V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(Login)