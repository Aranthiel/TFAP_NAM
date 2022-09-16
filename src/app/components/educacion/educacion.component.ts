import { Component, OnInit } from '@angular/core';
import { Educacion } from '../../models/educacion';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  public misEstudios:Array<Educacion>;

  constructor() {
    this.misEstudios=[
      new Educacion (0,0,"carrera", "institucion", "fecha_inicio","fecha_fin", "tipo_Educacion", "estado" ),
      new Educacion (0,0,"Tecnicatura Superior en Diseño Web y Aplicaciones Digitales", "ISPC", "Marzo 2022","", "Terciaria", "En curso" ),
      new Educacion (0,0,"Master en JavaScript: Aprender JS, jQuery, Angular, NodeJS", "Udemy", "Junio 2022","", "Capacitación", "En curso" ),
      new Educacion (0,0,"#Argentina Programa", "INTI", "octubre 2021","Octubre 2022", "Capacitación", "Finalizado" ),
      new Educacion (0,0,"MeTCaMP React", "MeT", "Agosto 2021","Septiembre 2022", "Bootcamp", "Finalizado" ),
      new Educacion (0,0,"HTML CSS y JavaScript", "Platzi", "Marzo 2022","Marzo 2022", "Curso", "Finalizado" ),
      new Educacion (0,0,"111mil Programadores", "INET", "Octubre 2018","", "Capacitación", "Incompleto" ),
      new Educacion (0,0,"Ingenieria", "UTN", "Enero 2001","", "Universitaria", "Abandonada" )
    ]
  }

  ngOnInit(): void {
  }

}
