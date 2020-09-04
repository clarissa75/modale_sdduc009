import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaleDatiRejectComponent } from './modale-dati-reject.component';

describe('ModaleDatiRejectComponent', () => {
  let component: ModaleDatiRejectComponent;
  let fixture: ComponentFixture<ModaleDatiRejectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaleDatiRejectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaleDatiRejectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
