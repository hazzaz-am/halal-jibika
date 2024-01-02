
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBksUAjP0rUneVIMnFGyZe0azFNgI3Vqs0",
  authDomain: "halal-rijik-2130a.firebaseapp.com",
  projectId: "halal-rijik-2130a",
  storageBucket: "halal-rijik-2130a.appspot.com",
  messagingSenderId: "439029734786",
  appId: "1:439029734786:web:c2ce65656990e92e50439b"
};

export const app = initializeApp(firebaseConfig);



//  apiKey: import.meta.env.REACT__VITE__APIKEY,
//  authDomain: import.meta.env.REACT__VITE__AUTHDOMAIN,
//  projectId: import.meta.env.REACT__VITE__PROJECTID,
//  storageBucket: import.meta.env.REACT__VITE__STORAGEBUCKET,
//  messagingSenderId: import.meta.env.REACT__VITE__MESSAGINGSENDERID,
//  appId: import.meta.env.REACT__VITE__APPID




// ENV FILE

// REACT__VITE__APIKEY = AIzaSyBksUAjP0rUneVIMnFGyZe0azFNgI3Vqs0
// REACT__VITE__AUTHDOMAIN = halal-rijik-2130a.firebaseapp.com
// REACT__VITE__PROJECTID = halal-rijik-2130a
// REACT__VITE__STORAGEBUCKET = halal-rijik-2130a.appspot.com
// REACT__VITE__MESSAGINGSENDERID = 439029734786
// REACT__VITE__APPID = 1:439029734786:web:c2ce65656990e92e50439b