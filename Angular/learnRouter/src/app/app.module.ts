import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AsyncComponent } from './async/async/async.component';
import { ChatComponent } from './chat/chat.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GuardComponent } from './guard/guard.component';
import { Doing123Component } from './doing123/doing123.component';
import { ZhangsanComponent } from './zhangsan/zhangsan.component';

@NgModule({
  declarations: [
    AppComponent,
    // AsyncComponent,
    ChatComponent,
    ContactComponent,
    HomeComponent,
    NotFoundComponent,
    GuardComponent,
    Doing123Component,
    ZhangsanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
