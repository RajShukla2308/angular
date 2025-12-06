import { Component, HostBinding, HostListener, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',  // host class will be added automatically when we call the component by <app-control>
    '(click)': 'onClick()'  
  }
})
export class ControlComponent {
  // @HostBinding('class') className = 'control'; // in place of host, we can also use hostbinding

  // @HostListener('click') onClick(){
  //   console.log('clicked');
  // }
  label = input.required();

}
