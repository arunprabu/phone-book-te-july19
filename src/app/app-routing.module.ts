import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConceptsComponent } from './concepts/concepts.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { AddContactComponent } from './contacts/add-contact/add-contact.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "", redirectTo: "/concepts", pathMatch: 'full' },
  { path: "concepts", component: ConceptsComponent },
  { path: "contacts", component: ContactsComponent },
  { path: "contacts/new", component: AddContactComponent, canActivate: [ AuthGuard ] },
  { path: "contacts/:id", component: ContactDetailsComponent },
  { path: "about", component: AboutComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
