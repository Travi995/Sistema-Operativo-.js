
class nodo {
    constructor( padre = null ,idNodo ='raiz') {
        this.padre     = padre
        this.idNodo    = idNodo
        this.idElements= []
        this.archivos  = []
        this.carpetas  = []
        this.nodoSiguiente = null
    }

    agregarArchivo(archivo) {
        this.idElements.push(archivo.id)
        this.archivos.push(archivo)
    }
    agregarCarpeta(carpeta) {
        this.idElements.push(carpeta.id)
        this.carpetas.push(carpeta)
    }

    /*cargarEventos() {
        this.carpetas.forEach(element => {
            element.addEventListener('click', () => {
                
            })
        });
    }*/
}

class directorio{
    constructor() {
        
        this.raiz = new nodo()
        let seccionElementos = HTMLElement
        // this.cargarComponenteGRaph()

    }
    
    agregarNodo(nuevoNodo) {
        if (this.raiz.nodoSiguiente == null) {
            this.raiz.nodoSiguiente = nuevoNodo
        } else {
            alert('el nodo ya tiene un hijo,clase directorio metodo agregar nodo')
        }
    }

    avanzarNodo() {
        this.raiz = this.raiz.nodoSiguiente
    }


    cargarComponenteGRaph() {
        this.seccionElementos = document.createElement('section')
        // let arrayElementos   = []
            
        this.seccionElementos.classList.add('showDirectorio')
        
        this.raiz.archivos.forEach(element => {
            this.seccionElementos.appendChild(element)
        });

        this.raiz.carpetas.forEach(element => {
            this.seccionElementos.appendChild(element.visual)
        });
        
        // arrayElementos = Array.from(this.seccionElementos.childNodes)

        

    }

}