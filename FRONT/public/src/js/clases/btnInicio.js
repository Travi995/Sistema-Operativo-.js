let miError = ''
class btnInicio{
    constructor() {
        let btnInicio   = HTMLDivElement
        let imgInicio   = HTMLImageElement
        let desplegable = HTMLDivElement
        let iconoEqui   = HTMLDivElement
        this.cargarCompoGrafico()
        this.menuDesplegable()
        this.cargarEventoDesplegable()
        
    }

    cargarCompoGrafico() {
        this.btnInicio = document.createElement('div')
        this.imgInicio = document.createElement('img')

        this.btnInicio.classList.add('inicio')
        this.imgInicio.classList.add('imgInicio')

        this.btnInicio.setAttribute('iconID','inicio')
        this.imgInicio.setAttribute('src','./src/iconos/pc_computer_screen_desktop_icon_131250.ico')
        
        this.btnInicio.appendChild(this.imgInicio)

        return this.btnInicio
    }

    menuDesplegable() {
        this.desplegable = document.createElement('div')

        this.desplegable.classList.add('inicioDesplegable')
        this.btnInicio.appendChild(this.desplegable)
        
    }
    
    cargarCompoDesplegable() {
        let head      = document.createElement('section')
        let logo      = document.createElement('div')
        this.iconoEqui     = document.createElement('div')
        

        head.setAttribute('id', 'headDesplegable')
        this.iconoEqui.appendChild(new iconoDesplegable('./src/iconos/desktop_icon-icons.com_66537.ico','equipo','Equipo').icono)        
        
        

        head.appendChild(this.iconoEqui)
        
        this.desplegable.appendChild(head)
        this.cargarEventos()
        
    }

    cargarEventoDesplegable() {
        let ejecutado = false
        
        
        this.btnInicio.addEventListener('click', () => {
            
            if (ejecutado == false) {
                this.desplegable.classList.add('show')
                this.cargarCompoDesplegable()
                
            }
            
            ejecutado = true
    
        })

    }

    cargarEventos() {
        this.iconoEqui.addEventListener('click', (arg) => {
            this.manejadorEventos(arg)
        })
    }

     
    manejadorEventos(arg){
        let item = arg.target
        
        
        if (item.tagName == 'IMG')       item = item.parentNode
        else if (item.tagName == 'SPAN') item = item.parentNode

        
        
        switch (item.getAttribute('iconId')) {
            case 'equipo':
                alert('ha tocado el boton de equipo')
                break;
        }
        
    }


}