import { TestBed, async } from '@angular/core/testing';

import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { BattlefieldComponent } from './battlefield/battlefield.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BattlefieldComponent
      ],
      imports : [
        FormsModule
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Clash of Clans - Determine Battle Winner'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Clash of Clans - Determine Battle Winner');
  }));
});
