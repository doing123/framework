import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RatingModule, ButtonsModule} from 'ngx-bootstrap';

import {AppComponent} from './app.component';
import {SexreformPipe} from './sexreform.pipe';
import {LitterStarComponent} from './litter-star/litter-star.component';
import {FormsModule} from "@angular/forms"; // [(ngModel)]双向数据绑定所需
import {OrderComponent} from './interact/order/order.component';
import {OrderParentComponent} from './interact/order-parent/order-parent.component';
import {PriceQuoteComponent} from './interact/price-quote/price-quote.component';
import {LifeComponent} from './life/life.component';
import {LearnChangeComponent} from './lifes/learn-change/learn-change.component';
import {NgContentAppComponent} from './embed/ng-content-app/ng-content-app.component';
import {NgContentExampleComponent} from './embed/ng-content-example/ng-content-example.component';
import {FormButtonComponent} from './reuse-component/form-button/form-button.component';
import {FormInputComponent} from './reuse-component/form-input/form-input.component';
import {FormListComponent} from './reuse-component/form-list/form-list.component';
import {MoreListComponent} from './reuse-component/more-list/more-list.component';
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
  {path: 'next', component: MoreListComponent},
  {path: '', component: FormListComponent},
  {path: '**', component: FormListComponent} // 重定向
];

@NgModule({
  declarations: [
    AppComponent,
    SexreformPipe,
    LitterStarComponent,
    OrderComponent,
    OrderParentComponent,
    PriceQuoteComponent,
    LifeComponent,
    LearnChangeComponent,
    NgContentAppComponent,
    NgContentExampleComponent,
    FormButtonComponent,
    FormInputComponent,
    FormListComponent,
    MoreListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RatingModule.forRoot(),
    ButtonsModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
