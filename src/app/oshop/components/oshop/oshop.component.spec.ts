import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { OshopComponent } from './oshop.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        OshopComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(OshopComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-starter'`, () => {
    const fixture = TestBed.createComponent(OshopComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular-starter');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(OshopComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('angular-starter app is running!');
  });
});
