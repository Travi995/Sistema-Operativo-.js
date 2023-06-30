
class btnInicio{
    constructor() {
        let btnInicio   = HTMLDivElement
        let imgInicio   = HTMLImageElement
        let desplegable = HTMLDivElement
        this.cargarCompoGrafico()
        this.menuDesplegable()
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

   
    


}