import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthsComponent } from './auths/auths.component';
import { UserComponent } from './user/user.component';
import { AuthguardGuard } from './authguard.guard'

// configuring routes

const routes: Routes = [

  {
    path : '',
    redirectTo : 'auth' ,
    pathMatch : 'full'
  },
  {
    path : 'auth',
    component : AuthsComponent
  },
  {
    path : 'home',
    component : UserComponent
    // canActivate : [AuthguardGuard]
  },


  
  {
    path : '**',
    component : AuthsComponent
  }
  ]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// exported components
export const routingComponents = [];
