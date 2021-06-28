import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'app/_interfaces/user';
import { UsersService } from 'app/_services/users.service';
import { UserCreateComponent } from '../user-create/user-create.component';
import { UserUpdate } from './user-update.interface';

@Component({
  selector: 'user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    public dialogRef: MatDialogRef<UserCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public user: User,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: [this.user.firstName, Validators.required],
      lastName: [this.user.lastName, Validators.required],
      email: [this.user.email, [Validators.required, Validators.email]],
    })
  }

  submit() {
    console.log('this.form.valid', this.form.valid)

    if (!this.form.valid)
      return;

    const formData = { ...this.form.value };
    console.log('FORM DATA', formData);

    const user: UserUpdate = {
      ...formData
    }

    console.log('USER', user)

    this.usersService.update(this.user.id, user).subscribe(
      (response) => {
        console.log('deu bom')
        this.dialogRef.close(user);
      },
      (error) => {
        console.log('Deu ruim', error)
      }
    )

  }

}
