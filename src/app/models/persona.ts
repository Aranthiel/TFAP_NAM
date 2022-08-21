
// se debe colocar la palabra reservada export para que pueda ser accedida desde otros elementos
// las clases llevan el nombre en SINGULAR y siempre comienzan con MAYUSCULAS
export class Persona {
  constructor(
  public persona_id: number,
  public nombre:string,
  public titulo:string,
  public email:string,
  public url_linkedin:string,
  public url_github:string,
  public url_banner:string,
  public about:string,
  public contrasenia:string,
  ){}
}

