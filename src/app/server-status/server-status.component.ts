import { Component, OnDestroy, OnInit } from '@angular/core';
import { DashboardItemComponent } from "../dashboard/dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-server-status',
  standalone: true,
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit , OnDestroy{
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  private interval?: ReturnType<typeof setInterval>

  constructor(){
  }

  ngOnInit(): void {
    setInterval(() => {

      const random = Math.random(); // 0 - 0.99999

      if(random < 0.5){
        this.currentStatus = 'online';
      }else if(random < 0.9){
        this.currentStatus = 'offline';
      }
      else{
        this.currentStatus = 'unknown';
      }
      
    }, 5000);
  }

  ngOnDestroy(): void {
  clearTimeout(this.interval);
  }

}
