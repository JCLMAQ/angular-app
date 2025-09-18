import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignalformprofilComponent } from './signalformprofil.component';

describe('SignalformprofilComponent', () => {
  let component: SignalformprofilComponent;
  let fixture: ComponentFixture<SignalformprofilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalformprofilComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalformprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
