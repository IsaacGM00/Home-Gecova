import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriobajoComponente } from './triobajo-componente';

describe('TriobajoComponente', () => {
  let component: TriobajoComponente;
  let fixture: ComponentFixture<TriobajoComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TriobajoComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TriobajoComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
