import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HospitalListComponent } from './app/hospital-list/hospital-list.component'; // Ensure the path is correct
import { appConfig } from './app/app.config';

// Define the routes for your application
const routes: Routes = [
  { path: 'hospital-list', component: HospitalListComponent },
  { path: '', redirectTo: 'hospital-list', pathMatch: 'full' },

];


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    ...appConfig.providers
  ]
}).catch((err) => console.error(err));
