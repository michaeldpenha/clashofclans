import { inject } from '@angular/core/testing';

import { BattleService } from './battle.service';
import {Soldier} from './soldier';
import {Army} from './army'

describe('to check the strength of an army', () => {
  it('should return the army' , () =>{
    let armyStrenth = new Army([new Soldier('Barabrians',10,390),new Soldier('Archers',8,45)]);
    expect(armyStrenth.health).toEqual(435);
  });
});
