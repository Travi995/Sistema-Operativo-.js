class carpeta {
    constructor( padre = null, id, icon , nombre= '.' ) {
        this.padre     = padre
        this.id        = id
        this.icono     = icon
        this.nombre    = nombre
    
        let visual     = HTMLDivElement
        this.compoGraph()
        this.cargarEventos()
        
    }

    cambiarNombre(newNombre) {
        
        this.nombre = newNombre
    }
    
    
    compoGraph() {
        this.visual = document.createElement('div')

        this.icono.span = this.nombre

        this.visual.appendChild(this.icono)

    }

    cargarEventos() {
        this.visual.addEventListener('click', (arg) => {
            this.visual.classList.add('seleccionado')
        })
        
        this.visual.addEventListener('blur', (arg) => {
            this.visual.classList.remove('seleccionado')
        })

        this.visual.addEventListener('dblclick', (arg) => {
            this.manejarEventos(arg)
        })
    }
    /*cojo eleelmento averiguo el nodo en el k esta y de ahi cojo y accedo a nodoSiguiente y renderizo*/ 
    
}