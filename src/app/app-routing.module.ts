import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  {path : 'room' , component : RoomsComponent, children : [{ path : 'chat' , component : ChatComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
