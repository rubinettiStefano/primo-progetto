import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCitazioniComponent } from './lista-citazioni.component';

describe('ListaCitazioniComponent', () => {
  let component: ListaCitazioniComponent;
  let fixture: ComponentFixture<ListaCitazioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaCitazioniComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCitazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
