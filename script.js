//DECLARACION DE VARIABLES 
let resultado, lista, formato1, formato2, entrada;

//CREACION DE OBJETOS

class Inversion{
    constructor(banco,cbu,plazo,capital){
        this.banco = banco;
        this.cbu = cbu;
        this.plazo = plazo;
        this.capital = capital;
    }

    interes(){
       resultado = Math.round(this.capital * (1.18 * this.plazo / 365)); //1,18 es la tasa de interés 
       return resultado;
    }
}

//CREACION DE FUNCIONES Y ARRAY

let datos = [];

//FUNCION 1
function ingresoDeDatos(){
    lista = document.getElementById("plazoFijo");
    datos.push(new Inversion(
        document.getElementById("entidadBancaria").value,
        document.getElementById("cuentaBancaria").value,
        +(lista.options[lista.selectedIndex].value),
        +(document.getElementById("plataInversion").value)
    ));
    
    formato1 = JSON.stringify(datos);
    localStorage.setItem("datos", formato1);

    let positivo = (document.getElementById("plataInversion").value > 0) ? true:false
    positivo ? ejecutar():alert("Por favor ingrese un valor válido de inversión");
}

//FUNCION 2
function obtencionDeDatos(){
    document.body.append(nuevoDiv);

    document.getElementById("entidadBancaria").value = "";
    document.getElementById("cuentaBancaria").value = "";
    document.getElementById("plataInversion").value = "";
}

//FUNCION 3
function ejecutar(){
    entrada = 0;
    formato2 = JSON.parse(formato1);
    let numero = lista.options[lista.selectedIndex].value;
    switch(+(numero)){
        case 30:
            datos.forEach((dato) => {
                entrada += dato.interes();
            })
            nuevoDiv.innerHTML = `<p>Banco: ${formato2[formato2.length-1].banco}<\p>
                                  <p>CBU: ${formato2[formato2.length-1].cbu}<\p>
                                  <p>Plazo elegido: ${formato2[formato2.length-1].plazo} días<\p>
                                  <p>Capital invertido: $ ${formato2[formato2.length-1].capital}<\p>
                                  <p>Interés:  $ ${entrada}<\p>
                                 <p>Dinero a depositar: $ ${+(formato2[formato2.length-1].capital) + entrada}<\p>`
        break;
        case 60:
            datos.forEach((dato) => {
                entrada += 2 * (dato.interes());
            })
            nuevoDiv.innerHTML = `<p>Banco: ${formato2[formato2.length-1].banco}<\p>
                                  <p>CBU: ${formato2[formato2.length-1].cbu}<\p>
                                  <p>Plazo elegido: ${formato2[formato2.length-1].plazo} días<\p>
                                  <p>Capital invertido: $ ${formato2[formato2.length-1].capital}<\p>
                                  <p>Interés:  $ ${entrada}<\p>
                                 <p>Dinero a depositar: $ ${+(formato2[formato2.length-1].capital) + entrada}<\p>`
        break;
        case 90:
            datos.forEach((dato) => {
                entrada += 4 * (dato.interes());
            })
            nuevoDiv.innerHTML = `<p>Banco: ${formato2[formato2.length-1].banco}<\p>
                                  <p>CBU: ${formato2[formato2.length-1].cbu}<\p>
                                  <p>Plazo elegido: ${formato2[formato2.length-1].plazo} días <\p>
                                  <p>Capital invertido: $ ${formato2[formato2.length-1].capital}<\p>
                                  <p>Interés:  $ ${entrada}<\p>
                                 <p>Dinero a depositar: $ ${+(formato2[formato2.length-1].capital) + entrada}<\p>`
        break;
        case 120:
            datos.forEach((dato) => {
                entrada += 8 * (dato.interes());
            })
            nuevoDiv.innerHTML = `<p>Banco: ${formato2[formato2.length-1].banco}<\p>
                                  <p>CBU: ${formato2[formato2.length-1].cbu}<\p>
                                  <p>Plazo elegido: ${formato2[formato2.length-1].plazo} días<\p>
                                  <p>Capital invertido: $ ${formato2[formato2.length-1].capital}<\p>
                                  <p>Interés:  $ ${entrada}<\p>
                                 <p>Dinero a depositar: $ ${+(formato2[formato2.length-1].capital) + entrada}<\p>`
        break;
    }
}

//EVENTOS

let boton = document.getElementById("boton");
boton.addEventListener("click", ingresoDeDatos);
boton.addEventListener("click", obtencionDeDatos);


//MODIFICACION DEL DOM (CREACION DE ELEMENTOS)
let nuevoDiv = document.createElement("div");
nuevoDiv.innerHTML = `<p>Banco: <\p>
                      <p>CBU: <\p>
                      <p>Plazo elegido: <\p>
                      <p>Capital invertido: <\p>
                      <p>Interés:  <\p>
                      <p>Dinero a depositar: <\p>`