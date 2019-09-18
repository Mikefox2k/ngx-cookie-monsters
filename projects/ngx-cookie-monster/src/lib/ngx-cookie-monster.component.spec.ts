import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCookieMonsterComponent } from './ngx-cookie-monster.component';

describe('NgxCookieMonsterComponent', () => {
  let component: NgxCookieMonsterComponent;
  let fixture: ComponentFixture<NgxCookieMonsterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCookieMonsterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCookieMonsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
