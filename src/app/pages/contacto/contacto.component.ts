import { Component, inject, OnInit } from '@angular/core';
import { DatosPersonalesService } from 'src/app/servicios/datos-personales.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
})
export class ContactoComponent  implements OnInit {

  datosPersonales = inject(DatosPersonalesService);
  nombre: string;

  constructor() {
  }

  ngOnInit() {
    this.nombre = this.datosPersonales.getNombre();
  }

}
