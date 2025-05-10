import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdevhubPaginationComponent } from './mdevhub-pagination.component';

describe('MdevhubPaginationComponent', () => {
  let component: MdevhubPaginationComponent;
  let fixture: ComponentFixture<MdevhubPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MdevhubPaginationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MdevhubPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
