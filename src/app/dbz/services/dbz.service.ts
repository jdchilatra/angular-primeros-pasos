import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() { }

  public characters : Character[] = [{
    id : uuid(),
    name : 'Krillon',
    power : 1000
  },{
    id : uuid(),
    name : 'Goku',
    power : 9500
  },{
    id : uuid(),
    name : 'Vegeta',
    power : 7500
  }]

  public AddCharacter(character : Character) : void {
    const newCharacter : Character = {...character, id: uuid()};
    this.characters.push(newCharacter);
  }

  /*
  public onDeleteCharacter(index : number){
    this.characters.splice(index,1);
  }*/

  public deleteCharacterById(id:string){
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
