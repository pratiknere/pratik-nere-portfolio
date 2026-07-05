import { Component } from '@angular/core';
import { HeroComponent } from './sections/hero/hero.component';
import { AboutComponent } from './sections/about/about.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { JourneyComponent } from './sections/journey/journey.component';
import { CertificatesComponent } from './sections/certificates/certificates.component';
import { AchievementsComponent } from './sections/achievements/achievements.component';
import { GymComponent } from './sections/gym/gym.component';
import { TravelComponent } from './sections/travel/travel.component';
import { ContactComponent } from './sections/contact/contact.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    JourneyComponent,
    CertificatesComponent,
    AchievementsComponent,
    GymComponent,
    TravelComponent,
    ContactComponent,
    FooterComponent,
  ],
})
export class HomeComponent {}
