import { Component, OnInit } from '@angular/core';

import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  // Esto es la Inyeccion de dependencias de Angular
  constructor( private dbzService : DbzService ) {  }

  // Expongo un get para no publicar el servicio
  get characters() : Character[] {
    return [...this.dbzService.characters];
  }

  // Metodo que interactuan con el service para no publicar el servicio
  onDeleteCharacter( id : string ) : void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter( character : Character ) : void {
    this.dbzService.addCharacter(character);
  }

}
