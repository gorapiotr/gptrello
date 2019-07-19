import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BoardModule} from './panel/board/board.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MainInterceptor} from './interceptors/main.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BoardModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: MainInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
