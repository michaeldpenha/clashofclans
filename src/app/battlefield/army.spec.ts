import { inject } from '@angular/core/testing';

import { BattleService } from './battle.service';
import {Soldier} from './soldier';
import {Army} from './army'

describe('to check the strength of an army', () => {
  it('should return the total strength of an army' , () =>{
    let armyStrenth = new Army('Attack',{'Attack' : [{type : 'Barbarians',health : 45 , damagePerHit : 8}]});
    expect(armyStrenth.health).toEqual(45);
  });
});
