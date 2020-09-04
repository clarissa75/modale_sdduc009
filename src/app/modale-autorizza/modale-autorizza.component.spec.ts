import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaleAutorizzaComponent } from './modale-autorizza.component';

describe('ModaleAutorizzaComponent', () => {
  let component: ModaleAutorizzaComponent;
  let fixture: ComponentFixture<ModaleAutorizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaleAutorizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaleAutorizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
