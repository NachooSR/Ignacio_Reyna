const proyectos = document.querySelectorAll('.proyecto');


let proyectoActual = 0;

function mostrarProyecto(indice) {
    proyectos.forEach((proyecto, i) => {
        if (i === indice) {
            proyecto.style.display = 'block';
        } else {
            proyecto.style.display = 'none';
        }
    });
}


mostrarProyecto(proyectoActual);


document.getElementById('nextBtn').addEventListener('click', function() {
    proyectoActual = (proyectoActual + 1) % proyectos.length;
    mostrarProyecto(proyectoActual);
});


document.getElementById('backBtn').addEventListener('click', function() {
    proyectoActual = (proyectoActual - 1 + proyectos.length) % proyectos.length;
    mostrarProyecto(proyectoActual);
});
