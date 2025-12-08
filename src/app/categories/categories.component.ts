import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories = [
    {
      title: 'Pieczywo',
      icon: 'bi bi-basket',
      img: 'https://images.unsplash.com/photo-1733714953921-dc38255ce866',
      text: 'Świeże pieczywo codziennie z lokalnej piekarni'
    },
    {
      title: 'Owoce',
      icon: 'bi bi-cup-straw',
      img: 'https://images.unsplash.com/photo-1716141458506-af5fe16bda11',
      text: 'Świeże owoce z lokalnych sadów'
    },
    {
      title: 'Warzywa',
      icon: 'bi bi-flower1',
      img: 'https://images.unsplash.com/photo-1748342319942-223b99937d4e',
      text: 'Świeże warzywa prosto od lokalnych rolników'
    }
  ];
}
