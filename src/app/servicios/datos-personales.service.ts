import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosPersonalesService {
  private nombreSubject = new BehaviorSubject<string>(''); // Crear un BehaviorSubject para el nombre
  private correoSubject = new BehaviorSubject<string>(''); // Crear un BehaviorSubject para el correo

  nombre$ = this.nombreSubject.asObservable(); // Observable para el nombre
  correo$ = this.correoSubject.asObservable(); // Observable para el correo

  constructor() { }

  setNombre(nombre: string) {
    this.nombreSubject.next(nombre);
  }

  getNombre(): string {
    return this.nombreSubject.getValue();
  }

  setCorreo(correo: string) {
    this.correoSubject.next(correo);
  }

  getCorreo(): string {
    return this.correoSubject.getValue();
  }
}
