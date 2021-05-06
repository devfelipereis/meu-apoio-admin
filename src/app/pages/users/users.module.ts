import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { NbButtonModule, NbCardModule, NbLayoutModule, NbMenuModule, NbSidebarModule } from '@nebular/theme';
import { ThemeModule } from 'app/@theme/theme.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DashboardModule } from '../dashboard/dashboard.module';



@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    NbCardModule,
    ThemeModule,
  ]
})
export class UsersModule { }
