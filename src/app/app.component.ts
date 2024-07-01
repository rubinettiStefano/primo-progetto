import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Citazione } from './model/Citazione';
import { CommonModule } from '@angular/common';
import { ListaCitazioniComponent } from "./lista-citazioni/lista-citazioni.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CommonModule, ListaCitazioniComponent]
})
export class AppComponent 
{
  testo: string = 'Sto provando a fare INTERPOLAZIONE';
  //String testo


  
}
