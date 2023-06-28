
class escritorio {
    cosntructor(compoVisual) {
        this.componente = compoVisual
        this.barra_tareas = ''//instancia de la clase barra de tareas
  
    }

    mostrarEscritorio() {
        document.body.appendChild(this.componente)
    }
    
    mostrarBarraTarea() {
        this.componente.appendChild(this.barra_tareas)
    }

    agregarIcono(icono) {
        this.componente.appendChild(icono)
        
    }

}

