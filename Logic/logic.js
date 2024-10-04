///NAVBAR

function showSideBar(){

    //evitar el reload de la pagina
    event.preventDefault();
    const sideBar= document.querySelector('.sideBar')
    sideBar.style.display='flex'
}

function hideSideBar(){
    event.preventDefault();
    const sideBar= document.querySelector('.sideBar')
    sideBar.style.display='none'
}

function hideSideBarAndRedirect(){
    
    const sideBar= document.querySelector('.sideBar')
    sideBar.style.display='none'
}





/////ZONA PROYECTOS
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



///Copiar Mail
function copiarPortapapeles( text) {
  event.preventDefault(); 
  navigator.clipboard.writeText(text)

  const icon=document.getElementById("checkmark");
  icon.style.color="green";
   
  setTimeout(() => {
    icon.style.color = "";
  }, 1000);
}
