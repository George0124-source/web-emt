// firebase.js
// Importamos las funciones necesarias de Firebase desde la nube
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc, query, where } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// --- PEGA AQUÍ TU CONFIGURACIÓN DE FIREBASE ---
// (Borra esto y pon lo que copiaste de la consola de Firebase)
const firebaseConfig = {
  apiKey: "AIzaSyDs6ZyNT7JzMV9MRiXsOfJWK8DlZZaJRsQ",
  authDomain: "emt-transporte.firebaseapp.com",
  projectId: "emt-transporte",
  storageBucket: "emt-transporte.firebasestorage.app",
  messagingSenderId: "796241871096",
  appId: "1:796241871096:web:060945b69e4363ba6b7b0d"
};
// Inicializamos Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Exportamos las funciones para usarlas en otros archivos
export { db, collection, addDoc, getDocs, updateDoc, doc, query, where };
