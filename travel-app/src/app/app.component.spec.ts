import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [
        AppComponent,
      ],
    }).compileComponents();
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(AppComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });  

  // component = fixture.componentInstance;
  // component.ngOnInit();

});
