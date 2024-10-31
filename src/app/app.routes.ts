import { Routes } from '@angular/router';
import { HospitalListComponent } from './hospital-list/hospital-list.component';
import { ModifyComponent } from './modify/modify.component';

export const routes: Routes = [
  { path: '', component: HospitalListComponent }, // Default route
  { path: 'modify', component: ModifyComponent }, // Route for modifying items
  { path: '**', redirectTo: '' } // Redirect any unknown paths to the home
];
