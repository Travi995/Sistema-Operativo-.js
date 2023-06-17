
const seleccion = () => {
    let iconos = Array.from(document.getElementsByClassName('iconEscritorio'))
    
    iconos.forEach(element => {
        element.addEventListener('click', () => {
            try {
                document.querySelector('.seleccionado').classList.remove('seleccionado')
            }
            catch(error){'ha habido un error'}

            element.classList.add('seleccionado')
        })
        element.addEventListener('dblclick', () => {
            element.style.backgroundColor = 'red'
        })
    });

}

// esta funcion recibe  como parametro un objeto literal con el icono y el texto
const crearIcono = (arg) => {
    const clon = document.querySelector('.iconEscritorio').cloneNode(true)
    
    try {
        clon.querySelector('.iconImage') = arg.icono
        clon.querySelector('.iconText') =  arg.texto
    }catch(error){'no se pudo crear el elemento'}

}


window.onload = seleccion