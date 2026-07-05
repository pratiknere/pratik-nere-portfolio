import { Injectable, NgZone } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CursorService {
  private dot!: HTMLElement;
  private ring!: HTMLElement;
  private mouseX = 0;
  private mouseY = 0;
  private ringX = 0;
  private ringY = 0;

  constructor(private zone: NgZone) {}

  init(): void {
    this.dot  = document.querySelector('.cursor-dot')  as HTMLElement;
    this.ring = document.querySelector('.cursor-ring') as HTMLElement;
    if (!this.dot || !this.ring) return;

    this.zone.runOutsideAngular(() => {
      document.addEventListener('mousemove', (e) => {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
        this.dot.style.left = `${e.clientX - 4}px`;
        this.dot.style.top  = `${e.clientY - 4}px`;
      });
      this.animate();

      document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
        el.addEventListener('mouseenter', () => this.ring.classList.add('hovered'));
        el.addEventListener('mouseleave', () => this.ring.classList.remove('hovered'));
      });
    });
  }

  private animate(): void {
    this.ringX += (this.mouseX - this.ringX) * 0.12;
    this.ringY += (this.mouseY - this.ringY) * 0.12;
    this.ring.style.left = `${this.ringX - 18}px`;
    this.ring.style.top  = `${this.ringY - 18}px`;
    requestAnimationFrame(() => this.animate());
  }
}
