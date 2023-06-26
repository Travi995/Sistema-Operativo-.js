
// funcion para cargar los elementos en la pagina principal
// recibe como parametro el url del html a cargar y el id del del elemento donde lo
// voy a guardar

const cargarTemplate = async (url, idElement) => {
    try {
        const template      = await fetch(url)
        const textoPagina   = await template.text()
        const parser        = new DOMParser();
        
        
        const elementoHtml  = parser.parseFromString(textoPagina, 'text/html').getElementById(idElement);
        const scriptReci    = elementoHtml.querySelector('script')
        const elementoCss   = elementoHtml.querySelector('link')
        const scriptAgregar = document.createElement('script')
        const elementoNuevoHtml = document.createElement(elementoHtml.tagName)
           
        scriptAgregar.src = scriptReci.src
        
        document.head.appendChild(elementoCss)
        document.head.appendChild(scriptAgregar)
        scriptReci.remove()

        elementoNuevoHtml.innerHTML = elementoHtml.outerHTML
        document.body.appendChild(elementoNuevoHtml)
        
        } catch (error) {
            console.log(error)
            }  
}

// ejemplode carga del login
// 

window.onload = cargarTemplate('/public/componentes/Login/Login.html', 'login')