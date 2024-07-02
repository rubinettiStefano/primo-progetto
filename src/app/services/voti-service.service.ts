import { Injectable } from '@angular/core';
import { Voto } from '../model/Voto';

@Injectable({
  providedIn: 'root'
})
export class VotiServiceService 
{
  fintoDb:Voto[] = [
    {id:1,studente:"Ferdinando",materia:"Età",valore:10},
    {id:2,studente:"Stefano",materia:"CSS",valore:6},
    {id:3,studente:"Adrian",materia:"Buon Senso",valore:4}
  ];

  getAllVoti():Voto[]
  {
    return this.fintoDb;
  }

  insert(voto:Voto):void
  {
    let nuovoVoto = {...voto};//clona votoTemp
    let nuovoId = this.fintoDb.map(v => v.id).sort().reverse()[0]+1;
    nuovoVoto.id = nuovoId;
    this.fintoDb.unshift(nuovoVoto);
  }
}
