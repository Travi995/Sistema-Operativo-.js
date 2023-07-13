class archivo {
    constructor( padre = null , id , icono , nombre,  extension , contenido, ) {
        
        this.padre     = padre
        this.id        = id
        this.nombre    = nombre
        this.icono     = icono
        this.extension = extension
        this.contenido = contenido
        
        let visual     = HTMLDivElement
        this.compoGraph()
    }

    cambiarNombre(newNombre) {
        this.nombre =newNombre
    }

    compoGraph() {
        this.visual = document.createElement('div')

        this.icono.span = this.nombre
        
        this.visual.appendChild(this.icono)

    }

    cargarEventos() {
        this.visual.addEventListener('click', (arg) => {
            this.manejarEventos(arg)
        })
    }

    manejarEventos(arg) {
        let item = arg.target

        alert('usted ha tocado un archivo')


    }
}