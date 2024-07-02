import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveBindingComponent } from './prove-binding.component';

describe('ProveBindingComponent', () => {
  let component: ProveBindingComponent;
  let fixture: ComponentFixture<ProveBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProveBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProveBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
