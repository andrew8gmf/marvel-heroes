import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharactersPageRoutingModule } from './characters-routing.module';

import { CharactersPage } from './characters.page';
import { ProfileComponent } from './profile/profile.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharactersPageRoutingModule,
    SwiperModule
  ],
  declarations: [CharactersPage, ProfileComponent]
})
export class CharactersPageModule {}
