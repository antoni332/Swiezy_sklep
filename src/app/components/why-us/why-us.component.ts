import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-why-us',
  imports: [CommonModule],
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.css']
})
export class WhyUsComponent {
  values = [
    { icon: 'bi bi-truck', title: 'Dostawa', text: 'Bezpłatna dostawa powyżej 50 zł' },
    { icon: 'bi bi-shield-check', title: 'Gwarancja jakości', text: '100% świeżych produktów' },
    { icon: 'bi bi-clock-history', title: 'Codziennie świeże', text: 'Nowe dostawy każdego dnia rano' },
    { icon: 'bi bi-heart', title: 'Lokalne produkty', text: 'Wspieramy lokalnych producentów' }
  ];
}
