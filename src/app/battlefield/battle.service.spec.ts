import { TestBed, inject } from '@angular/core/testing';

import { BattleService } from './battle.service';
import {Soldier} from './soldier'

describe('BattleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BattleService]
    });
  });

  it('should be created', inject([BattleService], (service: BattleService) => {
    expect(service).toBeTruthy();
  }));
  it('should return the No of hits require to kill the enemy' , inject([BattleService], (service: BattleService) =>{
    let armyObj = new Soldier({type: 'Defense',damagePerHit : 10,health : 390});
    let enemyObj = new Soldier({type : 'Attack',damagePerHit : 8,health : 45});
    let enemyCount = 1;
    let nitRequireToKillEnemy = service.calculateNoHitsRequiredToKillEnemy(enemyObj,armyObj,enemyCount);
    expect(nitRequireToKillEnemy).toEqual(5);
  }));
});
