import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Voto } from '../model/Voto';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-lista-voti',
  standalone: true,
  imports: [CommonModule,MatCardModule],
  templateUrl: './lista-voti.component.html',
  styleUrl: './lista-voti.component.css'
})
export class ListaVotiComponent 
{
  voti:Voto[] = [
    {id:1,studente:"Ferdinando",materia:"Età",valore:10},
    {id:2,studente:"Stefano",materia:"CSS",valore:6},
    {id:3,studente:"Adrian",materia:"Buon Senso",valore:4}
  ];
}
