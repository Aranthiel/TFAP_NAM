// se debe colocar la palabra reservada importe para acceder a la clase PERSONA

import {Persona} from "../models/persona";

// se debe colocar la palabra reservada export para que pueda ser accedida desde otros elementos
// las clases llevan el nombre en SINGULAR y siempre comienzan con MAYUSCULAS


export class Proyecto {
  constructor(
  public proyecto_id: number,
  public persona_id: number, // este elemento hace referencia  a la clase Persona
  public titulo:string,
  public url_captura:string,
  public descripcion:string,
  public url_repositorio:string,
  ){}
}

/*
let date: Date = new Date(2017, 04, 04, 17, 23, 42, 11);
date.setDate(11);
date.setMonth(11);
date.setFullYear(2011);
date.setHours(11);
date.setMinutes(11);
date.setSeconds(11);TypeScriptCopy
Podemos acceder a los componentes de fecha utilizando varios métodos de obtención como getDate, getMonth, etc. En el siguiente ejemplo, recuperamos los componentes de fecha individuales usando métodos de obtención e imprimimos el registro en la pantalla.
console.log("Year = " + date.getFullYear());
console.log("Date = " + date.getDate());
console.log("Month = " + date.getMonth());
console.log("Day = " + date.getDay());
console.log("Hours = " + date.getHours());
console.log("Minutes = " + date.getMinutes());
console.log("Seconds = " + date.getSeconds());
*/
