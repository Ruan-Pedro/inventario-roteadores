import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/template/home/home.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { ManagementComponent } from './components/views/management/management.component';
import { DashboardComponent } from './components/views/dashboard/dashboard.component';
import { DatabaseComponent } from './components/views/database/database.component';
import { SidenavComponent } from './components/template/sidenav/sidenav.component';
import { MatIconModule } from '@angular/material/icon'
import { MatSelectModule } from '@angular/material/select';
import { ForDirective } from './directives/for.directive';
import { MatSnackBarModule } from '@angular/material/snack-bar'

import { HttpClientModule } from '@angular/common/http'
// import {MatSidenavModule } from '@angular/material/sidenav'
// import {MatListModule } from '@angular/material/list'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ManagementComponent,
    DashboardComponent,
    DatabaseComponent,
    SidenavComponent,
    ForDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSelectModule,
    MatSnackBarModule,
    HttpClientModule
  ],
  exports: [
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
