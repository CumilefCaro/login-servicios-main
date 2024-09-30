import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { StoreComponent } from './store/store.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    ContactoComponent,
    StoreComponent,
    LoginComponent,
    LogoutComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule, // Include SharedModule for common components and modules
    IonicModule, // Include FormsModule for form validation
    FormsModule // Include IonicModule for Ionic components
  ]
})
export class PagesModule { }
