
// se debe colocar la palabra reservada export para que pueda ser accedida desde otros elementos
// las clases llevan el nombre en SINGULAR y siempre comienzan con MAYUSCULAS
export class Persona {

  constructor(
  public nombre:string,
  public titulo:string,
  public about:string,
// atributos opcionales
  public email?:string,
  public url_linkedin?:string,
  public url_github?:string,
  public url_banner?:string,
  public contrasenia?:string,
  // el id se toma como opcional ya que es autogenerado (?)
  public persona_id?: number,
  ){}
}

//export var natalia=new Persona(0, "Natalia  Moroni", "Full Stack Developer Jr", "nmoronidalmasso@gmail.com", "https://www.linkedin.com/notifications/", "https://github.com/Aranthiel",  "../../../assets/BANNER_WIDE_SHORT.png", " Soy estudiante de programación, apasionada por aprender y superarme.", "abc123", );
