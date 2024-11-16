import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APPROUTINGComponent } from './approuting.component';


describe('AppRoutingComponent', () => {
  let component: APPROUTINGComponent;
  let fixture: ComponentFixture<APPROUTINGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [APPROUTINGComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(APPROUTINGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
