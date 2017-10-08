import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//从@angular/forms库中导入符号FormsModule
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  //把FormsModule添加到@NgModule元数据的imports数组中，它是当前应用正在使用的外部模板列表
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
