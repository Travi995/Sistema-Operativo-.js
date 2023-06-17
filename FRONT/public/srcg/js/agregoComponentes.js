
// funcion para cargar los elementos en la pagina principal
// recibe como parametro el url del html a cargar y el id del del elemento donde lo
// voy a guardar
const cargarTemplate =async(url, idElement) => {
    const template = await fetch(url)
    const elemento = await template.text()
    
    document.getElementById(idElement).innerHTML = elemento
}

// ejemplode carga del login
cargarTemplate('/FRONT/public/componentes/Login/Login.html','login')