import { Component, OnInit } from '@angular/core';
import {Soldier} from './soldier';


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
  constructor() { 
    this.soliderObjCreation();
  }
  soliderObjCreation (){
    this.cannonObj = new Soldier('Defense',10,390);
    this.barbarianObj = new Soldier('Attack',8,45);
  }
  battleComposition(cannonCount : number , barbarianCount : number){
    let noOfHitsRequiredToKillBarbarian = Math.ceil(this.barbarianObj.health/ this.cannonObj.damagePerHit) * barbarianCount;
    let noOfHitsRequiredToKillCannon = Math.ceil(this.cannonObj.health/this.barbarianObj.damagePerHit) * cannonCount;
    if(noOfHitsRequiredToKillBarbarian > noOfHitsRequiredToKillCannon){
      this.battleOutcome =  'Attack wins.';
    }else{
      this.battleOutcome = 'Defense wins.';
    }
    alert(this.battleOutcome);
  }
  battleBegin(){
    this.battleComposition(this.cannonCountModel,this.barbrianCountModel);
    
  }

}
