import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  public onDeleteId(id?: string):void{
    console.log({id});
    this.onDeleteCharacter.emit(id);
  };

  // emitIndex(index: number): void{
  //   console.log({index});
  //   this.onDeleteCharacter.emit(index);
  // }


}
