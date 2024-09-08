import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Importa FormsModule aquí

import { AppComponent } from './app.component';
import { CompaComponent } from './compa/compa.component';
import { ProgramacionComponent } from './programacion/programacion.component';
import { HalamadridComponent } from './halamadrid/halamadrid.component';
import { CompbComponent } from './compb/compb.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    CompaComponent,
    ProgramacionComponent,
    HalamadridComponent,
    CompbComponent,
    CalculadoraComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule, // Necesario para Angular Material
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
