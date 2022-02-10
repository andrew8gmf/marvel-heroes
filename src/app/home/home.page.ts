import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public categoryIcons: Array<any> = [
    { icon: '../../assets/icons/hero.svg', color: 'linear-gradient(180deg, #005BEA 0%, #00C6FB 100%)' },
    { icon: '../../assets/icons/villain.svg', color: 'linear-gradient(180deg, #ED1D24 0%, #ED1F69 100%)' },
    { icon: '../../assets/icons/antihero.svg', color: 'linear-gradient(180deg, #B224EF 0%, #7579FF 100%)' },
    { icon: '../../assets/icons/alien.svg', color: 'linear-gradient(180deg, #0BA360 0%, #3CBA92 100%)' },
    { icon: '../../assets/icons/human.svg', color: 'linear-gradient(180deg, #FF7EB3 0%, #FF758C 100%)' }
  ];
  public iconSlideOptions: any = { slidesPerView: 5, freeMode: true }

  public categoryNames: Array<any> = [
    { name: 'Heróis' },
    { name: 'Vilões' },
    { name: 'Anti-heróis' },
    { name: 'Alienígenas' },
    { name: 'Humanos' }
  ];
  public slideOptions: any = { slidesPerView: 2.5, freeMode: true }

  categories = [];

  constructor(private characterService: CharacterService, private router: Router) {
    this.getData();
  }

  getData() {
    this.characterService.getData().subscribe(data => {
      console.log(data)
      for (var key in data) {
        this.categories.push(data[key])
      }
      console.log(this.categories)
    });
  }

  getUrl(x,y) {
    return x+y;
  }

  go(x,y) {
    const z = x+y
    this.router.navigate([z]);
  }

}
