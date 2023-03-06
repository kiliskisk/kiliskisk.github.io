const btnAceptar = document.getElementById('btn-aceptar');
const btnRechazar = document.getElementById('btn-rechazar');
const aviso = document.getElementById('aviso');
const fondoAviso = document.getElementById('fondo_aviso');


if(!localStorage.getItem('cookies-aceptadas')){
      aviso.classList.add('activo');
      fondoAviso.classList.add('activo');
}
      
btnAceptar.addEventListener('click', function(){
      var fecha = new Date();
      aviso.classList.remove('activo');
      fondoAviso.classList.remove('activo');
      localStorage.setItem('cookies-aceptadas' , true);
      localStorage.setItem('fecha-ingreso',fecha );
});


btnRechazar.addEventListener('click', function(){
      aviso.classList.remove('activo');
      fondoAviso.classList.remove('activo');
      localStorage.setItem('cookies-aceptadas' , false);
     
});
