import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponente } from './navbar-componente/navbar-componente';
import { ImgcarruselComponente } from './imgcarrusel-componente/imgcarrusel-componente';
import { NotificacionesComponente } from './notificaciones-componente/notificaciones-componente';
import { TriobajoComponente } from './triobajo-componente/triobajo-componente';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponente,
    ImgcarruselComponente,
    NotificacionesComponente,
    TriobajoComponente,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('home-gecova');
}
