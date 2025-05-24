import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdevhubFileUploaderComponent } from './mdevhub-file-uploader.component';

describe('MdevhubFileUploaderComponent', () => {
  let component: MdevhubFileUploaderComponent;
  let fixture: ComponentFixture<MdevhubFileUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MdevhubFileUploaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MdevhubFileUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
