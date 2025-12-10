// main.js
import { db, collection, query, where, getDocs } from "./firebase.js";

// Referencias HTML
const btnLogin = document.getElementById('btnLogin');
const inputId = document.getElementById('conductorId');
const inputPass = document.getElementById('conductorPass'); // Asegúrate de tener este ID en el HTML

btnLogin.addEventListener('click', async () => {
    const usuario = inputId.value;
    const password = inputPass.value;

    if(usuario === "" || password === "") {
        alert("Por favor, rellena todos los campos.");
        return;
    }

    try {
        // 1. Crear la consulta: "Busca en la colección 'conductores' donde id_empleado sea X y contrasena sea Y"
        const q = query(collection(db, "conductores"), 
            where("id_empleado", "==", usuario),
            where("contrasena", "==", password)
        );

        // 2. Ejecutar la consulta
        const querySnapshot = await getDocs(q);

        // 3. Comprobar si encontró algo
        if (!querySnapshot.empty) {
            // ¡LOGIN CORRECTO!
            // Obtenemos los datos del conductor para usarlos en la siguiente página
            const datosConductor = querySnapshot.docs[0].data();
            
            console.log("Login exitoso:", datosConductor.nombre);
            
            // Guardamos los datos en la memoria del navegador (para saber quién es en la Tablet)
            localStorage.setItem("usuario_emt", JSON.stringify(datosConductor));

            // Redirigimos a la tablet (Crearemos este archivo en el siguiente paso)
            window.location.href = "tablet.html";
        } else {
            // LOGIN INCORRECTO
            alert("❌ ID de empleado o contraseña incorrectos.");
        }

    } catch (e) {
        console.error("Error en el login: ", e);
        alert("Error de conexión con la base de datos.");
    }
});
