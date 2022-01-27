import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDkW9CmWmRw27ysWn1VBFVdM6rvZgxXpLM",
  authDomain: "libreria-espinoza.firebaseapp.com",
  projectId: "libreria-espinoza",
  storageBucket: "libreria-espinoza.appspot.com",
  messagingSenderId: "757477636506",
  appId: "1:757477636506:web:3cfd778794a92a9d50a223"
};

const app = initializeApp(firebaseConfig);

export const getFirestoreApp=()=>{
    return app
}