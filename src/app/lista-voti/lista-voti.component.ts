import { CommonModule } from '@angular/common';
import { Component, viewChild } from '@angular/core';
import { Voto } from '../model/Voto';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatAccordion,MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-lista-voti',
  standalone: true,
  imports: [MatExpansionModule,MatAccordion,CommonModule,MatCardModule,FormsModule,MatInputModule,MatButtonModule],
  templateUrl: './lista-voti.component.html',
  styleUrl: './lista-voti.component.css'
})
export class ListaVotiComponent 
{

  accordion = viewChild.required(MatAccordion);
  votoTemp:Voto = {id:0,studente:"",materia:"",valore:6}

  voti:Voto[] = [
    {id:1,studente:"Ferdinando",materia:"Età",valore:10},
    {id:2,studente:"Stefano",materia:"CSS",valore:6},
    {id:3,studente:"Adrian",materia:"Buon Senso",valore:4}
  ];


  raccogliSubmit():void 
  {
    let nuovoVoto = {...this.votoTemp};//clona votoTemp
    let nuovoId = this.voti.map(v => v.id).sort().reverse()[0]+1;
    nuovoVoto.id = nuovoId;
    this.voti.unshift(nuovoVoto);
    this.votoTemp={id:0,studente:"",materia:"",valore:6};
  }
}
