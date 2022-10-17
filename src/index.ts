import "./styles.css";


//aca abajo ingreso por pormpt
//let dni: number = prompt("numero DNI");


//let restoDivisionDni: number = dni % 23;
//console.log(restoDivisionDni);

//aca entre la linea 14 y xx ingreso por IMPUT DE HTML Y MUESTRO 
//De la linea 10 a la 16 ingreso por imput de html//

let dniIngresado = document.getElementById("dniIngresado");
let btn = document.getElementById("btn");
let btnCancelar = document.getElementById("btnCancelar");


//ESCUCHO EL BOTON Y ALMACENO LOS DATOS CAPTURADOS DEL INPUT PARA SER USADOS
btn.addEventListener("click", () => {
  
  //Aca tengo el Numero de DNI Ingresado para poder operar
  let dni: number = Number(dniIngresado.value);

//primero chqueamos que el dato ingrsado sea numerico con un If IsNaN y 
//si no es disparo una lerta para que corrija
if (isNaN(dni)) {
  alert( "lo ingresado no es un número deberá Ingresar un numero de DNI Valido" ); 
}
  //Aca divido el numero de DNI Igresado por 23 para saber el resto
  let restoDivisionDni: number = dni % 23;
//console.log(dni);
//declaro un ARRAY con las 23 Letras de lo DNI que corresponden a cada Resto del DNI dividido 23
let arrayLetras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E"
];

//AVRIGUO QUE LETRA CORRESPONDE A LA POSICION DEL ARRAY QUE 
//CORRESPONDE CON EL RESTO DE LA DIVISION DEL DNI POR 23
    let letra: string = arrayLetras[restoDivisionDni];

    console.log("DNI" dni +" "+ "Posicion Array" restoDivisionDni +" "+ " Corresponde Letra" letra);

    resultado.innerText = `${dni} ${letra}`; 
  }

  //•	Se detiene el procso cuando el usuario pulsa «cancelar».
btnCancelar.addEventListener("click", () => {.addEventListener("click", () => {
  
  cancelar.innerText = "Gracias por sus consultas";
  
  location.reload();
  console.log("exit");
 
  
}
