
class icono{
    constructor(urlimagen,texto){
        let icono  = HTMLDivElement
        let imagen = HTMLImageElement
        let span  = HTMLSpanElement
        this.cargarCompoGrafico(urlimagen,texto)
    }

    cargarCompoGrafico(urlimagen,texto) {
        this.icono  = document.createElement('div')
        this.imagen = document.createElement('img')
        this.span  = document.createElement('span')
        
        this.imagen.src        = urlimagen
        this.span.textContent = texto


        this.icono.classList.add('icono')
        this.imagen.classList.add('imgIcono')
        this.span.classList.add('texticono')

        this.icono.appendChild(this.imagen)
        this.icono.appendChild(this.span)
        
        
    }

}