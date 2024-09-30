import { Component, inject, OnInit } from '@angular/core';
import { DatosPersonalesService } from 'src/app/servicios/datos-personales.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent  implements OnInit {

  datosPersonales = inject(DatosPersonalesService);
  nombre: string;

  constructor() { }

  ngOnInit() {
    this.nombre = this.datosPersonales.getNombre();
  }

}
