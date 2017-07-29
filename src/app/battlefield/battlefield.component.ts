import { Component, OnInit } from '@angular/core';
import {Soldier} from './soldier';

import {BattleService} from './battle.service';


@Component({
  selector: 'app-battlefield',
  templateUrl: './battlefield.component.html',
  styleUrls: ['./battlefield.component.css']
})
export class BattlefieldComponent {
  cannonObj : any;
  barbarianObj : any;
  battleOutcome : string;
  barbrianCountModel : number = 0;
  cannonCountModel : number = 0;
  constructor(private battleService : BattleService) { 
    this.soliderObjCreation();
  }
  soliderObjCreation (){
    this.cannonObj = new Soldier('Defense',10,390);
    this.barbarianObj = new Soldier('Attack',8,45);
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
    let noOfHitsRequiredToKillAttacker = this.battleService.calculateNoHitsRequiredToKillEnemy(this.barbarianObj,this.cannonObj,this.barbrianCountModel);
    let noOfHitsRequiredToDestroyDefense = this.battleService.calculateNoHitsRequiredToKillEnemy(this.cannonObj,this.barbarianObj,this.cannonCountModel);
    this.battleResult(noOfHitsRequiredToKillAttacker,noOfHitsRequiredToDestroyDefense);
  }
}
