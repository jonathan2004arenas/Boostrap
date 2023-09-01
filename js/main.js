function saludo() {
    alert("Wenas Wenas")
}

// SI SE UTILIZA PARA MENCIONAR UNA VARIABLE LA ETIQUETA VAR ESTA LO QUE HACE ES SALIRSE DE LA FUNCION PARA MENCIONAR AQUELLA VARIABLE EN TODO LADO

function suma() {
    alert("Algoritmo que sumara 2 valores ingresados");
    // DECLARAMOS PRIMERO LAS VARIABLES AL PRINCIPIO
    let A = 0;
    let B = 0;
    let S = 0;

    // EL PROMPT ES 
    // SOLICITAMOS LOS VALORES A SUMAR
    A = parseInt(prompt("Por favor ingrese el primer valor a sumar"));
    B = parseInt(prompt("Por favor ingrese el segundo valor a sumar"));

    // REALIZAMOS LOS PROCESOS
    S = A + B;

    // MOSTRAR EL RESULTADO EN PANTALLA
    alert("El resultado de la suma es: " + S);
}

function operaciones() {
    alert("Algoritmo que sumara, restara, multiplicara y dividira 2 valores ingresados")
    let a = 0;
    let b = 0;
    let s = 0;

    a = parseInt(prompt("Ingrese el primer valor a operar"))
    b = parseInt(prompt("Ingrese el segundo valor a operar"))

    r1 = a + b;
    r2 = a - b;
    r3 = a * b;
    r4 = a / b;

    // CON EL + SIRVE PARA CONCATENAR VARIAS VARIABLES
    alert("El resultado de la suma es: " +r1 +  "El resultado de la resta es: " +r2 + "El resultado de la multiplicacion es: " +r3 + "El resultado de la division es: " +r4);
    // alert("El resultado de la resta es: " +r2);
    // alert("El resultado de la multiplicacion es: " +r3);
    // alert("El resultado de la division es: " +r4);
}

function mayor() {
    alert("Algoritmo que determinara el numero mayor de los ingresados");

    let n1 = 0;
    let n2 = 0;

    n1 = parseInt(prompt("Ingrese el primer valor"));
    n2 = parseInt(prompt("Ingrese el segundo valor"));

    // 
    if (n1 == n2) {
        alert("Los valores ingresados son iguales");
    }

    else if(n1>n2){
        alert("El numero mayor es: " + n1);
    }
    else{
        alert("El numero mayor es: " + n2)
    }
}

function menor() {
    alert("Algoritmo que determinara el numero menor de los ingresados")

    let num1 = 0;
    let num2 = 0;
    let num3 = 0;
    let numeroMenor;

    num1 = parseInt(prompt("Ingrese el primer valor"));
    num2 = parseInt(prompt("Ingrese el segundo valor"));
    num3 = parseInt(prompt("Ingrese el tercer valor"));
    
    if (num1 <= num2 && num1 <= num3) {
    numeroMenor = num1;
    } else if (num2 <= num1 && num2 <= num3) {
    numeroMenor = num2;
    } else {
    numeroMenor = num3;
    }

    // Mostrar el resultado
    alert("El número menor es: " +numeroMenor);    
}

function promedio() {
    alert("Algoritmo que determinara el promedio del estudiante")

    let n;
    let m;
    let c1 = 0;
    let c2 = 0;
    let c3 = 0;
    let c4 = 0;
    let c5 = 0;
    let c6 = 0;
    let c7 = 0;
    let r = 0;

    n = prompt("Ingrese su nombre");
    m = prompt("Ingrese el nombre de la materia");
    c1 = parseInt(prompt("Ingrese su primera calificacion"));
    c2 = parseInt(prompt("Ingrese su segunda calificacion"));
    c3 = parseInt(prompt("Ingrese su tercera calificacion"));
    c4 = parseInt(prompt("Ingrese su cuarta calificacion"));
    c5 = parseInt(prompt("Ingrese su quinta calificacion"));
    c6 = parseInt(prompt("Ingrese su sexta calificacion"));
    c7 = parseInt(prompt("Ingrese su septima calificacion"));

    r = c1 + c2 + c3 + c4 + c5 + c6 + c7;

    r = r/7

    if (r>= 6 && r<=10) {
        alert(n+ " usted aprobo la materia " +m+ " con un promedio de: " +r);
    }
    else{
        alert(n+ " usted reprobo la materia " +m+ " con un promedio de: " +r)
    }
    
}

function conversion() {
    alert("Algoritmo para convertir el dolar a pesos colombianos, euros y soles");

    let d
    let c = 4.119;
    let e = 0.92;
    let s = 3.72;

    d = parseInt(prompt("Ingrese el valor del dolar"));

    r1 = d * c;
    r2 = d * e;
    r3 = d * s;

    alert(d+ " dolares es igual a " +r1+ " pesos colombianos, "+r2+ " en euros y " +r3+ " en soles")
}

