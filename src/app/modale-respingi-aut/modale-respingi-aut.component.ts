import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modale-respingi-aut',
  templateUrl: './modale-respingi-aut.component.html',
  styleUrls: ['./modale-respingi-aut.component.css']
})
export class ModaleRespingiAutComponent implements OnInit {

  currentDate = new Date().toLocaleDateString();

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  closeModal = () => {
    this.activeModal.close();
  }

}
