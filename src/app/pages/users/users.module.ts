import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MatTableModule } from '@angular/material/table';
import { UsersComponent } from './users.component';
// import { NbCardModule } from "@nebular/theme";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { UserCreateComponent } from './_components/user-create/user-create.component';
import { UserUpdateComponent } from './_components/user-update/user-update.component';



@NgModule({
  declarations: [
    UsersComponent,
    UserCreateComponent,
    UserUpdateComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    // NbCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatButtonToggleModule,
    MatSnackBarModule
  ]
})
export class UsersModule { }
