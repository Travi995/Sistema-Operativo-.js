

class desktop{
    constructor() {
        let escritorio = HTMLDivElement
        this.cargarCompoGraph()
        
    }

    cargarCompoGraph() {
        this.escritorio = document.createElement('div')
        this.escritorio.classList.add('escritorio')
        this.escritorio.setAttribute('id', 'escritorio')
        document.body.appendChild(this.escritorio)     
    }

    cargarEventos() {
        console.log('algo')
    }


}