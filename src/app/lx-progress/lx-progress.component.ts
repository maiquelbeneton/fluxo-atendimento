import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'lx-progress',
  templateUrl: './lx-progress.component.html',
  styleUrls: ['./lx-progress.component.css']
})
export class LxProgressComponent implements OnInit, OnChanges {
  
  @Input() valueNow: number;
  @Input() fechaAoConcluir: boolean;


  get esconderProgress() {
    return this.fechaAoConcluir && this.valueNow == 100;
  }
  
  constructor() { }

  alterarValorProgress(){
    document.getElementById("divProgress").style.width = this.valueNow + "%";
  }

  ngOnInit() {
    this.alterarValorProgress();
  }

  ngOnChanges(){
    this.alterarValorProgress();
  }

}
