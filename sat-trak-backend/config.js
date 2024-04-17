require('dotenv').config();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Web app's Firebase configuration
// Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqd-3TNx_lLGMhXbuRhPuJIndTcLfJWgI",
  authDomain: "sattrak-web-app.firebaseapp.com",
  projectId: "sattrak-web-app",
  storageBucket: "sattrak-web-app.appspot.com",
  messagingSenderId: "932770170504",
  appId: "1:932770170504:web:0560e6c58d1d102f42813d",
  measurementId: "G-W1RYCC4JD8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

module.exports = {
    development: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql'
    },
    production: {
        username: process.env.PROD_DB_USER,
        password: process.env.PROD_DB_PASSWORD,
        database: process.env.PROD_DB_NAME,
        host: process.env.PROD_DB_HOST,
        port: process.env.PROD_DB_PORT,
        dialect: 'mysql'
        // Add any additional production configuration needed
    }
};
