import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuebloDetailComponent } from './pueblo-detail.component';

describe('PuebloDetailComponent', () => {
  let component: PuebloDetailComponent;
  let fixture: ComponentFixture<PuebloDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PuebloDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PuebloDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
