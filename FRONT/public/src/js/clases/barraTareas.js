
class barraTareas {
    constructor() {
        let barra     = HTMLDivElement
        
        
        
        this.cargarCompoGraph()

    }

    cargarCompoGraph() {
        this.barra     = document.createElement('div')
        
        
        
        this.barra.classList.add   ( 'barraTarea')
        
                
        this.barra.appendChild(new btnInicio().btnInicio)
        document.body.appendChild(this.barra)
        
    }

}