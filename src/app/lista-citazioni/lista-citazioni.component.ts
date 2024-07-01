import { Component } from '@angular/core';
import { Citazione } from '../model/Citazione';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-citazioni',
  standalone: true,
  imports: [FormsModule,MatCardModule,CommonModule,MatButtonModule,MatIconModule,MatInputModule],
  templateUrl: './lista-citazioni.component.html',
  styleUrl: './lista-citazioni.component.css'
})
export class ListaCitazioniComponent 
{

  citazioni:Citazione[] = [
    {id:1,autore:"Ferdinando",contenuto:"AH, le mie vecchie ossa"},
    {id:2,autore:"Stefano",contenuto:"Leggi l'errore, carattere per carattere"},
    {id:3,autore:"Adrian",contenuto:"Nascon i bimbi che han già le rughe"}
  ];

  //metodo di ListaCitazioniComponent che prende un parametro numerico chiamato id e restituisce void (non fa return)
  //void cancellaCitazione(Integer id)
  cancellaCitazione(id:number):void
  {
    let pos = this.citazioni.findIndex(c => c.id==id);
    this.citazioni.splice(pos,1);
  }

  stampaCitazione(id:number):void
  {
    let pos = this.citazioni.findIndex(c => c.id==id);
    let cit = this.citazioni[pos];
    alert(`Citazione id: ${cit.id}  autore: ${cit.autore}     contenuto: ${cit.contenuto}`);
  }

}
