
const mostrarForm = () => {
    const elementos = Array.from(document.getElementById('compoCentral').children)
    
    elementos.forEach(element => {
        element.addEventListener('click', () => {
            document.getElementById('formulario').style.display = 'block'
            
        })   
    });
    
//    esto para eliminar el layout de login en cuestion  
    document.getElementById('enviar').addEventListener('click', () => {
        document.getElementById('login').style.display = 'none'
    })
}



window.onload = mostrarForm



