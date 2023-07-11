let errorVentana = ''
let dragTerminado = ''

class ventana {
    constructor() {
        let ventana = HTMLDivElement
        let head = HTMLDivElement
        this.compoGraph()
        this.cargarEventos()
    }

    compoGraph() {
        let elementoFijo = document.createElement('div')

        this.ventana = document.createElement('div')
        this.head = document.createElement('div')

        this.ventana.classList.add('ventana')
        this.head.classList.add('headVentana')
        elementoFijo.classList.add('iconFijoVentana')

        this.ventana.setAttribute('draggable', 'true')

        elementoFijo.appendChild(new iconoHeadVentana('./src/iconos/1904666-calculate-close-delete-hide-minimize-minus-remove_122516.ico', 'minimizar').icono)
        elementoFijo.appendChild(new iconoHeadVentana('./src/iconos/maximize_icon_143740.ico', 'maximizar').icono)
        elementoFijo.appendChild(new iconoHeadVentana('./src/iconos/cross-2_90852.ico', 'cerrar').icono)



        this.head.appendChild(elementoFijo)
        this.ventana.appendChild(this.head)

    }

    cargarEventos() {
        let botonesVentana = this.head.children
        let posIniX 
        let posIniY
        let posFinX
        let posFinY


        botonesVentana = Array.from(botonesVentana[0].children)

        botonesVentana.forEach(element => {
            element.addEventListener('click', (arg) => {
                this.manejarEventos(arg)
            })
        });

        /*drag and drop de la ventana*/
        this.ventana.addEventListener('dragstart', (event) => {
            
            posIniX = event.offsetX
            posIniY = event.offsetY
            
            document.getElementsByClassName('barraTarea')[0].classList.add('transparente')
                  
        })

        this.ventana.addEventListener('dragover', (event) => {
            event.preventDefault()
            //  console.log('dragover se esta ejecutando')
        })
        this.ventana.addEventListener('dragend', (event) => {
            event.preventDefault()
           
            posFinX = event.clientX
            posFinY = event.clientY
            
            let coordenadaX = posFinX - posIniX
            let coordenadaY = posFinY - posIniY
            
            this.ventana.style.left = `${coordenadaX}px`;
            this.ventana.style.top = `${coordenadaY}px`;
            document.getElementsByClassName('barraTarea')[0].classList.remove('transparente')

        })


    }

    manejarEventos(arg) {
        let item = arg.target

        if (item.tagName == 'IMG') item = item.parentNode
        else if (item.tagName == 'SPAN') item = item.parentNode

        switch (item.getAttribute('iconId')) {

            case 'minimizar':
                this.ventana.classList.add('minimizar')
                break;


            case 'maximizar':
                alert('deshabilitado')
                break;

            case 'cerrar':
                this.ventana.remove()
                break;


        }

    }



}