let miError = ''
class btnInicio{
    constructor() {
        let btnInicio   = HTMLDivElement
        let imgInicio   = HTMLImageElement
        let desplegable = HTMLDivElement
        this.cargarCompoGrafico()
        this.menuDesplegable()
        this.cargarEvento()
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
        let iconoEqui = document.createElement('div')
        let logo      = document.createElement('div')

        head.setAttribute('id', 'headDesplegable')
        iconoEqui.appendChild(new iconoDesplegable('./src/iconos/desktop_icon-icons.com_66537.ico','Equipo','equipo').icono)        

        head.appendChild(iconoEqui)
        miError =head
        this.desplegable.appendChild(head)
        
    }

    cargarEvento() {
        let ejecutado = false
        
        this.btnInicio.addEventListener('click', () => {
            
            if (ejecutado == false) {
                this.desplegable.classList.add('show')
                this.cargarCompoDesplegable()
            }
            
            ejecutado = true

            this.desplegable.addEventListener('click', (arg) => {
                this.manejadorEventos(arg)
            })
        })
    }

   

    
    manejadorEventos(arg){
        
        
    }


}