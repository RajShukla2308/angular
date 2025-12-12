import { AfterViewInit, Component, ElementRef, OnInit, output, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit{

  @ViewChild('form') form?: ElementRef<HTMLFormElement>;

  addTicket = output<{title: string, text: string}>();

 // viewchild signal 
 // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  ngOnInit() {
    // try  to access form, will not be aceessible here - NORMAL CASE WHEN NOT USING SIGNALS
    // IF we use signals, we will be able to access here as well.
    console.log(this.form?.nativeElement)
  }

  ngAfterViewInit() {
    // try  to access form, will be aceessible here
   // console.log(this.form?.nativeElement)
  }

  onSubmit(titleInput:string,request:string){
   // console.log('form submitted', titleInput, request);
    this.addTicket.emit({title:titleInput, text: request})

    this.form?.nativeElement.reset();
  }

}
