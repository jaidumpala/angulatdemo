import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-data1',
  templateUrl: './data1.component.html',
  styleUrls: ['./data1.component.css']
})
export class Data1Component {
  @Input() tabindex:any;
  @Input() tabdata:any;
}