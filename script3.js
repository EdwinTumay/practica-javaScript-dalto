// tercer ejercicio de dalto creando clases para celulares
// primera parte
class Celular{
    constructor(color,peso,tamanho,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.tamanho = tamanho;
        this.resolicionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    presionarBotonEncendido(){
        if(this.encendido == false){
            alert("Celular Prendido");
            this.encendio = true;
        } else {
            alert("EL celular ya está encendido");
            this.encendido = false;
        }
    }
   
    reiniciar(){
        if(this.encendido == true){
            alert("reiniciando celular");
        } else {
            alert("el celular está apagado");
        }
    }

    tomarFotos(){
        alert(`foto tomada en una resolución de: ${this.resolicionDeCamara}`);
    }
    grabarVideo(){
        alert(`gabando video en ${this.resolicionDeCamara}`);
    }
    mobileInfo(){
        return ` 
        color: <b>${this.color}</b><br> 
        Peso: <b>${this.peso}</b><br> 
        Tamaño: <b>${this.tamanho}</b><br> 
        Resolución de Video: <b>${this.resolicionDeCamara}</b><br> 
        Memoria Ram: <b>${this.memoriaRam}</b><br> 
        `;
    }
}

//segunda parte

class CelularAltaGama extends Celular{
    constructor(color,peso,tamanho,rdc,ram,rdce){
        super(color,peso,tamanho,rdc,ram);
        this.resolucionDeCamaraExtra = rdce;
    }
    grabarVideoLento(){
        alert("estas grabando en camara lenta");
    }
    reconocimientoFacial(){
        alert("vamos a iniciar un reconocimiento facial");
    }
    infoAltaGama(){
        return this.mobileInfo() + ` Resolución de Camara Extra ${this.resolucionDeCamaraExtra}`;
    }
}

//primera oarte
// const celular1 = new Celular("rojo", "150gr", "5'", "hd", "1GB");
// const celular2 = new Celular("negro", "155gr", "5.4'", "full hd", "2GB");
// const celular3 = new Celular("blanco", "160gr", "5.9'", "full hd", "2GB");

// celular1.presionarBotonEncendido();
// celular1.tomarFotos();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.presionarBotonEncendido();


// document.write(`
// ${celular1.mobileInfo()} <br>
// ${celular2.mobileInfo()} <br>
// ${celular3.mobileInfo()} <br>
// `);

// segunda parte
// const celular1 = new CelularAltaGama("rojo","130gr", "5.2'","4K","3GB","Full hd");
// const celular2 = new CelularAltaGama("negro","142gr","6'","4K","4Gb","hd"); 

// document.write(`
//     ${celular1.infoAltaGama()} <br><br>
//     ${celular2.infoAltaGama()} <br>
// `);

//tercera parte
class App {
    constructor(descargas,puntuacion,peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    abrir(){
        if(this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            alert("app iniciada");
        }
    }
    cerrar(){
        if(this.iniciada == true && this.instalada == true){
            this.iniciada = false;
            alert("app cerrada");
        }
    }
    instalar(){
        if(this.instalada == false){
            this.instalada = true;
            alert("app instalada correctamente");
        }
    }
    desinstalar(){
        if(this.instalada == true){
            this.instalada = false;
            alert("app desinstalada correctamente");
        }
    }
    appInfo(){
        return`
        Descargas: <b>${this.descargas}</b><br>
        Puntuación: <b>${this.puntuacion}</b><br>
        Peso: <b>${this.peso}</b><br>
        `
    }
}

const app = new App ("16.000","5 Estrellas","900mb");
const app2 = new App ("1.000","4 Estrellas","400mb");
const app3 = new App ("6.000","4.5 Estrellas","100mb");
const app4 = new App ("23.000","4.8 Estrellas","1gb");
const app5 = new App ("900","5 Estrellas","250mb");
const app6 = new App ("17","3.7 Estrellas","530mb");
const app7 = new App ("42.981","2.9 Estrellas","723mb");
// app.instalar();
// app.abrir();
// app.cerrar();
// app.desinstalar();
document.write(`
    ${app.appInfo()} <br>
    ${app2.appInfo()} <br>
    ${app3.appInfo()} <br>
    ${app4.appInfo()} <br>
    ${app5.appInfo()} <br>
    ${app6.appInfo()} <br>
    ${app7.appInfo()} <br>
    `);