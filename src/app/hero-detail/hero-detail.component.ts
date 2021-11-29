import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Hero } from '../hero';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit, OnDestroy {
 @Input() hero?: Hero | null;
 @Output() updatedHero: EventEmitter<Hero> = new EventEmitter<Hero>();

  constructor() {
    this.hero = null;
  }

  ngOnInit(): void {
  }

  onUpdateHero(inputEl:HTMLInputElement): void{
      const newHeroObject = {

      }
  }

  ngOnDestroy(): void {
  }


}
