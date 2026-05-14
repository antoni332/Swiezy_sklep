import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [CommonModule, RouterLink],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  pros = [
    { icon: 'bi bi-award', title: 'Najwyższa jakość', text: 'Sprawdzone produkty od lokalnych dostawców' },
    { icon: 'bi bi-clock-history', title: 'Świeże codziennie', text: 'Nowe dostawy każdego dnia' },
    { icon: 'bi bi-geo-alt', title: 'Lokalne wsparcie', text: 'Wspieramy lokalną społeczność' }
  ];
}
