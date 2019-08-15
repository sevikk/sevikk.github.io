import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/angular-material.module';

describe('LoginComponent', () => {

    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                ReactiveFormsModule, 
                AngularMaterialModule
            ],
            declarations: [
                LoginComponent
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(LoginComponent);

        // get test component from the fixture
        component = fixture.componentInstance;
        component.ngOnInit();
    });

    it('form invalid when empty', () => {
        expect(component.authForm.valid).toBeFalsy();
    });

});
