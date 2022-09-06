// se debe colocar la palabra reservada import para acceder a la clase PERSONA

import {Persona} from "../models/persona";

// se debe colocar la palabra reservada export para que pueda ser accedida desde otros elementos
// las clases llevan el nombre en SINGULAR y siempre comienzan con MAYUSCULAS


export class Experiencia {
  constructor(
  public skill_id: number,
  public persona_id: number, // este elemento hace referencia a la clase Persona
  public tipo_skill_id: number, // este elemento hace referencia a la clase TipoSkill
  public nivel_skill_id: number, // este elemento hace referencia a la clase NivelSkill
  public puesto:string,
  public empresa:string,
  public fecha_inicio: Date,
  public fecha_fin: Date,
  public descripcion:string,
  ){}
}
