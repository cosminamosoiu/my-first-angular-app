import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../heroes-mock';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero?: Hero;

  constructor() { }

  ngOnInit(): void {
  }


onSelect(hero: Hero): void {
  this.selectedHero = hero;
}

updateHero(updatedHero: Hero): void{
  this.heroes = this.heroes.map(hero =>{
    if (hero.id === updatedHero.id){
      return updatedHero;}

  return hero;
    })
  }
}
