import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rl-form',
  templateUrl: './rl-form.component.html',
  styleUrls: ['./rl-form.component.css']
})
export class RlFormComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  ingresar(){
    this.router.navigate(['/404'])
  }
}
