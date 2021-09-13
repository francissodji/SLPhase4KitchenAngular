import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListallfoodsComponent } from './listallfoods.component';

describe('ListallfoodsComponent', () => {
  let component: ListallfoodsComponent;
  let fixture: ComponentFixture<ListallfoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListallfoodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListallfoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
