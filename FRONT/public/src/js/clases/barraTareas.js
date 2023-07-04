let tryGlobal = ''

class barraTareas {
    constructor() {
        let barra = HTMLDivElement
        let conjuntoIconos = HTMLDivElement
        
        this.cargarCompoGraph()
        this.cargarEventos()
    }

    cargarCompoGraph() {
        this.barra = document.createElement('div')
        this.conjuntoIconos = document.createElement('div')
    
        this.barra.classList.add('barraTarea')
        this.conjuntoIconos.classList.add('conjuntoIconos')
                    
        this.barra.appendChild(new btnInicio().btnInicio)
        this.conjuntoIconos.appendChild(new iconoBT('./src/iconos/Desktop_folder_35272.ico','explorador').icono)
        this.barra.appendChild(this.conjuntoIconos)
        document.body.appendChild(this.barra)
        
    }
    cargarEventos() {
        this.barra.addEventListener('click', (arg) => {
            this.manejarEventos(arg)
        })
    }

    manejarEventos(arg) {
        let item = arg.target
        
        if (item.tagName == 'IMG') item = item.parentNode
        
        switch (item.getAttribute('iconId')) {
            
            case 'explorador':
                alert('ha tocado el explorador de archivos')
                break;
            
            
        }
        

    }
    

}