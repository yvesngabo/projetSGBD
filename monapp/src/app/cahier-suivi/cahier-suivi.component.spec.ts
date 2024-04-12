import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CahierSuiviComponent } from './cahier-suivi.component';

describe('CahierSuiviComponent', () => {
  let component: CahierSuiviComponent;
  let fixture: ComponentFixture<CahierSuiviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CahierSuiviComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CahierSuiviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
