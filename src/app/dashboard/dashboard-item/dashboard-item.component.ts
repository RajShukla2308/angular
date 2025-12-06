import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
  // host:{
  //   class:'dashboard-item'
  // }
})
export class DashboardItemComponent {

  imgData = input.required<{src:string,alt:string}>()
  heading = input.required<string>();

}
