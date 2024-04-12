import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceResponsableComponent } from './interface-responsable.component';

describe('InterfaceResponsableComponent', () => {
  let component: InterfaceResponsableComponent;
  let fixture: ComponentFixture<InterfaceResponsableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterfaceResponsableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterfaceResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
