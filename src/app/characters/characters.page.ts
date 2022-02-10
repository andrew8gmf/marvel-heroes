import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

  constructor(private router: Router) {
    this.go();
  }

  ngOnInit() {
  }

  go() {
    this.router.navigate(['home']);
  }

}
