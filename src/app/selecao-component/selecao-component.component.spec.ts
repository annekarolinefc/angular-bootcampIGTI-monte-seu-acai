import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecaoComponentComponent } from './selecao-component.component';

describe('SelecaoComponentComponent', () => {
  let component: SelecaoComponentComponent;
  let fixture: ComponentFixture<SelecaoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecaoComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecaoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
