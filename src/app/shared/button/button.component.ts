import { Component } from '@angular/core';

@Component({
  selector: 'button[appButton]', // means in html tag button use appButton selector <button appButton>
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

}
