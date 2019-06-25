import * as $ from 'jquery';
import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule, APP_INITIALIZER } from '@angular/core';
import { RouterModule, PreloadAllModules, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import {
  LocationStrategy,
  HashLocationStrategy,
  CommonModule
} from '@angular/common';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { setAppInjector } from './app.injector';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/module/shared.module';
import { UserService } from './shared/service/user.service';
import { LoggedinGuard } from './shared/security/loggedin.guard';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { CoreModule } from './core/module/core.module';
import { HomeComponent } from './components/home/home.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateLoadFactorty } from './core/factory/translate-load.factory';
import { NgxPermissionsModule, NgxPermissionsService } from 'ngx-permissions';
import { PermissionLoadFactorty } from './core/factory/permission.factory';
import { LoadingButtonModule } from './core/component/loading-button/loading-button.module';
import { RequestInterceptorService } from './core/service/request-interceptor.service';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true
};

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    SharedModule,
    PerfectScrollbarModule,
    RouterModule.forRoot(AppRoutes, { preloadingStrategy: PreloadAllModules }),
    CoreModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: TranslateLoadFactorty.createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    NgxPermissionsModule.forRoot(),
    LoadingButtonModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    {
      provide: APP_INITIALIZER,
      useFactory: PermissionLoadFactorty.loadPermissions(),
      deps: [NgxPermissionsService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptorService,
      multi: true
    },
    UserService,
    LoggedinGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    setAppInjector(this.injector);
  }
}
