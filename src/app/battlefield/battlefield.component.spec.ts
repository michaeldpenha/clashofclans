import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule }   from '@angular/forms';
import { BattlefieldComponent } from './battlefield.component';

import {Soldier} from './soldier';
import {BattleService} from './battle.service';

describe('BattlefieldComponent', () => {
  let component: BattlefieldComponent;
  let fixture: ComponentFixture<BattlefieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattlefieldComponent ],
      imports : [FormsModule],
      providers : [BattleService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattlefieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  it('Army Attacks the village with 1 Cannon and 1 Barbarian' , () => {
    fixture = TestBed.createComponent(BattlefieldComponent);
    component = fixture.componentInstance;
    component.cannonCountModel = 1;
    component.barbrianCountModel = 1;
    component.battleBegin();
    expect(component.battleOutcome).toEqual('Defense wins.');
  });
  it('Army Attacks the village with 1 Cannon and 10 Barbarian' , () => {
    fixture = TestBed.createComponent(BattlefieldComponent);
    component = fixture.componentInstance;
    component.cannonCountModel = 1;
    component.barbrianCountModel = 10;
    component.battleBegin();
    expect(component.battleOutcome).toEqual('Attack wins.');
  });
});
