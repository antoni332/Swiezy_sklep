import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { HeroComponent } from './hero/hero.component';
import { CategoriesComponent } from './categories/categories.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { CtaComponent } from './cta/cta.component';
import { FooterComponent } from './footer/footer.component';
import { AboutPreviewComponent } from "./about-preview/about-preview.component";


@Component({
  selector: 'app-root',
  imports: [
    NavComponent,
    HeroComponent,
    CategoriesComponent,
    WhyUsComponent,
    CtaComponent,
    FooterComponent,
    AboutPreviewComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shopApp';
}
