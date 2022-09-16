import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../models/proyecto';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  public misProyectos:Array<Proyecto>;

  constructor() {
    this.misProyectos= [
      new Proyecto (0, 0, "primer proyecto", "captura", "descripcion", "repositorio"),
      new Proyecto (1, 0, "Clon Portfolio", "../../../assets/clonPortfolio.png", "descripcion", "https://github.com/Aranthiel/PortfolioConBootstrap"),
      new Proyecto (2, 0, "Clon Google", "../../../assets/Platzi_01.png", "descripcion", "https://github.com/Aranthiel/ClonGoogleMainPage"),
      new Proyecto (3, 0, "Clon Nintendo con Boostrap", "../../../assets/boostrap.png", "descripcion", "https://github.com/Aranthiel/PruebaBoostrap5"),
      new Proyecto (4, 0, "WebCompleta - Udemy", "../../../assets/Udemy_01.png", "descripcion", "https://github.com/Aranthiel/Udemy_webCompleta"),
      new Proyecto (4, 0, "MeTCaMP React", "../../../assets/MeTCaMP_01.png", "descripcion", "https://aranthiel.github.io/MeTCaMP2022_React/"),

    ]

  }

  ngOnInit(): void {
    console.log(this.misProyectos);
  }

}// todo el codigo debe estar dentro de este corchete
