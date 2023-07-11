class ventanaExploradorArchivos extends ventana{
    constructor() {
        super()
        this.componenteGraphEquipo()

    }

    componenteGraphEquipo() {
        let directorioSuperior = document.createElement('section')
        let cuerpoVentana      = document.createElement('div')

        directorioSuperior.classList.add('headDirectorio')
        cuerpoVentana.classList.add('cuerpoVentana')

        this.ventana.appendChild(directorioSuperior)
        this.ventana.appendChild(cuerpoVentana)

    }

}