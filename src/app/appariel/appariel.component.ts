import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-appariel',
  templateUrl: './appariel.component.html',
  styleUrls: ['./appariel.component.scss']
})
export class ApparielComponent implements OnInit {
  @Input() appareilName : String; 
  @Input() appareilStatus : String;
    

  constructor() {}
    

  ngOnInit() {
  }
  getStatus(){
   return  this.appareilStatus;
  }


}
