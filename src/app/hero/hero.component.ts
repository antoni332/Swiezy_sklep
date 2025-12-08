import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  values = [
    { icon: 'bi bi-award', title: 'Najwyższa jakość', text: 'Sprawdzone produkty od lokalnych dostawców' },
    { icon: 'bi bi-clock-history', title: 'Świeże codziennie', text: 'Nowe dostawy każdego dnia' },
    { icon: 'bi bi-geo-alt', title: 'Lokalne wsparcie', text: 'Wspieramy lokalną społeczność' }
  ];
}
