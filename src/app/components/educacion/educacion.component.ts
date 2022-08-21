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
      new Educacion (0,0,"Ingenieria", "UTN", "Enero 2001","", "Universitaria", "Abandonada" ),
      new Educacion (0,0,"Programacion", "ISPC", "Marzo 2022","", "Terciaria", "En curso" )
    ]
  }

  ngOnInit(): void {
  }

}
