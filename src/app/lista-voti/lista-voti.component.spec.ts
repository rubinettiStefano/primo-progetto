import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVotiComponent } from './lista-voti.component';

describe('ListaVotiComponent', () => {
  let component: ListaVotiComponent;
  let fixture: ComponentFixture<ListaVotiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaVotiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaVotiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
