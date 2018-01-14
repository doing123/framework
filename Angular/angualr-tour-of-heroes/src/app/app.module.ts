import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// 从@angular/forms库中导入符号FormsModule
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// 在拥有一个能处理web请求的服务器之前，我们可以先用HTTP客户端通过一个模拟（Mock）服务
// (内存web API)老获取和保存数据
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
// 每个组件都必须在一个（且只有一个）Angular模块中声明
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';
import { HeroSearchComponent } from './hero-search.component';

// 配置路由
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  // declarations数组包含应用中属于该模块的组件、管道和指令的列表。组件在被其他组件引用之前必须先在
  //  一个模块中声明过。
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  // 把FormsModule添加到@NgModule元数据的imports数组中，它是当前应用正在使用的外部模板列表
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule

  ],
  // 添加HeroService到AppModule的providers数组中，因为每一个视图都需要它
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
