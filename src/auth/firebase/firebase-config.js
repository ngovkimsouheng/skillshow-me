// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDXrNs-ZpK23J6axOrryHHNXZ2WR5PkijE",
//   authDomain: "react-firebase-58700.firebaseapp.com",
//   projectId: "react-firebase-58700",
//   storageBucket: "react-firebase-58700.firebasestorage.app",
//   messagingSenderId: "714311955584",
//   appId: "1:714311955584:web:0c4aa31ed607c37d042265",
//   measurementId: "G-4DFNTJXDLL",
// };
// initializeApp(firebaseConfig);
// // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXrNs-ZpK23J6axOrryHHNXZ2WR5PkijE",
  authDomain: "react-firebase-58700.firebaseapp.com",
  projectId: "react-firebase-58700",
  storageBucket: "react-firebase-58700.firebasestorage.app",
  messagingSenderId: "714311955584",
  appId: "1:714311955584:web:0c4aa31ed607c37d042265",
  measurementId: "G-4DFNTJXDLL",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// ✅ Google
export const provider = new GoogleAuthProvider();

// ✅ GitHub
export const githubProvider = new GithubAuthProvider();

// Optional (recommended because GitHub email can be private)
githubProvider.addScope("user:email");
