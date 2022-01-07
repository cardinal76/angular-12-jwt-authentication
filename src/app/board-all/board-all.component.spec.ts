import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardAllComponent } from './board-all.component';

describe('BoardAllComponent', () => {
  let component: BoardAllComponent;
  let fixture: ComponentFixture<BoardAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
