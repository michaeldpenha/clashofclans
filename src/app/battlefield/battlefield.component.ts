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
  battleOutcome : string;
  barbrianCountModel : number = 0;
  cannonCountModel : number = 0;
  constructor(private battleService : BattleService) { 
    this.soliderObjCreation();
  }
  soliderObjCreation (){
    this.defenseObj = new Army([new Soldier('Cannons',10,390)]);
    this.attackObj = new Army([new Soldier('Barbarians',8,45)]);
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
    let noOfHitsRequiredToKillAttacker = this.battleService.calculateNoHitsRequiredToKillEnemy(this.attackObj,this.defenseObj,this.barbrianCountModel);
    let noOfHitsRequiredToDestroyDefense = this.battleService.calculateNoHitsRequiredToKillEnemy(this.defenseObj,this.attackObj,this.cannonCountModel);
    this.battleResult(noOfHitsRequiredToKillAttacker,noOfHitsRequiredToDestroyDefense);
  }
}
