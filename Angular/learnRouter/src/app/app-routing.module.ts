import {NgModule} from '@angular/core';
import {Routes, RouterModule, CanLoad} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {ZhangsanComponent} from "./zhangsan/zhangsan.component";
import {Doing123Component} from "./doing123/doing123.component";
import {ChatComponent} from "./chat/chat.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  // {path: 'contact/:id', component: ContactComponent}, // path方式传参
  // {path: 'contact', component: ContactComponent} // query方式传参

  {path: 'contact/:id', component: ContactComponent, children: [
      {path: 'zhangsan', component: ZhangsanComponent},
      {path: 'doing123', component: Doing123Component}
    ]},
  {path: 'chat', component: ChatComponent, outlet: 'aux'}, // 辅助路由
  {path: 'async', loadChildren: 'app/async/async.module#AsyncModule'},
  {path: '**', component: NotFoundComponent} // 路由重定向
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
