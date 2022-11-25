import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { LivresComponent } from './livres/livres.component';
import { AddLivreComponent } from './add-livre/add-livre.component';
import { UpdateLivreComponent } from './update-livre/update-livre.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParGenreComponent } from './recherche-par-genre/recherche-par-genre.component';

@NgModule({
  declarations: [
    AppComponent,
    LivresComponent,
    AddLivreComponent,
    UpdateLivreComponent,
    RechercheParGenreComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
