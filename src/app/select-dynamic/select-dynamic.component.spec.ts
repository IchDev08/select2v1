import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDynamicComponent } from './select-dynamic.component';

describe('SelectDynamicComponent', () => {
  let component: SelectDynamicComponent;
  let fixture: ComponentFixture<SelectDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectDynamicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
