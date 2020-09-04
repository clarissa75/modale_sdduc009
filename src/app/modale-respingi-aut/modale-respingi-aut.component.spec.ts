import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaleRespingiAutComponent } from './modale-respingi-aut.component';

describe('ModaleRespingiAutComponent', () => {
  let component: ModaleRespingiAutComponent;
  let fixture: ComponentFixture<ModaleRespingiAutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaleRespingiAutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaleRespingiAutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
