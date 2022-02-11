import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  id;
  character = [];
  categories = [];

  constructor(private route: ActivatedRoute, private characterService: CharacterService) {
    this.getData();
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  getData() {
    this.characterService.getData().subscribe(data => {
      for (var key in data) {
        this.categories.push(data[key])
      }

      for (var key in this.categories) {
        this.character = this.categories[key].find(x => x.id == this.id)
        if (this.character) {
          console.log(this.character)
          return this.character
        }
      }
    });
  }

  getUrl(x,y) {
    return x+y;
  }

}
