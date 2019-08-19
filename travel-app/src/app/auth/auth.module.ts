import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { AngularMaterialModule } from "../angular-material.module";
import { AuthRoutingModule } from "./auth-routing.module";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/effects/auth.effects';
import { reducers } from '../store/app.states';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';

@NgModule({
  declarations: [LoginComponent, SignupComponent, ModalDialogComponent],
  imports: [
    CommonModule, 
    AngularMaterialModule, 
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    // StoreModule.forRoot(reducers, {}),
    // EffectsModule.forRoot([AuthEffects]),
  ],
  entryComponents: [
    ModalDialogComponent
  ]
})
export class AuthModule {}
