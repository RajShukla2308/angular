import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from './ticket.model';
import { tick } from '@angular/core/testing';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  addTicket(ticketData: {title: string, text: string}){
    const ticket: Ticket = {
      title: ticketData.title,
      id: Math.random().toString(),
      status: 'open',
      request: ticketData.text
    }
    this.tickets.push(ticket)
  }

}
