let errorVentana = ''

class ventana{
    constructor() {
        let ventana = HTMLDivElement
        let head    = HTMLDivElement
        this.compoGraph()
        this.cargarEventos()
    }

    compoGraph() {
        let elementoFijo = document.createElement('div')

        this.ventana= document.createElement('div')
        this.head   = document.createElement('div')

        this.ventana.classList.add('ventana')
        this.head.classList.add('headVentana')
        elementoFijo.classList.add('iconFijoVentana')

        
        elementoFijo.appendChild(new iconoHeadVentana('./src/iconos/1904666-calculate-close-delete-hide-minimize-minus-remove_122516.ico',  'minimizar').icono)
        elementoFijo.appendChild(new iconoHeadVentana('./src/iconos/maximize_icon_143740.ico', 'maximizar').icono)
        elementoFijo.appendChild(new iconoHeadVentana('./src/iconos/cross-2_90852.ico', 'cerrar').icono)
        
        
        
        this.head.appendChild(elementoFijo)
        this.ventana.appendChild(this.head)
        
    }

    cargarEventos() {
        let botonesVentana = this.head.children
        botonesVentana = Array.from(botonesVentana[0].children)
        
        botonesVentana.forEach(element => {
            element.addEventListener('click', (arg) => {
                this.manejarEventos(arg)
            })
        });
    }

    manejarEventos(arg) {
        let item = arg.target
        
        if (item.tagName == 'IMG')       item = item.parentNode
        else if (item.tagName == 'SPAN') item = item.parentNode

        switch (item.getAttribute('iconId')) {
            
            case 'minimizar':
                alert('toco uno de los tres botones')
                break;
            
            
            case 'maximizar':
                    this.ventana.classList.add('minimizar')
                break;
            
            case 'cerrar':
                    this.ventana.remove()
                break;
            
            


        }

    }



}