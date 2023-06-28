
class escritorio {
    cosntructor(compoVisual) {
        this.componentes = compoVisual
        this.barra_tareas = ''//instancia de la clase barra de tareas
        
        
    }

}

/*
tipo 1: div
tipo 2: boton
tipo 3: span
tipo 4: imagen
*/

componenteVisualEscritorio =[ {
        type: 1,
        id  : 'escritorio'
    },
    {
        type        : 4      ,
        id         : 'fondo',
        width       : '100%' ,
        height      : '100%' ,
        url         : './../../imagenes/PAFF_112718_touchmemory-1024x705-transformed (1).jpeg'     ,
        visibilidad : '2'
    }
    
    
]

//problema es cuando tengo k hacer mas de un div k no se como anadir 
//los elementos dentro del padre correcto

/*esta funcion recibe un array de objetos con las instruciones para retornar un array
el objeto echo y sus hijos */
const construirElementosVisuales = (elemento) => {
    let componenteCompleto  = 
    elemento.forEach(element => {
        switch (element.type) {
            
            case 1:
                
                let div = document.createElement('div')
                try {
                    div.id = element.id  
                    if (element.class) {
                        div.classList.add(element.class)
                    }
                    div.style.border = '2px dashed black'
                    componenteCompleto = div 
                    

                } catch (error) {
                    console.log('el error es en el div')
                    console.log(error)
                }
                
                break;
            
            case 2:
                
                let boton = document.createElement('button')
                try {
                    if (element.id) {
                        boton.id = element.id
                    }
                    boton.style.width  = element.width
                    boton.style.height = element.height
                    boton.setAttribute('value', element.texto)
                    if (element.class) {
                        boton.classList.add(element.class)
                    }
                    componenteCompleto.appendChild(boton)
                } catch (error) {
                    console.log('el error es en el boton')
                    console.log(error)
                }
                
                break;
            
            case 3:
                
                let span = document.createElement('span')
                try {
                    if (element.id) {
                        span.id = element.id
                    }
                    span.textContent    = element.text
                    span.style.fontSize = element.tamanno
                    if (element.class) {
                        span.classList.add(element.class)
                    }
                    componenteCompleto.appendChild(span)
                } catch (error) {
                    console.log('el error es en el span')
                    console.log(error)
                }
                
                break;
            
            case 4:
                let img = document.createElement('img')
                try {
                    if (element.id) {
                        img.id = element.id
                    }
                    img.src = element.url  
                    img.style.width  = element.width
                    img.style.height = element.height
                    img.style.zIndex = element.visibilidad
                    if (element.class) {
                        img.classList.add(element.class)
                    }
                    componenteCompleto.appendChild(img)
                    
                } catch (error) {
                    console.log('el error es en la imagen')
                    console.log(error)
                }
                break;

                
        }
        
    });

    return componenteCompleto
}
