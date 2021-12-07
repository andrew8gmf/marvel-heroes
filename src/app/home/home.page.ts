import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public categories: Array<any> = [
    { icon: '../../assets/icons/hero.svg', color: 'linear-gradient(180deg, #005BEA 0%, #00C6FB 100%)' },
    { icon: '../../assets/icons/villain.svg', color: 'linear-gradient(180deg, #ED1D24 0%, #ED1F69 100%)' },
    { icon: '../../assets/icons/antihero.svg', color: 'linear-gradient(180deg, #B224EF 0%, #7579FF 100%)' },
    { icon: '../../assets/icons/alien.svg', color: 'linear-gradient(180deg, #0BA360 0%, #3CBA92 100%)' },
    { icon: '../../assets/icons/human.svg', color: 'linear-gradient(180deg, #FF7EB3 0%, #FF758C 100%)' }
  ];
  public slidesOptions: any = { slidesPerView: 5, freeMode: true }

  constructor() {}

}
