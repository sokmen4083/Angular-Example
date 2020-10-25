import { Routes } from '@angular/router';

import { KurseComponent } from '../kurse/kurse.component';
import { DishDetailComponent } from '../dishdetail/dishdetail.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

export const routes: Routes = [
  { path: 'home',          component: HomeComponent },
  { path: 'kurse',         component: KurseComponent },
  { path: 'contactus',     component: ContactComponent },
  { path: 'aboutus',     component: AboutComponent },
  { path: 'dishdetail/:id',component: DishDetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];