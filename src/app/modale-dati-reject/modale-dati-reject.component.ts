import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modale-dati-reject',
  templateUrl: './modale-dati-reject.component.html',
  styleUrls: ['./modale-dati-reject.component.css']
})
export class ModaleDatiRejectComponent implements OnInit {

  currentDate = new Date().toLocaleDateString();

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  closeModal = () => {
    this.activeModal.close();
  }

}
