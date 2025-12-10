// firebase.js ACTUALIZADO
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
// Aquí añadimos onSnapshot y deleteDoc que faltaban antes
import { 
    getFirestore, 
    collection, 
    addDoc, 
    getDocs, 
    updateDoc, 
    deleteDoc, 
    doc, 
    query, 
    where, 
    onSnapshot 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// --- TU CONFIGURACIÓN (NO LA BORRES) ---
// VUELVE A PONER AQUÍ LO QUE COPIASTE DE FIREBASE CONSOLA
// Si no lo tienes a mano, ve a la consola de Firebase -> Configuración del Proyecto
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

// Exportamos TODO para que tablet.html pueda usarlo
export { 
    db, 
    collection, 
    addDoc, 
    getDocs, 
    updateDoc, 
    deleteDoc, 
    doc, 
    query, 
    where, 
    onSnapshot 
};
