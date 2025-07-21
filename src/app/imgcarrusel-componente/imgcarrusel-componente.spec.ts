import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgcarruselComponente } from './imgcarrusel-componente';

describe('ImgcarruselComponente', () => {
  let component: ImgcarruselComponente;
  let fixture: ComponentFixture<ImgcarruselComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgcarruselComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgcarruselComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
