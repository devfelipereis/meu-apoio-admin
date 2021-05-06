import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbAuthJWTToken, NbAuthModule, NbDummyAuthStrategy, NbPasswordAuthStrategy } from '@nebular/auth';
import { NbSecurityModule, NbRoleProvider } from '@nebular/security';
import { of as observableOf } from 'rxjs';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { AnalyticsService, SeoService } from './utils';
import { UserData } from './data/users';
import { UserService } from './mock/users.service';
import { MockDataModule } from './mock/mock-data.module';

const socialLinks = [
  {
    url: 'https://github.com/akveo/nebular',
    target: '_blank',
    icon: 'github',
  },
  {
    url: 'https://www.facebook.com/akveo/',
    target: '_blank',
    icon: 'facebook',
  },
  {
    url: 'https://twitter.com/akveo_inc',
    target: '_blank',
    icon: 'twitter',
  },
];

const DATA_SERVICES = [
  { provide: UserData, useClass: UserService },
];

export class NbSimpleRoleProvider extends NbRoleProvider {
  getRole() {
    // here you could provide any role based on any auth flow
    return observableOf('guest');
  }
}

export const NB_CORE_PROVIDERS = [
  ...MockDataModule.forRoot().providers,
  ...DATA_SERVICES,
  ...NbAuthModule.forRoot({

    strategies: [
      NbPasswordAuthStrategy.setup({
        name: "email",
        baseEndpoint: "",
        refreshToken: {
          endpoint: "/api/auth/refresh",
        },
        token: {
          class: NbAuthJWTToken,
          key: "token",
        },
        login: {
          endpoint: "/api/auth/login",
          method: "post",
          redirect: {
            success: "/dashboard",
            failure: null,
          },
          defaultErrors: ["Credenciais inválidas, tente novamente."],
          defaultMessages: ["Autenticação efetuada. Redirecionando..."],
          requireValidToken: false,
        },
        register: {
          endpoint: "/api/auth/register",
          method: "post",
        },
        logout: {
          endpoint: "/api/auth/sign-out",
          method: "post",
          redirect: {
            success: "/api/auth/login",
            failure: "/api/auth/login",
          },
        },
        requestPass: {
          endpoint: "/api/auth/request-pass",
          method: "post",
          redirect: {
            success: null,
            failure: null,
          },
          defaultErrors: ["Algo deu errado. Tente novamente."],
          defaultMessages: [
            "Enviamos instruções de recuperação para o seu email.",
          ],
        },
        resetPass: {
          endpoint: "/api/auth/reset-pass",
          method: "post",
          redirect: {
            success: "/",
            failure: null,
          },
          resetPasswordTokenKey: "token",
          defaultErrors: ["Algo deu errado. Tente novamente."],
          defaultMessages: [
            "Sua senha foi alterada com sucesso. Redirecionando para o login...",
          ],
        },
      }),
    ],
    forms: {
      login: {
        socialLinks: socialLinks,
      },
      register: {
        socialLinks: socialLinks,
      },
    },
  }).providers,

  NbSecurityModule.forRoot({
    accessControl: {
      guest: {
        view: '*',
      },
      user: {
        parent: 'guest',
        create: '*',
        edit: '*',
        remove: '*',
      },
    },
  }).providers,

  {
    provide: NbRoleProvider, useClass: NbSimpleRoleProvider,
  },
  AnalyticsService,
  SeoService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    NbAuthModule,
  ],
  declarations: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS,
      ],
    };
  }
}
