import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CahierTexteComponent } from './cahier-texte.component';

describe('CahierTexteComponent', () => {
  let component: CahierTexteComponent;
  let fixture: ComponentFixture<CahierTexteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CahierTexteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CahierTexteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
