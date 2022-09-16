import { Component, OnInit } from '@angular/core';
import { Habilidad } from '../../models/skill';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  public misHardSkills:Array<Habilidad>;

  constructor() {
    this.misHardSkills=[
      new Habilidad (0,0,0,0,"HTML",75, "../../../assets/gangxxs.png" ),
      new Habilidad (0,0,0,0,"CSS",75, "../../../assets/gangxxs.png" ),
      new Habilidad (0,0,0,0,"JavaScript",75, "../../../assets/gangxxs.png" ),
      new Habilidad (0,0,0,0,"Java",70, "../../../assets/gangxxs.png" ),
      new Habilidad (0,0,0,0,"Python",65, "../../../assets/gangxxs.png" ),
      new Habilidad (0,0,0,0,"Boostrap",70, "../../../assets/gangxxs.png" ),
      new Habilidad (0,0,0,0,"jQuery",65, "../../../assets/gangxxs.png" ),
      new Habilidad (0,0,0,0,"MySql",65, "../../../assets/gangxxs.png" ),
      new Habilidad (0,0,0,0,"React",60, "../../../assets/gangxxs.png" ),
      new Habilidad (0,0,0,0,"Angular",70, "../../../assets/gangxxs.png" ),
      new Habilidad (0,0,0,0,"Git y GitHub",70, "../../../assets/gangxxs.png" ),
      new Habilidad (0,0,0,0,"Ingles",85, "../../../assets/gangxxs.png" )
    ]
  }

  ngOnInit(): void {
  }

}
