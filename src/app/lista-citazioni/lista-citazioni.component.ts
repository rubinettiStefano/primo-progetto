import { Component } from '@angular/core';
import { Citazione } from '../model/Citazione';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-citazioni',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-citazioni.component.html',
  styleUrl: './lista-citazioni.component.css'
})
export class ListaCitazioniComponent 
{
  citazioni:Citazione[] = [
    {autore:"Ferdinando",contenuto:"AH, le mie vecchie ossa"},
    {autore:"Stefano",contenuto:"Leggi l'errore, carattere per carattere"},
    {autore:"Adrian",contenuto:"Nascon i bimbi che han già le rughe"}
  ];
}
