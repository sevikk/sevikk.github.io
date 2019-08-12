import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppAuthState, selectAuthState } from '../store/app.states';
import { Store } from '@ngrx/store';
import { UpdateUser } from 'src/app/store/actions/auth.actions';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthService } from '../auth.service';
import { mimeType } from 'src/app/posts/post-create/mime-type.validator';


@Component({
    templateUrl: "./edit-profile.component.html",
    styleUrls: ["./edit-profile.component.css"]
  })
export class EditProfileComponent implements OnInit {
    user: User;

    isLoading = false;

    getState: Observable<any>;
    imagePreview: string | ArrayBuffer;

    userForm: FormGroup;

    constructor(
        private store: Store<AppAuthState>,
        private authService: AuthService) {
        this.getState = this.store.select(selectAuthState);
    }

    ngOnInit() {
        this.getState.subscribe((state) => {
            this.user = state.user;
            this.userForm = new FormGroup({
                name: new FormControl(this.user.name),
                email: new FormControl(this.user.email),
                image: new FormControl(null)
                // password: new FormControl(''),
            });
            this.imagePreview = this.user.image;                        
          });
    }

    onImagePicked(event: Event) {
        const file = (event.target as HTMLInputElement).files[0];
        this.userForm.patchValue({ image: file });
        this.userForm.get("image").updateValueAndValidity();
        const reader = new FileReader();
        reader.onload = () => {
          this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
      }

    saveUserData(){         
        const payload = {
            id: this.authService.getUserId(),
            name: this.userForm.value.name,
            email: this.userForm.value.email,
            image: this.imagePreview
        }        
        this.store.dispatch(new UpdateUser(payload));
    }
}