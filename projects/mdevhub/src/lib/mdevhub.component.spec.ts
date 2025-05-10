import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdevhubComponent } from './mdevhub.component';

describe('MdevhubComponent', () => {
  let component: MdevhubComponent;
  let fixture: ComponentFixture<MdevhubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MdevhubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MdevhubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
