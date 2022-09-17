import { Component, OnInit } from '@angular/core';
import { Habilidad } from '../../models/skill';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  public misHardSkills:Array<Habilidad>;
  public misSoftSkills:Array<Habilidad>;

  constructor() {
    this.misHardSkills=[
      new Habilidad (0,0,0,0,"HTML",75, "../../../assets/html30px.png" ),
      new Habilidad (0,0,0,0,"CSS",75, "../../../assets/css30px.png" ),
      new Habilidad (0,0,0,0,"JavaScript",75, "../../../assets/JavaScrip30px.png" ),
      new Habilidad (0,0,0,0,"Java",70, "../../../assets/Java30px.png" ),
      new Habilidad (0,0,0,0,"Python",65, "../../../assets/phyton30px.png" ),
      new Habilidad (0,0,0,0,"Boostrap",70, "../../../assets/boostrap30px.png" ),
      new Habilidad (0,0,0,0,"jQuery",65, "../../../assets/jQuery30px.png" ),
      new Habilidad (0,0,0,0,"MySql",65, "../../../assets/MySQL30px.png" ),
      new Habilidad (0,0,0,0,"React",60, "../../../assets/react30px.png" ),
      new Habilidad (0,0,0,0,"Angular",70, "../../../assets/angular30px.png" ),
      new Habilidad (0,0,0,0,"Git",70, "../../../assets/git30px.png" ),
      new Habilidad (0,0,0,0,"GitHub",70, "../../../assets/GitHub30px.png" ),
      new Habilidad (0,0,0,0,"Ingles",85, "../../../assets/ingles30px.png" )
    ];

    this.misSoftSkills=[
      new Habilidad (0,0,0,0,"Trabajo en equipo",95, "../../../assets/equipo.png" ),
      new Habilidad (0,0,0,0,"Iniciativa",90, "../../../assets/iniciativa.png" ),
      new Habilidad (0,0,0,0,"Resolucion de problemas",85, "../../../assets/problem.png" ),
      new Habilidad (0,0,0,0,"Comunicación",90, "../../../assets/comunicacion.png" ),
      new Habilidad (0,0,0,0,"Flexibilidad",85, "../../../assets/flexibility.png" )
    ];
  }

  ngOnInit(): void {
  }

}
