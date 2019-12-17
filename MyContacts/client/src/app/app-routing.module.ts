import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';

// import { OktaAuthGuard } from '@okta/okta-angular';

const routes: Routes = [
  { path: '', redirectTo: '/contact-list', pathMatch: 'full' },
  {
    path: 'contact-list',
    component: ContactListComponent,
    // canActivate: [OktaAuthGuard]
  },
  {
    path: 'contact-add',
    component: ContactEditComponent,
    // canActivate: [OktaAuthGuard]
  },
  {
    path: 'contact-edit/:id',
    component: ContactEditComponent,
    // canActivate: [OktaAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
