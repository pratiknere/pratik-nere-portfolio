import { Component, OnInit, signal, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { CursorComponent } from './shared/components/cursor/cursor.component';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { ThemeService } from './core/services/theme.service';
import { CursorService } from './core/services/cursor.service';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, NavbarComponent, CursorComponent, LoadingComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit, AfterViewInit {
  isLoading = signal(true);

  constructor(
    public themeService: ThemeService,
    private cursorService: CursorService,
  ) {}

  ngOnInit(): void {
    setTimeout(() => this.isLoading.set(false), 2200);
  }

  ngAfterViewInit(): void {
    AOS.init({ duration: 800, once: true, offset: 80, easing: 'ease-out-cubic' });
    this.cursorService.init();
  }
}
