import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})
export class EmpleadosComponent implements OnInit {
  titulo:string="Lista Empleados";
  prueba:string="Esta es una prueba de mi componente";

  constructor() { }

  ngOnInit(): void {
  }

}
