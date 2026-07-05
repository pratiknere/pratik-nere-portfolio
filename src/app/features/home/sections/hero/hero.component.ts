import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OWNER, STATS } from '../../../../core/constants/portfolio.constants';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit, AfterViewInit, OnDestroy {
  owner = OWNER;
  stats = STATS;

  typedLines = [
    'Hello World 👋',
    'My name is Pratik.',
    'I build scalable web applications.',
    'I create beautiful user experiences.',
  ];
  displayText = '';
  currentLine = 0;
  currentChar = 0;
  isDeleting = false;
  private timer: ReturnType<typeof setTimeout> | null = null;

  particles: { x: number; y: number; size: number; speed: number; opacity: number; dx: number; dy: number }[] = [];

  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private animFrame!: number;

  ngOnInit(): void {
    this.typeEffect();
    this.buildParticles();
  }

  ngAfterViewInit(): void {
    this.initCanvas();
  }

  ngOnDestroy(): void {
    if (this.timer) clearTimeout(this.timer);
    cancelAnimationFrame(this.animFrame);
  }

  private typeEffect(): void {
    const line = this.typedLines[this.currentLine];
    const speed = this.isDeleting ? 40 : 80;

    if (!this.isDeleting && this.currentChar <= line.length) {
      this.displayText = line.substring(0, this.currentChar++);
    } else if (this.isDeleting && this.currentChar >= 0) {
      this.displayText = line.substring(0, this.currentChar--);
    }

    if (!this.isDeleting && this.currentChar > line.length) {
      this.timer = setTimeout(() => { this.isDeleting = true; this.typeEffect(); }, 2000);
      return;
    }
    if (this.isDeleting && this.currentChar < 0) {
      this.isDeleting = false;
      this.currentChar = 0;
      this.currentLine = (this.currentLine + 1) % this.typedLines.length;
    }

    this.timer = setTimeout(() => this.typeEffect(), speed);
  }

  private buildParticles(): void {
    for (let i = 0; i < 80; i++) {
      this.particles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.3 + 0.1,
        opacity: Math.random() * 0.6 + 0.2,
        dx: (Math.random() - 0.5) * 0.2,
        dy: (Math.random() - 0.5) * 0.2,
      });
    }
  }

  private initCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener('resize', resize);
    this.drawCanvas();
  }

  private drawCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    const ctx = this.ctx;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.particles.forEach(p => {
      p.x += p.dx; p.y += p.dy;
      if (p.x < 0 || p.x > 100) p.dx *= -1;
      if (p.y < 0 || p.y > 100) p.dy *= -1;

      ctx.beginPath();
      ctx.arc(p.x / 100 * canvas.width, p.y / 100 * canvas.height, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(108,99,255,${p.opacity})`;
      ctx.fill();
    });

    // Draw connections
    this.particles.forEach((a, i) => {
      this.particles.slice(i + 1).forEach(b => {
        const dx = (a.x - b.x) / 100 * canvas.width;
        const dy = (a.y - b.y) / 100 * canvas.height;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(a.x / 100 * canvas.width, a.y / 100 * canvas.height);
          ctx.lineTo(b.x / 100 * canvas.width, b.y / 100 * canvas.height);
          ctx.strokeStyle = `rgba(108,99,255,${0.15 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });
    });

    this.animFrame = requestAnimationFrame(() => this.drawCanvas());
  }

  scrollToAbout(): void {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  }

  downloadResume(): void {
    const a = document.createElement('a');
    a.href = this.owner.resumeUrl;
    a.download = 'Pratik-Nere-Resume.pdf';
    a.click();
  }

  scrollToContact(): void {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}
