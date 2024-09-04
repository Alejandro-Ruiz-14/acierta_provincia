// Array con las provincias y su población (datos ficticios para este ejemplo)
const provincias = [
    { nombre: "Álava", habitantes: 333940 },
    { nombre: "Albacete", habitantes: 386464 },
    { nombre: "Alicante", habitantes: 1921360 },
    { nombre: "Almería", habitantes: 731792 },
    { nombre: "Ávila", habitantes: 158421 },
    { nombre: "Badajoz", habitantes: 672137 },
    { nombre: "Baleares", habitantes: 1190090 },
    { nombre: "Barcelona", habitantes: 5664571 },
    { nombre: "Burgos", habitantes: 355045 },
    { nombre: "Cáceres", habitantes: 383638 },
    { nombre: "Cádiz", habitantes: 1240159 },
    { nombre: "Castellón", habitantes: 579962 },
    { nombre: "Ciudad Real", habitantes: 491863 },
    { nombre: "Córdoba", habitantes: 781451 },
    { nombre: "La Coruña", habitantes: 1122799 },
    { nombre: "Cuenca", habitantes: 196329 },
    { nombre: "Gerona", habitantes: 793810 },
    { nombre: "Granada", habitantes: 921338 },
    { nombre: "Guadalajara", habitantes: 269588 },
    { nombre: "Guipúzcoa", habitantes: 723576 },
    { nombre: "Huelva", habitantes: 525835 },
    { nombre: "Huesca", habitantes: 220461 },
    { nombre: "Jaén", habitantes: 623452 },
    { nombre: "León", habitantes: 452142 },
    { nombre: "Lérida", habitantes: 440915 },
    { nombre: "Lugo", habitantes: 327946 },
    { nombre: "Madrid", habitantes: 6779888 },
    { nombre: "Málaga", habitantes: 1713498 },
    { nombre: "Murcia", habitantes: 1532094 },
    { nombre: "Navarra", habitantes: 661537 },
    { nombre: "Orense", habitantes: 305223 },
    { nombre: "Palencia", habitantes: 160321 },
    { nombre: "Las Palmas", habitantes: 1154090 },
    { nombre: "Pontevedra", habitantes: 942665 },
    { nombre: "La Rioja", habitantes: 319914 },
    { nombre: "Salamanca", habitantes: 329245 },
    { nombre: "Segovia", habitantes: 153478 },
    { nombre: "Sevilla", habitantes: 1950210 },
    { nombre: "Soria", habitantes: 88203 },
    { nombre: "Tarragona", habitantes: 830798 },
    { nombre: "Santa Cruz de Tenerife", habitantes: 1052830 },
    { nombre: "Teruel", habitantes: 133544 },
    { nombre: "Toledo", habitantes: 709403 },
    { nombre: "Valencia", habitantes: 2596738 },
    { nombre: "Valladolid", habitantes: 514455 },
    { nombre: "Vizcaya", habitantes: 1130606 },
    { nombre: "Zamora", habitantes: 170588 },
    { nombre: "Zaragoza", habitantes: 964693 },
    { nombre: "Ceuta", habitantes: 84777 },
    { nombre: "Melilla", habitantes: 87120 }
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

// Función para comprobar la respuesta del jugador y mostrar habitantes
function comprobarRespuesta(seleccionada, provincias) {
    const provinciaMayor = provincias.reduce((max, provincia) => 
        provincia.habitantes > max.habitantes ? provincia : max, provincias[0]);

    // Mostrar el número de habitantes de las tres provincias
    let textoProvincias = `Habitantes:\n`;
    provincias.forEach(provincia => {
        textoProvincias += `${provincia.nombre}: ${provincia.habitantes.toLocaleString()} habitantes\n`;
    });

    // Mostrar resultado
    if (seleccionada.nombre === provinciaMayor.nombre) {
        resultado.textContent = `¡Enhorabuena! Has acertado.\n${textoProvincias}`;
        resultado.className = 'success';
    } else {
        resultado.textContent = `Vuelve a intentarlo.\n${textoProvincias}`;
        resultado.className = 'error';
    }
    resultado.style.display = 'block'; // Mostrar el resultado
}

// Función para iniciar el juego
function iniciarJuego() {
    const tresProvincias = obtenerTresProvincias();
    mostrarProvincias(tresProvincias);
    resultado.textContent = ''; // Limpiar el mensaje de resultado
    resultado.style.display = 'none'; // Ocultar el resultado inicialmente
}

// Evento para jugar de nuevo
jugarDeNuevoBtn.addEventListener('click', iniciarJuego);

// Iniciar el juego al cargar la página
iniciarJuego();