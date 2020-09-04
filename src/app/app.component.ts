import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModaleAutorizzaComponent } from './modale-autorizza/modale-autorizza.component';
import { ModaleDatiRejectComponent } from './modale-dati-reject/modale-dati-reject.component';
import { ModaleRespingiAutComponent } from './modale-respingi-aut/modale-respingi-aut.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SDDUC009';


  constructor( private modalService: NgbModal){}
  openAu = () => {
    const modal = this.modalService.open(ModaleAutorizzaComponent, {size: 'xl'});
  }
    openRe = () => {
      const modal = this.modalService.open(ModaleDatiRejectComponent, {size: 'xl'});
    }
      openRi = () => {
        const modal = this.modalService.open(ModaleRespingiAutComponent, {size: 'xl'});

}
}
