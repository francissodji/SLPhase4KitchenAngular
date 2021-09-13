import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchfoodsComponent } from './searchfoods.component';

describe('SearchfoodsComponent', () => {
  let component: SearchfoodsComponent;
  let fixture: ComponentFixture<SearchfoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchfoodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchfoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
