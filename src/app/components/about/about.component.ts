import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  aboutMe: string = "Soy estudiante de programación, apasionada por aprender y superarme. Actualmente estoy incorporando herramientas de  programación full stack. \n Soy emprendedora, responsable, proactiva, con gran capacidad de aprendizaje, y fuerte interés en el trabajo en equipo y el desarrollo personal y profesional. \n Actualmente me encuentro en búsqueda de una empresa donde dar los primeros pasos como developer y desarrollar mi potencial, sumando conocimientos y experiencia para establecerme profesionalmente."
  persona: Persona =new Persona( "Natalia A. Moroni", "Full Stack Develloper Jr.", this.aboutMe, "nmoronidalmasso@gmail.com", "https://www.linkedin.com/notifications/", "https://github.com/Aranthiel",  "../../../assets/BANNER_WIDE_SHORT.png");

  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data =>{this.persona=data})
  }

}
