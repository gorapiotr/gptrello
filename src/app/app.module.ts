import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MainInterceptor} from './interceptors/main.interceptor';
import {PanelModule} from './panel/panel.module';
import {SnotifyModule, SnotifyService, ToastDefaults} from 'ng-snotify';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        PanelModule,
        SnotifyModule,
    ],
    providers: [
        {provide: 'SnotifyToastConfig', useValue: ToastDefaults},
        SnotifyService,
        {provide: HTTP_INTERCEPTORS, useClass: MainInterceptor, multi: true},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
