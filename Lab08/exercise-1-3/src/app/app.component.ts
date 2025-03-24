import {Component} from '@angular/core';
import {HeroesComponent} from './heroes/heroes.component';
import { InputFormatDirective } from '../input-format.directive';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeroesComponent,InputFormatDirective],
})
export class AppComponent {
  title = 'Tour of Heroes';
}
