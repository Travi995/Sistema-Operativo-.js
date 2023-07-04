
class iconoBT extends icono{
    constructor(urlimagen, texto = '',atributo) {
        super(urlimagen, texto,atributo)
        this.icono.classList.add('iconoBT')
        
    }
    
}

class iconoDesplegable extends icono{
    constructor(urlimagen, texto = '',atributo) {
        super(urlimagen, texto,atributo)
        this.icono.classList.add('iconoDesplegable')
        
    }
}
