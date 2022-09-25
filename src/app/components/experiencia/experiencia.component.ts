import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../../models/experiencia';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  public misExperiencias:Array<Experiencia>;

  constructor() {
    this.misExperiencias=[

      new Experiencia (1, 0, "Operador de cobranzas", "Multiconex", "07/01/2020","2020", "", "Gestión  y seguimiento de comrpomisos de pago con clientes morosos de Banco Columbia"),
      new Experiencia (2, 0, "Emprendedora", "BuscaVidas", "01/10/2016","2016", "30/12/2019", "Emprendimiento de venta de productos"),
      new Experiencia (3, 0, "Operador de cobranzas", "VN Global BPO", "07/01/2006","2006", "18/08/2016", "Gestión  y seguimiento de comrpomisos de pago con clientes morosos de Claro"),
      new Experiencia (4, 0, "Secretaria", "Estudio Aguirre", "07/01/2000","2000", "31/12/2005", "Gestión  y seguimiento de comrpomisos de pago con clientes morosos de Banco Pataagonia"),
     /*  new Experiencia (0, 0, "puesto", "empresa", "fecha inicio","ANIO", "fecha fin", "descipcion"), */

    ]
  }

  ngOnInit(): void {
  }

}
