import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HospitalListComponent } from './hospital-list/hospital-list.component';
import { ModifyComponent } from './modify/modify.component';
import { HighlightOnFocusDirective } from './highlight-on-focus.directive';

// Angular Material modules
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {routes} from "./app.routes";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HospitalListComponent,
    ModifyComponent,
    HighlightOnFocusDirective,
    // Angular Material modules
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
  ],
})
export class AppModule {}
