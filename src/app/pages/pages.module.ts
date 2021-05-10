import { NgModule } from '@angular/core';
import { NbChatModule, NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { UsersModule } from './users/users.module';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  imports: [
    NbChatModule,
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    UsersModule
  ],
  declarations: [
    PagesComponent,
    ChatComponent,
  ],
})
export class PagesModule {
}
