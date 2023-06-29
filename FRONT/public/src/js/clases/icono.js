
class icono{
    constructor(urlimagen,texto){
        let icono  = HTMLDivElement
        let imagen = HTMLImageElement
        let texto  = HTMLSpanElement
        this.cargarCompoGrafico(urlimagen,texto)
    }

    cargarCompoGrafico(urlimagen, texto) {
        this.icono  = document.createElement('div')
        this.imagen = document.createElement('img')
        this.texto  = document.createElement('span')
        
        this.imagen.src        = urlimagen
        this.texto.textContent = texto


        this.icono.classList.add('icono')
        this.imagen.classList.add('imgIcono')
        this.texto.classList.add('texticono')

        this.icono.appendChild(this.imagen)
        this.icono.appendChild(this.texto)
        
        return this.icono
    }

}