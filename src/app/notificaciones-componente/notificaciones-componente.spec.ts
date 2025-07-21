import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacionesComponente } from './notificaciones-componente';

describe('NotificacionesComponente', () => {
  let component: NotificacionesComponente;
  let fixture: ComponentFixture<NotificacionesComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificacionesComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificacionesComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
