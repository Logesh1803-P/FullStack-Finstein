import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ExpenceComponent } from './expence/expence.component';
import { AdduserformComponent } from './adduserform/adduserform.component';
import { ModelformComponent } from './modelform/modelform.component';

const routes: Routes = [

  { path: '', component: ExpenceComponent},
  { path: 'AddUser', component: AdduserformComponent},
  // { path: 'AddUser/Home', component: ExpenceComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
