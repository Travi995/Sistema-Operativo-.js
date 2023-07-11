

/*se espera como entrada de datos un array de objetos con las propiedadadesdel sistema de archivo
el json contendra un objeto
ubicacion dentro del sistema de archivos 
nombre del objeto el cual se asumira como nombre de la carpeta 
otra porpiedad del objeto es un array k contendra el contenido de diocha carpeta ya sea archivos y subcarpetas
y cada archivo tendra nombre,extension, contenido,icono*/

/*
si type = 1 carpeta y si type = 2 archivo 
array =[
    {
    type: 1
    ubicacion:'/'(root),
    nombre: 'equipo',
    contenido:[
        {
            type:1,
            ubicacion:'',
            nombre:'',
            contenido:[],};
        {
            type:2,
            ubicacion:'',
            nombre:   '',
            extension:'',
            contenido:[],
            icono: 'url',
        }
        ]
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