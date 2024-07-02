import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Citazione } from './model/Citazione';
import { CommonModule } from '@angular/common';
import { ListaCitazioniComponent } from "./lista-citazioni/lista-citazioni.component";
import { ListaVotiComponent } from "./lista-voti/lista-voti.component";
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { ProveBindingComponent } from "./prove-binding/prove-binding.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [MatCardModule, MatGridListModule, MatButtonModule, RouterOutlet, CommonModule, ListaCitazioniComponent, ListaVotiComponent, ProveBindingComponent]
})
export class AppComponent 
{
  testo: string = 'Sto provando a fare INTERPOLAZIONE';
  //String testo
  showCitazioni:boolean = true;
  showVoti:boolean = true;

  stampa():void 
  {
    this.testo+='!';
    console.log("CIAO SONO STATO INVOCATO DAL BOTTONCINO");
  }

  toggleCitazioni():void
  {
    this.showCitazioni = !this.showCitazioni;
  }

  toggleVoti():void
  {
    this.showVoti = !this.showVoti;
  }

  produciSaluto()
  {
    return "CIAO DAVIDE";
  }
  
}
