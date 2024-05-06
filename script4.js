const materias = {
    fisica: [90,6,3,"fisica"],
    matematicas: [84,8,2,"matematicas"],
    logica: [92,8,4,"logica"],
    quimica: [96,8,4,"quimica"],
    calculo: [91,6,3,"calculo"],
    programacion: [79,7,4,"programacion"],
    biologia: [75,9,2,"biologia"],
    bbdd: [98,9,1,"bbdd"],
    algebra: [100,10,4,"algebra"]
}


// const asistencia = () =>{
//     for(let materia in materias){
//         let asistencias = materias[materia][0];
//         if(asistencias >= 90){
//             console.log(materias[materia][3]);
//             console.log("%c   Aprobado", "color:green");
//         } else {
//             console.log(materias[materia][3]);
//             console.log("%c   Desaprobado", "color:red")
//         }
//     }
// }

// asistencia();

const aprobo = () =>{
        for(let materia in materias){
            let asistencias = materias[materia][0];
            let promedio = materias[materia][1];
            let trabajos = materias[materia][2];

            console.log(materias[materia][3]);
            if(asistencias >= 90){
                console.log("%c   Asistencias en Orden", "color:green");
            } else {
                console.log("%c   Falta de Asistencias", "color:red")
            }

            if(promedio >= 7){
                console.log("%c   Promedio en Orden", "color:green");
            } else {
                console.log("%c   Promedio No Aprobado", "color:red")
            }

            if(trabajos >= 3){
                console.log("%c   Trabajos Practicos en Orden", "color:green");
            } else {
                console.log("%c   Trabajos Practicos no Aprovado", "color:red")
            }
        }
    }

    aprobo();