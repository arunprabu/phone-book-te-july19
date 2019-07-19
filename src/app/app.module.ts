import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ProductsModule } from './products/products.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './header/search.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { CpbComponent } from './concepts/cpb/cpb.component';
import { CebComponent } from './concepts/ceb/ceb.component';
import { ColorizrDirective } from './concepts/colorizr.directive';
import { AddContactComponent } from './contacts/add-contact/add-contact.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { EllipsisPipe } from './shared/pipes/ellipsis.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    SearchComponent,
    ConceptsComponent,
    ContactsComponent,
    AboutComponent,
    CpbComponent,
    CebComponent,
    ColorizrDirective,
    AddContactComponent,
    ContactDetailsComponent,
    PageNotFoundComponent,
    EllipsisPipe
  ],
  imports: [
    BrowserModule,
    ProductsModule, // Feature Module imported
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Step3: AppModule be bootstrapped with a Component
})
export class AppModule { }
