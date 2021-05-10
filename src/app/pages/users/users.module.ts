import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { UsersComponent } from './users.component';
import { ThemeModule } from 'app/@theme/theme.module';
import { UserCreateComponent } from './_components/user-create/user-create.component';



@NgModule({
  declarations: [
    UsersComponent,
    UserCreateComponent
  ],
  imports: [
    MatTableModule,
    // NbCardModule,
    // ThemeModule,
  ]
})
export class UsersModule { }
