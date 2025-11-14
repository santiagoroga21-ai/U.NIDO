  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-analytics.js";
  import {  getFirestore, 
            doc, 
            setDoc 
         } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";
         
         const firebaseConfig = {
             apiKey: "AIzaSyATYpzJ1L-AtCKOfW5uNLyV3eFRAMnEk2w",
             authDomain: "unido-5fd28.firebaseapp.com",
             projectId: "unido-5fd28",
             storageBucket: "unido-5fd28.firebasestorage.app",
             messagingSenderId: "114032258843",
             appId: "1:114032258843:web:972390035846bffa94edbe",
             measurementId: "G-1Z491G5353"
           };


  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);

  //Elementos del DOM
  const name = document.querySelector('#name');
  const email = document.querySelector('#email');
  const message = document.querySelector('#message');
  const btnEnviar = document.querySelector('#btnEnviar');

  //Funciones Firebase
  btnEnviar.addEventListener('click', async function(){
    console.log("click");
    await setDoc(doc(db, "Clientes", email.value), {
        name: name.value,
        message: message.value

    });
  })