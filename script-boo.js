
// clases con contructor objetos y atributos
class Animal {
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `soy ${this.especie}, tengo ${this.edad} y soy de color ${this.color}`;
    } 
    //metodos this va por dentro de la clase
        verInfo(){
             document.write(this.info + "<br>");
    }
}


// herencia  clases de herencia hay da los otros 3 valores especie edad color y le agregamos raza y ladrar
class Perro extends Animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = raza;
    }
     
    //  static ladrar(){
    //     alert("WuaW");   el static funciona aun si no se ha creado la clase perro 
    ladrar(){
        alert("WuaW");
    }
}

class Gato extends Animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = null;
    }
    //set  modificar o definir
    set setRaza(newName){
        this.raza = newName;
    }
    // get obtener los valores
    get getRaza(){
        return this.raza;
    }
}




const perro = new Perro("perro", 5, "café", "doberman");
const gato = new Gato("gato", 4, "naranja", "criollo");
const pajaro = new Animal("pajaro", 1, "verde");

gato.setRaza = "pedro";

// perro.verInfo();
// gato.verInfo();
// pajaro.verInfo();