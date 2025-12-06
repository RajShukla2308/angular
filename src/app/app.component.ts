import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TrafficComponent } from "./dashboard/traffic/traffic.component";
import { TicketsComponent } from './dashboard/tickets/tickets.component';
import { DashboardItemComponent } from "./dashboard/dashboard-item/dashboard-item.component";
import { ServerStatusComponent } from './server-status/server-status.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, ServerStatusComponent, TrafficComponent, TicketsComponent, DashboardItemComponent,
    DashboardItemComponent
  ]
})
export class AppComponent {
  serverStatusImgData = { src: 'status.png', alt:'A signal symbol'};
  serverStatuseading:string = 'Server Status';

  trafficImgData = { src:"globe.png", alt:"A globe" };
  trafficHeading = "Traffic";

  ticketsImgData = { src:"list.png" , alt:"A list of items" }
  ticketsHeading = 'Support Tickets'
 
}
