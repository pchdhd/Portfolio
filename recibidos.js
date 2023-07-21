const email = document.getElementById("email")
const motivo = document.getElementById("motivo")
const nombreUsuario = document.getElementById("nombreUsuario")
const contraseña = document.getElementById("contraseña")
const logoutContainer = document.getElementById("logoutContainer") 

fetch('/recibidos.json')
  .then((response) => response.json())
  .then((json) => {
    comentarios = json
    return comentarios  
  })


  const ingresarDatos = () =>{
    let datos
    if (email.value != "" && motivo.value !=""){
    datos = {
        email: email.value,
        motivo: motivo.value
    }
    comentarios.push(datos)
    console.log(comentarios)
   }
   else{
    alert("No hay datos o estan incompletos.")
   }   
    }

    const loguear = ()=>{
      if(nombreUsuario.value === "1234admin" && contraseña.value === "12345678"){
        logoutContainer.innerHTML = `` 
        comentarios.forEach((comentario)=>{
  const  {email, motivo} = comentario
  logoutContainer.innerHTML += `<div><h5>Email: ${email}</h5><p>Motivo de contacto${motivo}</p></div>` 
})
      }
      else{
        alert("No eres el administrador")
      }
    }
