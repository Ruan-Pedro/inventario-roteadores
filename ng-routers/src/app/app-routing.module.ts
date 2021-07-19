import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagementComponent } from './components/views/management/management.component';
import { DashboardComponent } from './components/views/dashboard/dashboard.component';
import { DatabaseComponent } from './components/views/database/database.component';
 import { HomeComponent } from './components/template/home/home.component';



const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path: "management",
    component: ManagementComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "database",
    component: DatabaseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