// UN INDIVIDUO DESEA INVERTIR SU CAPITAL EN UN BANCO Y DESEA SABER CUANTO DINERO GANARA DESPUES DE # NUMERO DE AÑOS TENIENDO EN CUENTA QUE EL BANCO PAGA UN INTERES DEL 1.3% MENSUAL
function cdt() {
    alert("Algoritmo para saber cuanto dinero se gana despues de un numero de años con intereses")

    let a = 0
    let i = 0.013
    let m = 12
    let c = 0

    c = parseInt(prompt("Ingrese el valor de la capital"));
    a = parseInt(prompt("Ingrese el numero de años al que desea saber cuanto dinero ganara"));

    r = c * a
    r2 = 12 * 0.013
    r3 = r2 + r

    // r = 1 + 0.013 
    // r2 = a * 12 
    // r3 = (1.013)^r2 
    // r4 = c * r3

    alert("Usted en "+a+ " años ganara un total de "+r3);


}

function planes() {

    alert("Algoritmo para definir cuanto vale cada plan de netflix")

    // Definimos las variables con let
const planes = [
    {
      id: 1,
      nombre: "Básico",
      precio: 7.999,
      pantallas: 1,
    },
    {
      id: 2,
      nombre: "Estándar",
      precio: 10.999,
      pantallas: 2,
    },
    {
      id: 3,
      nombre: "Premium",
      precio: 13.999,
      pantallas: 4,
    },
  ];
  // Creamos una función para que el cliente pueda escoger el plan que desee
  function elegirPlan() {
    // Mostramos los planes disponibles
    alert("Planes disponibles:");
    for (const plan of planes) {
      alert(`ID: ${plan.id} - Nombre: ${plan.nombre} - Precio: ${plan.precio} - Pantallas: ${plan.pantallas}`);
    }
    // Pedimos al cliente que introduzca el ID del plan que desea
    const idPlan = prompt("Introduce el ID del plan que deseas:");
    // Buscamos el plan en la lista de planes
    const planEncontrado = planes.find((plan) => plan.id === Number(idPlan));
    // Si el plan no existe, mostramos un mensaje de error
    if (!planEncontrado) {
      alert("El plan introducido no existe.");
      return;
    }
    // Mostramos el plan seleccionado
    alert(`Has seleccionado el plan ${planEncontrado.nombre}.`);
  }
  // Llamamos a la función para que el cliente pueda escoger el plan que desee
  elegirPlan();
}

function promediofor() {
    // Función para calcular el promedio de calificaciones
function calcularPromedio(calificaciones) {
    let suma = 0;
    for (let i = 0; i < calificaciones.length; i++) {
      suma += calificaciones[i];
    }
    return suma / calificaciones.length;
  }
  
  // Función para determinar si un estudiante aprobó o reprobó
  function determinarResultado(nombre, materia, calificaciones) {
    const promedio = calcularPromedio(calificaciones);
  
    if (promedio >= 6) {
      alert(`${nombre} ha aprobado la materia ${materia} con un promedio de ${promedio}`);
    } else {
      alert(`${nombre} ha reprobado la materia ${materia} con un promedio de ${promedio}`);
    }
  }
  
  // Ejemplo de uso
  const nombreEstudiante = prompt("Ingrese su nombre:");
  const materiaEstudiante = prompt("Ingrese la materia:");
  const calificacionesEstudiante = [];
  
  for (let i = 1; i <= 7; i++) {
    const calificacion = parseInt(prompt(`Ingrese la calificación ${i}:`));
    calificacionesEstudiante.push(calificacion);
  }
  
  determinarResultado(nombreEstudiante, materiaEstudiante, calificacionesEstudiante);
  
}
// El colegio A B C, requiere un algoritmo o un sistema que permita a los diferentes estudiantes ingresar su nombre, materia, y 7 calificaciones y el sistema, le indique si aprobo o reprobo la materia teniendo en cuenta que se aprueba si el puntaje es mayor o igual a 6, las calificaciones van de 1 a 10
// se requiere un sistema o algoritmo que al ingresar el valor en dolares nos indique a cuantos pesos colombianos equivale, euros y soles
// 1 dolar a pesos colombianos es 4.119 a euros es 0.92 a soles es 3.72



// Capturamos en una constante el elemento html que deseamos manipular
function circulo() {
    const figura = document.getElementById("figura");
    // a este elemento html le agregamos la clase circulo
    figura.classList.toggle("circulo");
}

function horizontal(){
    const figura = document.querySelector("#figura");
    figura.classList.toggle("hor")
}

function vertical(){
    const figura = document.getElementById("figura");
    figura.classList.toggle("vertical");
}

function gif() {
    const figura = document.getElementById("figura");
    figura.classList.toggle("gif")
}

function movetop() {
    const figura = document.querySelector("#figura")

    figura.classList.toggle("top");
}

function moverigth(){
    const figura = document.getElementById("figura");
    figura.classList.toggle("right");
}

function moveleft() {
    const figura = document.querySelector("#figura");
    figura.classList.toggle("left");
}

function movebottom() {
    const figura = document.getElementById("figura");
    figura.classList.toggle("bottom")
}

function degradado(){
    const figura = document.querySelector("#figura");
    figura.classList.toggle("degradado")
}

function rombo(){
    const figure = document.getElementById("figura");
    figure.classList.toggle("rombo")
}

function triangulo(){
    const figure = document.querySelector("#figura");
    figure.classList.toggle("triangulo");
}

function panelLateral() {
    const panel = document.getElementById("panel-lateral");

    panel.classList.toggle("active");
}

function panelSuperior() {
    const panel = document.querySelector("#panel-superior");
    panel.classList.toggle("activo");
}