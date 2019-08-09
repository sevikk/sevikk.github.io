import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { AngularMaterialModule } from "../angular-material.module";
import { AuthRoutingModule } from "./auth-routing.module";
import { StoreModule } from '@ngrx/store';
import { reducers } from '../store/app.states';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '../store/effects/auth.effects';

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule, 
    AngularMaterialModule, 
    FormsModule, 
    AuthRoutingModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([AuthEffects]),
  ]
})
export class AuthModule {}
