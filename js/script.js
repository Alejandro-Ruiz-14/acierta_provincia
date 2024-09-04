// Array con las provincias y su población (datos ficticios para este ejemplo)
const provincias = [
    { nombre: "Madrid", habitantes: 6661949 },
    { nombre: "Barcelona", habitantes: 5664571 },
    { nombre: "Valencia", habitantes: 2596738 },
    { nombre: "Sevilla", habitantes: 1944379 },
    { nombre: "Zaragoza", habitantes: 972528 },
    { nombre: "Málaga", habitantes: 1646584 },
    { nombre: "Murcia", habitantes: 1511251 },
    { nombre: "Cádiz", habitantes: 1240159 },
    { nombre: "Alicante", habitantes: 1836459 },
    // Añadir más provincias con sus respectivos habitantes...
];

// Elementos del DOM
const provinciasContainer = document.getElementById('provincias-container');
const resultado = document.getElementById('resultado');
const jugarDeNuevoBtn = document.getElementById('jugar-de-nuevo');

// Función para obtener tres provincias aleatorias
function obtenerTresProvincias() {
    let provinciasAleatorias = [];
    while (provinciasAleatorias.length < 3) {
        const provincia = provincias[Math.floor(Math.random() * provincias.length)];
        if (!provinciasAleatorias.includes(provincia)) {
            provinciasAleatorias.push(provincia);
        }
    }
    return provinciasAleatorias;
}

// Función para mostrar las provincias en la pantalla
function mostrarProvincias(provincias) {
    provinciasContainer.innerHTML = ''; // Limpiamos el contenedor
    provincias.forEach(provincia => {
        const div = document.createElement('div');
        div.classList.add('provincia');
        div.textContent = provincia.nombre;
        div.addEventListener('click', () => comprobarRespuesta(provincia, provincias));
        provinciasContainer.appendChild(div);
    });
}

// Función para comprobar la respuesta del jugador
function comprobarRespuesta(seleccionada, provincias) {
    const provinciaMayor = provincias.reduce((max, provincia) => 
        provincia.habitantes > max.habitantes ? provincia : max, provincias[0]);

    if (seleccionada.nombre === provinciaMayor.nombre) {
        resultado.textContent = "¡Enhorabuena! Has acertado.";
        resultado.className = 'success';
    } else {
        resultado.textContent = "Vuelve a intentarlo.";
        resultado.className = 'error';
    }
}

// Función para iniciar el juego
function iniciarJuego() {
    const tresProvincias = obtenerTresProvincias();
    mostrarProvincias(tresProvincias);
    resultado.textContent = ''; // Limpiar el mensaje de resultado
}

// Evento para jugar de nuevo
jugarDeNuevoBtn.addEventListener('click', iniciarJuego);

// Iniciar el juego al cargar la página
iniciarJuego();