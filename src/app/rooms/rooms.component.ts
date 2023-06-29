import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {


  constructor(public router : Router){

  }

  onChat(){
    this.router.navigate(['/room/chat'])

  }
}
