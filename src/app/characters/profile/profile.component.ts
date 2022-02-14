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

  id;
  character = [];
  abilities;
  characteristics; height; weight;
  movies;

  icons = [];
  public iconSlideOptions: any = { slidesPerView: 4, freeMode: true }

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
              { path: '../../../assets/icons/weight.svg', content: this.weight.value },
              { path: '../../../assets/icons/height.svg', content: this.height.value },
              { path: '../../../assets/icons/universe.svg', content: this.characteristics.universe }
            ];

            return this.character, this.abilities, this.characteristics, this.height, this.weight, this.movies
          }
        }
      }
    });
  }

  getImg(x) {
    return '../../../assets/chars/' + x;
  }

  goTo(x) {
    this.router.navigate([x]);
  }

}
