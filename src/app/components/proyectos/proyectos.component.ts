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

      new Proyecto (6, 0, "Hub Recircular", "../../../assets/ImgProyectos/HubRecircular25.png", "Proyecto final de la etapa de Diseño web de CoderHouse: Proyecto con 5 archivos HTML vinculados por navegación interna, que utilize GRID y FLEXBOX para la maquetación. Utiliza elementos de BOOTSTRAP. Aplica estilos utilizando SASS y CSS. Incorpora etiquetas meta para SEO", "https://namcoderhtp1.netlify.app/", "https://github.com/Aranthiel/CH-TP1"),

      new Proyecto (6, 0, "Portfolio Wordpress", "../../../assets/ImgProyectos/wordpress25.png", "Proyecto final del módulo Sistema de Gestion de Contenidos ISPC 2022:  Portfolio personal dentro de una pagina institucional utilizando Wordpress", "https://innovacionit.tech/natalia-moroni/", "http://innovacionit.tech/"),

      new Proyecto (6, 0, "Hotel California", "../../../assets/ImgProyectos/hotelCalifornia25.png", "Proyecto integrador grupal del módulo Programación ISPC 2022:  PAgina web creada utilizando metodologia SCRUM donde se aplicaron concimientos de HTML, CSS, Python, Bootstrap y JavaScript", "http://hcalifornia.innovacionit.tech/", "https://github.com/FedeGonzalez2016/2022-Fullstack-Proyecto-Integrador.git"),

      new Proyecto (6, 0, "Portfolio web", "../../../assets/ImgProyectos/PortfolioAP25.png", "Proyecto final de ArgentinaPrograma:  Aplicación web full stack de arquitectura distribuida y contener un diseño de interface (front end) que muestre la información, una base de datos que almacene los datos antes mencionados y debe contar con las APIs necesarias para proveer a través de internet la información (back end). Se trabaja implementando JWT con Spring Boot y Angular JAVASCRIP TYPESCRIPT HTML CSS BOOTSTRAP", "https://github.com/Aranthiel/TFAP_NAM", "https://github.com/Aranthiel/TFAP_NAM" ),// https://aranthiel.github.io/TFAP_NAM no se pudo deployar aun

      new Proyecto (5, 0, "MeTCaMP React", "../../../assets/ImgProyectos/MeTCaMP25.png", "Este proyecto refleja los conocimientos adquiridos durante el MeTCaMP Web 2022. Integra estilos del framework Bulma que provee componentes listos para usar y que son faciles de combinar para lograr un diseño web full responsive. Se implementa el ruteo para lograr una facil navegacion entre las diferentes pages del proyecto. El uso de Hooks predefinidos y customizados permite permite crear/acceder facilmente al estado y a los ciclos de vida de los componentes de React", "https://aranthiel.github.io/MeTCaMP2022_React/", "https://github.com/Aranthiel/MeTCaMP2022_React"),

      new Proyecto (4, 0, "WebCompleta - Udemy", "../../../assets/ImgProyectos/Udemy25.png", "Maquetación con HTML y CSS. Plugin jQuery para el Slider. Listado de post almacenados en JSON que se muestran dinamicamente. Cambiador de temas Boton de ScrollUp suave. Fake LogIn con localstorage. Uso de Acordeon con jQuery UI. Reloj dinámico con JavaScript y Formulario de contacto con validación. Proyecto realizado con el curso Master en JavaScript: Aprender JS, jQuery, Angular, NodeJS  de Victor Robles en UDEMY", "https://namudemytp1.netlify.app/", "https://github.com/Aranthiel/Udemy_webCompleta"),

      new Proyecto (3, 0, "Portfolio Boostrap", "../../../assets/ImgProyectos/clonPortfolio25.png", " Proyecto realizado en el marco de Argentina programa como práctica de maquetacion clonando y modificando el proyecto de Ryan Fitzgerald ", "https://github.com/Aranthiel/PortfolioConBootstrap", "https://github.com/Aranthiel/PortfolioConBootstrap"),

      new Proyecto (2, 0, "Clone Nintendo con Bootstrap", "../../../assets/ImgProyectos/boostrap25.png", "Sitio inspirado en el sitio oficial de Nintendo Animal Crossing utilizando Bootstrap 5 siguiendo el tutorial de VIDA MMR ", "https://namvidamrboostrap.netlify.app/", "https://github.com/Aranthiel/PruebaBoostrap5"),

      new Proyecto (1, 0, "Clone Google", "../../../assets/ImgProyectos/Platzi25.png", "Proyecto realizado con HTML y CSS dentro del Curso Práctico de HTML y CSS de Platzi dictado por Diego de Granda donde se emula la interface gráfica de la página inicial de Google","https://namclongoogle.netlify.app/", "https://github.com/Aranthiel/ClonGoogleMainPage"),

      /* new Proyecto (0, 0, "muestra", "captura", "descripcion", "repositorio"), */

    ]

  }

  ngOnInit(): void {
    console.log(this.misProyectos);
  }

}// todo el codigo debe estar dentro de este corchete
