import { CommonModule } from '@angular/common';
import { Component, viewChild } from '@angular/core';
import { Voto } from '../model/Voto';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatAccordion,MatExpansionModule } from '@angular/material/expansion';
import { VotiServiceService } from '../services/voti-service.service';

@Component({
  selector: 'app-lista-voti',
  standalone: true,
  imports: [MatExpansionModule,MatAccordion,CommonModule,MatCardModule,FormsModule,MatInputModule,MatButtonModule],
  templateUrl: './lista-voti.component.html',
  styleUrl: './lista-voti.component.css'
})
export class ListaVotiComponent 
{

  constructor(private mockDb:VotiServiceService)
  {
    this.voti = mockDb.getAllVoti();
  }

  accordion = viewChild.required(MatAccordion);
  votoTemp:Voto = {id:0,studente:"",materia:"",valore:6}

  voti:Voto[];


  raccogliSubmit():void 
  {
    this.mockDb.insert(this.votoTemp);
    this.voti = this.mockDb.getAllVoti();
    this.votoTemp={id:0,studente:"",materia:"",valore:6};
  }
}
