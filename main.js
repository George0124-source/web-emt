// main.js
// Importamos la base de datos desde nuestro archivo firebase.js
import { db, collection, addDoc } from "./firebase.js";

// Referencia a los elementos del HTML
const btnLogin = document.getElementById('btnLogin');
const inputId = document.getElementById('conductorId');

// Función para simular el inicio de sesión
btnLogin.addEventListener('click', async () => {
    const idEmpleado = inputId.value;

    if(idEmpleado === "") {
        alert("Por favor, introduce tu ID de empleado.");
        return;
    }

    try {
        // AQUÍ VA LA MAGIA: Guardamos un registro en Firebase para probar
        // Creamos una colección llamada "logs_accesos"
        const docRef = await addDoc(collection(db, "logs_accesos"), {
            empleado: idEmpleado,
            fecha: new Date().toISOString(),
            accion: "Intento de login",
            mensaje: "El sistema está conectado correctamente"
        });

        console.log("Documento escrito con ID: ", docRef.id);
        alert(`¡Conexión Exitosa! Bienvenido Empleado ${idEmpleado}. (Registro guardado en DB)`);
        
        // Aquí más adelante redirigiremos a tablet.html
        // window.location.href = "tablet.html";

    } catch (e) {
        console.error("Error añadiendo documento: ", e);
        alert("Error al conectar con la base de datos. Revisa la consola (F12).");
    }
});
