
// funcion para cargar los elementos en la pagina principal
// recibe como parametro el url del html a cargar y el id del del elemento donde lo
// voy a guardar

const cargarTemplate = async (url, idElement) => {
    try {
        const template      = await fetch(url)
        const textoPagina   = await template.text()
        const parser        = new DOMParser();
        const elemento      = parser.parseFromString(textoPagina, 'text/html').getElementById(idElement);
        const scriptReci    = elemento.querySelector('script')
        const scriptAgregar = document.createElement('script')
        const elementoNuevo = document.createElement(elemento.tagName)
        
        
        
        
        scriptAgregar.src = scriptReci.src
        document.head.appendChild(scriptAgregar)
        scriptReci.remove()

        elementoNuevo.innerHTML = elemento.outerHTML
        document.body.appendChild(elementoNuevo)
        
        } catch (error) {
            console.log(error)
            }  
}


// ejemplode carga del login
// 

cargarTemplate('/public/componentes/Login/Login.html', 'login')