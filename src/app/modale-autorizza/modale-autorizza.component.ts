import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modale-autorizza',
  templateUrl: './modale-autorizza.component.html',
  styleUrls: ['./modale-autorizza.component.css']
})
export class ModaleAutorizzaComponent implements OnInit {

  currentDate = new Date().toLocaleDateString();

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  closeModal = () => {
    this.activeModal.close();
  }
}
