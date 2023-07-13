

window.onload = () => {
    new sistemaOperativo()
    
}

let ejemploObjetos = [
  {
    type:        1,
    nodoPadre: 'raiz',
    id:   'equipo',
    icono:    'icono1',
    nombre: 'Carpeta1',
    nodoSig: 'elementos',
  },
  {
    type: 1,
    nodoPadre: 'equipo',
    id: 'musica',
    icono: 'icono2',
    nombre: 'Carpeta2',
    nodoSig: null,
  },
  {
    type: 1,
    nodoPadre: 'B',
    id: 'carpeta3',
    icono: 'icono3',
    nombre: 'Carpeta3',
    nodoSig: '',
  },
  {
    type: 2,
    nodoPadre: 'A',
    id: 'archivo1',
    nombre: 'Archivo1',
    extension: 'txt',
    contenido: ['contenido1', 'contenido2'],
    icono: 'icono4',
  },
  {
    type: 2,
    nodoPadre: 'A',
    id: 'archivo2',
    nombre: 'Archivo2',
    extension: 'jpg',
    contenido: ['contenido3', 'contenido4'],
    icono: 'icono5',
  },
  {
    type: 2,
    nodoPadre: 'B',
    id: 'archivo3',
    nombre: 'Archivo3',
    extension: 'pdf',
    contenido: ['contenido5', 'contenido6'],
    icono: 'icono6',
  },
  {
    type: 2,
    nodoPadre: 'B',
    id: 'archivo4',
    nombre: 'Archivo4',
    extension: 'mp3',
    contenido: ['contenido7', 'contenido8'],
    icono: 'icono7',
  },
  {
    type: 2,
    nodoPadre: 'B',
    id: 'archivo5',
    nombre: 'Archivo5',
    extension: 'png',
    contenido: ['contenido9', 'contenido10'],
    icono: 'icono8',
  }
];


class sistemaOperativo {
  constructor() {
    
    // let datosServer  = entradaDatos()
    
    this.datosServer = ejemploObjetos
    
    let gestorArchivos = new desktop(this.datosServer).exploradorArchivos
    new barraTareas()
    

  }
      
  entradaDatos() {
        
    fetch('https://randomuser.me/api/')      
      .then(Response => Response.json())      
      .then(data => {         
        console.log(data)       
        return data     
      })
            
      .catch(error => {        
        console.error(error);    
      })         
  }

  

  
  



} 

