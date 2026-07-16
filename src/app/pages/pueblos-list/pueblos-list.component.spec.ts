import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PueblosListComponent } from './pueblos-list.component';

describe('PueblosListComponent', () => {
  let component: PueblosListComponent;
  let fixture: ComponentFixture<PueblosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PueblosListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PueblosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
