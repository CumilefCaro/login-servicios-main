import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatosPersonalesService } from 'src/app/servicios/datos-personales.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  nombre: string = ''; // Campo para el nombre

  constructor(
    private datosPersonalesService: DatosPersonalesService,
    private router: Router
  ) {}

  iniciarSesion() {
    if (this.email && this.password && this.nombre) {
      this.datosPersonalesService.setCorreo(this.email); // Guarda el correo en el servicio
      this.datosPersonalesService.setNombre(this.nombre); // Guarda el nombre en el servicio
      this.router.navigate(['/contacto']); // Redirige a la página de contacto
    }
  }
}
