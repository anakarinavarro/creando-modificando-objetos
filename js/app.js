
class Consultorio{
    constructor (nombre, pacientes){
        this.nombre    = nombre
        this.pacientes = pacientes
    };
    nuevosPacientes(agregarNuevoPaciente){
        this.pacientes.push(agregarNuevoPaciente);
    };

    buscarPacientePorNombre(nombre){
        return this.pacientes.find(Paciente =>{
            return Paciente.nombre == nombre
        })
    };
    
};

class Paciente{
    #diagnostico;
    #rut;
    constructor(nombre, apellido, edad, rut, diagnostico){
        this.nombre       = nombre
        this.apellido     = apellido
        this.edad         = edad
        this.#rut         = rut
        this.#diagnostico = diagnostico
    };
    get nombreCompleto(){
        return   this.nombre + " " + this.apellido 
    };
    set nombreCompleto(nuevoNombreCompleto){
        this.nombre   = nuevoNombreCompleto.split(" ")[0];
        this.apellido = nuevoNombreCompleto.split(" ")[1];

    }
   
};


const nuevoPaciente  = new Paciente("Ana", "Navarro", 37, "15900999-8", "Loca");
const nuevoPaciente2 = new Paciente("pablo", "Adonis", 42, "12345678-9","Diabetes");
const nuevoPaciente3 = new Paciente("Juan", "Perez", 12, "15900999-9", "Bipolaridad");


const consultorio = new Consultorio("Nombre", [nuevoPaciente, nuevoPaciente2]);
consultorio.nuevosPacientes(nuevoPaciente3);

console.log(consultorio.pacientes[0].nombreCompleto);
console.log(consultorio.pacientes);
console.log(consultorio.buscarPacientePorNombre("Ana"));

