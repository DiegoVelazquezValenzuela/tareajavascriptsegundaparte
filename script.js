    //Agrega un mensaje al hacer click en el boton
    const miBoton = document.querySelector("#boton");
    const miDiv = document.querySelector("#div");

    miBoton.addEventListener("click", function() {
        const mensaje = "¡Hola!";
      miDiv.innerHTML = mensaje;
    });
    
    //cambia de color del fondo del elemento div al pasar el cursor
    function cambiarColor(event) {
        miDiv.style.color = 'red';
      }
      
      function restaurarColor(event) {
        miDiv.style.color = 'black';
      }
      
      miDiv.addEventListener('mouseover', cambiarColor);
      miDiv.addEventListener('mouseout', restaurarColor);
   
    //cambia el mensaje al hacer doble click
    miDiv.addEventListener('dblclick', cambiarContenido);
      function cambiarContenido() {
        miDiv.textContent = '¡Que tengas lindo día!';
      }
      
    //aumenta la fuenta al precionar la letra "espacio"
    document.addEventListener('keydown', aumentarFuente);
    function aumentarFuente(event) {
        if (event.code === 'Space') {
          const miDiv = document.getElementById('div');
          const estilo = getComputedStyle(miDiv);
          const fontSize = parseInt(estilo.fontSize);
          miDiv.style.fontSize = `${fontSize + 1}px`;
        }
      }
      
      //cambia la imagen de fondo al cargar la pagina 
      window.addEventListener('load', function () {
        const cuerpo = document.querySelector('body');
        const numeroAleatorio = Math.floor(Math.random() * 1000);
        cuerpo.style.backgroundImage = `url("https://picsum.photos/id/${numeroAleatorio}/1920/1080")`;;})
    
      
      