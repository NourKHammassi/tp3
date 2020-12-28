import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './composants/accueil/accueil.component';
import { ListmaterielComponent } from './composants/informatique/listmateriel/listmateriel.component';
import { MaterielComponent } from './composants/informatique/materiel/materiel.component';
import { DetailmaterielComponent } from './composants/informatique/detailmateriel/detailmateriel.component';
import { CommentComponent } from './composants/commenaires/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ListmaterielComponent,
    MaterielComponent,
    DetailmaterielComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
