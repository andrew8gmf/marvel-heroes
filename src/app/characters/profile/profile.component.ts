import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {
  
  public aColor: string = 'rgb(0, 0, 0, 0)';
  
  id;
  character = [];
  abilities;
  characteristics; height; weight;
  movies;

  icons = [];
  attributes = [];
  stats = [];

  public iconSlideOptions: any = { slidesPerView: 4, freeMode: true }
  public MovieSlideOptions: any = { slidesPerView: 2.5, freeMode: true }

  constructor(private route: ActivatedRoute, private router: Router, private characterService: CharacterService) {
    this.getData();
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  getData() {
    this.characterService.getData().subscribe(data => {
      for (var cat in data) {
        for (var char in data[cat]) {
          if (data[cat][char].id == this.id) {
            this.character = data[cat][char]
            this.abilities = data[cat][char].abilities
            this.characteristics = data[cat][char].characteristics
            this.height = data[cat][char].characteristics.height
            this.weight = data[cat][char].characteristics.weight
            this.movies = data[cat][char].movies

            this.icons = [
              { path: '../../../assets/icons/age.svg', content: this.characteristics.birth },
              { path: '../../../assets/icons/weight.svg', content: this.weight.value + ' ' + this.weight.unity },
              { path: '../../../assets/icons/height.svg', content: this.height.value + ' ' + this.weight.unity },
              { path: '../../../assets/icons/universe.svg', content: this.characteristics.universe }
            ];

            this.attributes = [
              { name: 'Força', value: this.abilities.force, formatted: Math.round(this.abilities.force * 44 / 100) },
              { name: 'Inteligência', value: this.abilities.intelligence, formatted: Math.round(this.abilities.intelligence * 44 / 100) },
              { name: 'Agilidade', value: this.abilities.agility, formatted: Math.round(this.abilities.agility * 44 / 100) },
              { name: 'Resistência', value: this.abilities.endurance, formatted: Math.round(this.abilities.endurance * 44 / 100) },
              { name: 'Velocidade', value: this.abilities.velocity, formatted: Math.round(this.abilities.velocity * 44 / 100) }
            ];

            this.stats = Array(44).fill(0);
            
            return this.character, this.abilities, this.characteristics, this.height, this.weight, this.movies
          }
        }
      }
    });
  }

  getCharImg(x) {
    return '../../../assets/chars/' + x;
  }

  getMovieImg(x) {
    return '../../../assets/' + x;
  }

  goTo(x) {
    this.router.navigate([x]);
  }

  scrolling() {
    return this.aColor = 'rgb(0, 0, 0, .7)';
  }

}
