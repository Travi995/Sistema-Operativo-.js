
const mostrarForm = () => {
    const elementos = Array.from(document.getElementById('compoCentral').children)
    
    elementos.forEach(element => {
        element.addEventListener('click', () => {
            document.getElementById('formulario').style.display = 'block'
            document.getElementById('imgSesion').style.marginLeft = '5px'
        })   
    });
    
    

}



window.onload = mostrarForm



