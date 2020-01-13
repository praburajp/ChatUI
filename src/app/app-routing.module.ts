import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MsgComponent } from './msg/msg.component';


const routes: Routes = [
  {
    path:'',
    component:MsgComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
