import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {

  data = input.required<Ticket>();
  detailsVisible = signal(false);
  closeTicket = output<string>();

  onToggle(){
    // this.detailsVisible.set(!this.detailsVisible());

    // UPDATE SIGNALS 
    this.detailsVisible.update((wasVisible)=> !wasVisible)
  }

  onCloseTicket(id:string){
    this.closeTicket.emit(id);
  }

}
