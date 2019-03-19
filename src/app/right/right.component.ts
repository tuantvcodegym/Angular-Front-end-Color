import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss']
})
export class RightComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Output() myclick = new EventEmitter();
  addUpdate(){
    this.myclick.emit();
  }

}
