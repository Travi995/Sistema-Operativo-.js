

/*se espera como entrada de datos un array de objetos con las propiedadadesdel sistema de archivo
el json contendra un objeto
ubicacion dentro del sistema de archivos 
nombre del objeto el cual se asumira como nombre de la carpeta 
otra porpiedad del objeto es un array k contendra el contenido de diocha carpeta ya sea archivos y subcarpetas
y cada archivo tendra nombre,extension, contenido,icono*/
/*el nodo padre de cada objeto es el id de cada nodo padre*/

/*
si type = 1 carpeta y si type = 2 archivo 
objects =[
        {
            type:1,
            nodoPadre: '',  
            id    :    '',
            icono :    '',
            nombre:    '',
            nodoSig: nodo,
        };
        {
            type:2,
            nodoPadre:'',
            id    :   '',
            nombre:   '',
            extension:'',
            contenido:[],
            icono:    '',
        }
    ]

*/

const entradaDatos = () => {
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