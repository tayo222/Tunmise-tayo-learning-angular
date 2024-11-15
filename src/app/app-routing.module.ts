import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import the components that will be lazily loaded
import { HospitalListComponent } from './hospital-list/hospital-list.component';

const routes: Routes = [
  { path: '', component: HospitalListComponent }, // Eager loaded by default
  {
    path: 'modify',
    loadChildren: () => import('./modify/modify.module').then(m => m.ModifyModule)  // Lazy-loaded module
  },
  { path: '**', redirectTo: '' } // Fallback for any unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
