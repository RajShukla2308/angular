import { afterNextRender, afterRender, Component, contentChild, ContentChild, ElementRef, HostBinding, HostListener, input, ViewEncapsulation } from '@angular/core';

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


  // content child
  //@ContentChild('inputForContentChild') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>

  // content child with signal
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('inputForContentChild')

  onClick(){
   // console.log(this.control)
   // console.log(this.control()) // in signal use ().
  }

  constructor(){
    // after anything changes in whole application
    afterRender(()=>{
     // console.log('after render')
    })

    //after anything next changes in whole application
    afterNextRender(()=>{
     // console.log('after next render')
    })
  }

}
