
class btnInicio{
    constructor() {
        let btnInicio = HTMLDivElement
        let imgInicio = HTMLImageElement
        this.cargarCompoGrafico()
        this.cargarEventos()
    }

    cargarCompoGrafico() {
        this.btnInicio = document.createElement('div')
        this.imgInicio = document.createElement('img')

        this.btnInicio.classList.add('inicio')
        this.imgInicio.classList.add('imgInicio')

        this.imgInicio.setAttribute('src','./src/iconos/pc_computer_screen_desktop_icon_131250.ico')
        
        this.btnInicio.appendChild(this.imgInicio)

        return this.btnInicio
    }

    cargarEventos() {
        this.btnInicio.addEventListener('click', (arg) => {
            alert('ha tocado el boton de inicio')
        })
    }


}