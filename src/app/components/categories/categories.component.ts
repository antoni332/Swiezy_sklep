import {CommonModule, NgOptimizedImage} from '@angular/common';
import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

interface CategoryCard {
  title: string;
  icon: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-categories',
  imports: [CommonModule, RouterLink],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  // TODO: replace with data from API
  categories: CategoryCard[] = [
    {
      title: 'Pieczywo',
      icon: 'bi bi-basket',
      image: 'https://images.unsplash.com/photo-1733714953921-dc38255ce866',
      description: 'Świeże pieczywo codziennie z lokalnej piekarni'
    },
    {
      title: 'Owoce',
      icon: 'bi bi-cup-straw',
      image: 'https://images.unsplash.com/photo-1716141458506-af5fe16bda11',
      description: 'Świeże owoce z lokalnych sadów'
    },
    {
      title: 'Warzywa',
      icon: 'bi bi-flower1',
      image: 'https://images.unsplash.com/photo-1748342319942-223b99937d4e',
      description: 'Świeże warzywa prosto od lokalnych rolników'
    }
  ];
}
