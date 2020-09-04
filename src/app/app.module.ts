import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModaleDatiRejectComponent } from './modale-dati-reject/modale-dati-reject.component';
import { ModaleRespingiAutComponent } from './modale-respingi-aut/modale-respingi-aut.component';
import { ModaleAutorizzaComponent } from './modale-autorizza/modale-autorizza.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ModaleDatiRejectComponent,
    ModaleRespingiAutComponent,
    ModaleAutorizzaComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
