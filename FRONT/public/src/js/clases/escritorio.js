let exploradorGeneral = ''

class desktop{
    constructor(datosServer) {
        this.escritorio = HTMLDivElement
        this.datosServer = datosServer
        this.exploradorArchivos = new directorio()
        this.cargarCompoGraph()
        this.agruparElementos()
        
    }

    cargarCompoGraph() {
        this.escritorio = document.createElement('div')
        this.escritorio.classList.add('escritorio')
        this.escritorio.setAttribute('id', 'escritorio')
        document.body.appendChild(this.escritorio)     
    }

    agruparElementos() {

        let elemento
        let existe = false
        let nodoExistente
        let arrayNodos = []
    
        // exploradorGeneral = this.exploradorArchivos
          
        this.datosServer.forEach(element => {
          /*caminar el arbol para encontrar si el padre del elemento existe */
          while (this.exploradorArchivos.raiz.nodoSig != null) {
            
            this.exploradorArchivos.avanzarNodo()
            
            if (element.nodoPadre == this.exploradorArchivos.raiz.idNodo) {
              existe = true
              break
            }
          }
          /* aki me kedo con el nodo sea el nodo raiz  o cualkiera*/ 
          nodoExistente = this.exploradorArchivos.raiz
          
          /*si existe el nodo pues procedo de la siguiente manera */
          if (existe === true) {
            
            /*verifico k tipo de elemento es si 1 o 2  */
            switch (element.type) {
              
              case '1':
                /*si  es 1 es una carpeta por tanto creo la carpeta*/
                elemento = new carpeta(element.nodoPadre, element.id,
                  new iconExploradorArchivo('./src/iconos/Archivos_25593.ico', element.id),
                  element.nombre)
                
                /*y despues agrego la carpeta al array de carpetas del nodo*/
                nodoExistente.agregarCarpeta(elemento)
    
                /*agrego el nodo al array de nodos como prueba*/
                arrayNodos.push(nodoExistente)
                break;
              
              case '2':
                  /*creo el archivo */
                elemento = new archivo(element.nodoPadre, element.id,
                  new iconExploradorArchivo('./src/iconos/archivo.ico', element.id),
                  element.nombre, element.extension, element.contenido)
                
                /*agregeo el archvio al array dea archivos del nodo */
                nodoExistente.agregarArchivo(elemento)
                break;
            }
          } else {
            
            /*si no existe e nodo*/
            /*verifico k el nodo en el k estoy sea el nodo raiz del arbol por su id*/
            if (this.exploradorArchivos.raiz.idNodo == 'raiz') {
              /*si estoy en el nodo raiz del arbol creo otro nodo */
              nodoExistente = new nodo(element.nodoPadre, element.id)
              
              /*annado el nodo al arbol */
              this.exploradorArchivos.raiz.nodoSiguiente = nodoExistente
              
                /*y nuevamente agrego el nodo al array de nodos */
              arrayNodos.push(nodoExistente)
    
            } else {
              
              /*creo un nodo nuevo en el k el padre es el nodo en el k estoy  */
              nodoExistente.raiz.nodoSig = new nodo(nodoExistente.raiz.idNodo, element.id)
    
              nodoExistente = nodoExistente.raiz.nodoSig
              arrayNodos.push(nodoExistente)
            }
            
            
            console.log('ahi se ha mostrado el nodo')
            
    
            switch (element.type) {
              
              case '1':
    
                elemento = new carpeta(element.nodoPadre, element.id,
                  new iconExploradorArchivo('./src/iconos/Archivos_25593.ico', element.id),
                  element.nombre)
                
                nodoExistente.agregarCarpeta(elemento)
                arrayNodos.push(nodoExistente)
                break;
              
              case '2':
    
                elemento = new archivo(element.nodoPadre, element.id,
                  new iconExploradorArchivo('./src/iconos/archivo.ico', element.id),
                  element.nombre, element.extension, element.contenido)
                
                nodoExistente.agregarArchivo(elemento)
                break;
              
            }
    
          }
          exploradorGeneral = arrayNodos
    
        })
        
      }


}