import { Component, OnInit } from '@angular/core';
import {Soldier} from './soldier';
import {Army} from './army';

import {BattleService} from './battle.service';


@Component({
  selector: 'app-battlefield',
  templateUrl: './battlefield.component.html',
  styleUrls: ['./battlefield.component.css']
})
export class BattlefieldComponent {
  defenseObj : any;
  attackObj : any;
  fieldModel : any = [];
  battleOutcome : string;
  armyComposition  : any = {'Attack' : [{type : 'Barbarians',health : 45 , damagePerHit : 8}],'Defense':[{type : 'Cannons',health : 390 , damagePerHit : 10}]};
  constructor(private battleService : BattleService) { 
    this.soliderObjCreation();
    this.createFieldModel();
  }
  soliderObjCreation (){
    this.attackObj = new Army('Attack',this.armyComposition);
    this.defenseObj = new Army('Defense',this.armyComposition);
  }
  createFieldModel (){
    for(let keys in this.armyComposition){
        for(let obj of this.armyComposition[keys]){
          this.fieldModel.push(obj['type']);
        }
    }
  }
  battleResult(hitsRequireToKillAttacker : number , hitsRequireToKillDestroyer : number){
   if(hitsRequireToKillAttacker > hitsRequireToKillDestroyer){
      this.battleOutcome =  'Attack wins.';
    }else{
      this.battleOutcome = 'Defense wins.';
    }
    alert(this.battleOutcome);
  }
  battleBegin(){
    let defenseArmyCount = this.battleService.calculateEnemyCount(this,'Defense');
    let attackArmyCount = this.battleService.calculateEnemyCount(this,'Attack');
    let noOfHitsRequiredToKillAttacker = this.battleService.calculateNoHitsRequiredToKillEnemy(this.attackObj,this.defenseObj,attackArmyCount);
    let noOfHitsRequiredToDestroyDefense = this.battleService.calculateNoHitsRequiredToKillEnemy(this.defenseObj,this.attackObj,defenseArmyCount);
    this.battleResult(noOfHitsRequiredToKillAttacker,noOfHitsRequiredToDestroyDefense);
  }
}
