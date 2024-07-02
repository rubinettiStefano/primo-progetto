import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-prove-binding',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './prove-binding.component.html',
  styleUrl: './prove-binding.component.css'
})
export class ProveBindingComponent implements OnInit
{
  ngOnInit(): void 
  {
    setTimeout(
      ()=>this.grandezza="100px",
      5000
    )
  }

  urlImg:string="https://i.ytimg.com/vi/xCwXIfUXs6A/hqdefault.jpg";
  grandezza:string="20px";
  variabileDaInterpolare:string = "Ciao sono il valore che è stato interpolato";
  coloreTesto:string = "red";
  listaColori:string[] = ["red","green","blue","black","grey"];
  posColore:number=0;


  valoreInput1:string="";

  oggettoForm={prop1:"",prop2:0};

  stampaScritta():void
  {
    console.log("valoreInput1",this.valoreInput1)
    console.log("oggettoForm",this.oggettoForm)
  }

  cambiaColore():void
  {
    this.posColore++;
    if(this.posColore==this.listaColori.length)
      this.posColore=0;
    this.coloreTesto=this.listaColori[this.posColore];
  }
}
