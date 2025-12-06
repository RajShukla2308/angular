import { Component, DestroyRef, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { DashboardItemComponent } from "../dashboard/dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-server-status',
  standalone: true,
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
  currentStatus  = signal<'online' | 'offline' | 'unknown'>('online');
 // private interval?: ReturnType<typeof setInterval>
 private destroyRef = inject(DestroyRef);

  constructor(){

    console.log(this.currentStatus()) // it will just log initial value of current status

    effect(()=>{
      console.log(this.currentStatus()) // it will log the value whenever the status changes.
    })
  }

  ngOnInit(): void {
    const interval = setInterval(() => {

      const random = Math.random(); // 0 - 0.99999

      if(random < 0.5){
        this.currentStatus.set('online');
      }else if(random < 0.9){
        this.currentStatus.set('offline');
      }
      else{
        this.currentStatus.set('unknown');
      }
      
    }, 5000);

    this.destroyRef.onDestroy(()=>{
      clearInterval(interval);
    })
  }

  // ngOnDestroy(): void {
  // clearTimeout(this.interval);
  // }

}
