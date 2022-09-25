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

      new Proyecto (6, 0, "Portfolio web", "../../../assets/PortfolioAP_01.png", "Proyecto final de ArgentinaPrograma:  Aaplicación web full stack de arquitectura distribuida y contener un diseño de interface (front end) que muestre la información, una base de datos que almacene los datos antes mencionados y debe contar con las APIs necesarias para proveer a través de internet la información (back end). Se trabaja implementando JWT con Spring Boot y Angular JAVASCRIP TYPESCRIPT HTML CSS BOOTSTRAP", "https://aranthiel.github.io/MeTCaMP2022_React/"),

      new Proyecto (5, 0, "MeTCaMP React", "../../../assets/MeTCaMP_01.png", "Este proyecto refleja los conocimientos adquiridos durante el MeTCaMP Web 2022. Integra estilos del framework Bulma que provee componentes listos para usar y que son faciles de combinar para lograr un diseño web full responsive. Se implementa el ruteo para lograr una facil navegacion entre las diferentes pages del proyecto. El uso de Hooks predefinidos y customizados permite permite crear/acceder facilmente al estado y a los ciclos de vida de los componentes de React", "https://aranthiel.github.io/MeTCaMP2022_React/"),

      new Proyecto (4, 0, "WebCompleta - Udemy", "../../../assets/Udemy_01.png", "Maquetación con HTML y CSS. Plugin jQuery para el Slider. Listado de post almacenados en JSON que se muestran dinamicamente. Cambiador de temas Boton de ScrollUp suave. Fake LogIn con localstorage. Uso de Acordeon con jQuery UI. Reloj dinámico con JavaScript y Formulario de contacto con validación. Proyecto realizado con el curso Master en JavaScript: Aprender JS, jQuery, Angular, NodeJS  de Victor Robles en UDEMY", "https://github.com/Aranthiel/Udemy_webCompleta"),

      new Proyecto (3, 0, "Clone Portfolio", "../../../assets/clonPortfolio.png", " Proyecto realizado en el marco de Argentina programa como práctica de maquetacion clonando y modificando el proyecto de Ryan Fitzgerald ", "https://github.com/Aranthiel/PortfolioConBootstrap"),

      new Proyecto (2, 0, "Clone Nintendo con Bootstrap", "../../../assets/boostrap.png", "Sitio inspirado en el sitio oficial de Nintendo Animal Crossing utilizando Bootstrap 5 siguiendo el tutorial de VIDA MMR ", "https://github.com/Aranthiel/PruebaBoostrap5"),

      new Proyecto (1, 0, "Clone Google", "../../../assets/Platzi_01.png", "Proyecto realizado con HTML y CSS dentro del Curso Práctico de HTML y CSS de Platzi dictado por Diego de Granda", "https://github.com/Aranthiel/ClonGoogleMainPage"),

      /* new Proyecto (0, 0, "muestra", "captura", "descripcion", "repositorio"), */

    ]

  }

  ngOnInit(): void {
    console.log(this.misProyectos);
  }

}// todo el codigo debe estar dentro de este corchete
