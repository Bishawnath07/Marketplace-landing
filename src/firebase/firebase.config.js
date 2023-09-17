// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArZIhSeR_bgT2AWBfAlkEN83XCQJ72F78",
  authDomain: "marketplace-landing.firebaseapp.com",
  projectId: "marketplace-landing",
  storageBucket: "marketplace-landing.appspot.com",
  messagingSenderId: "1097752171560",
  appId: "1:1097752171560:web:64e2f20f50fd470fdfd11d",
  measurementId: "G-NM07JM04TF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);