
class barraTareas {
    constructor() {
        let barra     = HTMLDivElement
        let btnInicio = HTMLDivElement
        let imgIncio  = HTMLImageElement
        
        this.cargarCompoGraph()

    }

    cargarCompoGraph() {
        this.barra     = document.createElement('div')
        this.btnInicio = document.createElement('div')
        this.imgInicio = document.createElement('img')
        
        this.barra.classList.add    ( 'barraTarea')
        this.btnInicio.classList.add('inicio')
        this.imgInicio.classList.add('imgInicio')
        
        this.imgInicio.setAttribute('src','./src/iconos/pc_computer_screen_desktop_icon_131250.ico')
        
        this.btnInicio.appendChild(this.imgInicio)        
        this.barra.appendChild(this.btnInicio)
        document.body.appendChild(this.barra)
        
    }

}