import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HospitalListComponent } from './app/hospital-list/hospital-list.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component'; // Ensure the path is correct
import { ModifyListItemComponent } from './app/modify-list-item/modify-list-item.component'; // Ensure the path is correct
import { appConfig } from './app/app.config';

// Define your routes
const routes: Routes = [
  { path: '', redirectTo: 'hospital-list', pathMatch: 'full' }, // Redirect to hospital list on empty path
  { path: 'hospital-list', component: HospitalListComponent }, // Route to the hospital list component
  { path: 'modify-list-item', component: ModifyListItemComponent }, // Route to modify list item component
  { path: '**', component: PageNotFoundComponent } // Wildcard route for a 404 page
];

// Bootstrap the application with routing
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    ...appConfig.providers
  ]
}).catch((err) => console.error(err));
