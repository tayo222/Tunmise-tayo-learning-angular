import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HospitalListComponent } from './hospital-list/hospital-list.component'; // Ensure this path is correct
import { ModifyComponent } from './modify/modify.component'; // Ensure this path is correct
import { routes } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // Configure routing
    HospitalListComponent, // Import standalone component
    ModifyComponent // Import standalone component
  ],

})
export class AppModule {}
