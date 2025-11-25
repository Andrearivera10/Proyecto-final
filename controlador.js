
let boton=document.getElementById("boton")
boton.addEventListener("click",function(evento){
    evento.preventDefault()

    let cajausuario=document.getElementById("cajausuario")
    let cajacorreo=document.getElementById("cajacorreo")
    let cajaciudad=document.getElementById("cajaciudad")
    let cajatelefono=document.getElementById("cajatelefono")
    let cajacontraseña=document.getElementById("cajacontraseña")

    let datosDelFormulario={
        usuario:cajaUsuario.value,
        correo:cajaCorreo.value,
        ciudad:cajaCiudad.value,
        telefono:cajaTelefono.value,
        contraseña:cajaContraseña.value,
    }

   Swal.fire({
   title: "Bienvenido",
   text: "Has sido registrado",
   icon: "success"
});
})