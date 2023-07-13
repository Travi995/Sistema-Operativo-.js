
class iconoBT extends icono{
    constructor(urlimagen,atributo, texto = '') {
        super(urlimagen, atributo, texto)
        this.icono.classList.add('iconoBT')
        
    }
    
}

class iconoDesplegable extends icono{
    constructor(urlimagen, atributo, texto = '') {
        super(urlimagen, texto,atributo)
        this.icono.classList.add('iconoDesplegable')
        
        
    }
}

class iconoHeadVentana extends icono{
    constructor(urlimagen, atributo, texto = '') {
        super(urlimagen, atributo,texto)
        this.icono.classList.add('iconoHeadVentana')
        
    }
}


class iconExploradorArchivo extends icono{
    constructor(urlimagen, atributo, texto = '') {
        super(urlimagen, atributo, texto)
        this.icono.classList.add('iconExplorer')
    }
}