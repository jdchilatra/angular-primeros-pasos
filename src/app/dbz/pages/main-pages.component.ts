import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-pages.component.html'
})

export class MainPagesComponent {

  get characters() : Character[] {
    return [...this.dbzService.characters];
  }

  constructor(private dbzService : DbzService){

  }

  onDeleteCharacter(id : string): void{
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character : Character) : void{
    this.dbzService.AddCharacter(character);
  }
}
