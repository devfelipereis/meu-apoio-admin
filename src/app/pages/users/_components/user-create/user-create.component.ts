import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { UsersService } from '../../../../_services/users.service'
import { UserCreate } from './user-create.interface';

@Component({
  selector: 'user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  form: FormGroup;
  isLoading: boolean = false;
  hide: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    public dialogRef: MatDialogRef<UserCreateComponent>,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      confirmPassword: [null, Validators.required],
    }, { validators: this.matchValues } )
  }

  matchValues(group: FormGroup) {
    const password = group.get('password').value;
    const confirmPassword = group.get('confirmPassword').value;
    console.log(password === confirmPassword)
    
    return password === confirmPassword;
  }

  submit() {
    console.log('this.form.valid', this.form.valid)

    if (!this.form.valid)
      return;

    const formData = { ...this.form.value };
    console.log('FORM DATA', formData);

    const user: UserCreate = {
      ...formData
    }

    console.log('USER', user)

    this.usersService.store(user).subscribe(
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
