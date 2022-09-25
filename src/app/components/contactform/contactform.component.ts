import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  ingresar(){
    this.router.navigate(['/404'])
  }

}
