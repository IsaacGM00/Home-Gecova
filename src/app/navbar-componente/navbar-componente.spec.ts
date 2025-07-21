import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponente } from './navbar-componente';

describe('NavbarComponente', () => {
  let component: NavbarComponente;
  let fixture: ComponentFixture<NavbarComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
