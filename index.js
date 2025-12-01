import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getFirestore,collection, query, where, getDocs  } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

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
const db = getFirestore(app);
// Elementos DOM
const portafolioGrid = document.querySelector("#portafolioGrid");
document.addEventListener("DOMContentLoaded", async () => {
    const q = query(collection(db, "Clientes"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        portafolioGrid.innerHTML += `
        <div class="portfolio-item">
            <img src="./img/${doc.data().nombre}.jpg" alt="${doc.data().nombre}">
            <h3>${doc.data().nombre}</h3>
            <p>${doc.data().fecha}</p>
        </div>
        `;
    });

})