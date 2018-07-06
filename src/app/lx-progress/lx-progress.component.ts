import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lx-progress',
  templateUrl: './lx-progress.component.html',
  styleUrls: ['./lx-progress.component.css']
})
export class LxProgressComponent implements OnInit {
  
  @Input() valueNow: number;
  
  constructor() { }

  ngOnInit() {
  }

}
