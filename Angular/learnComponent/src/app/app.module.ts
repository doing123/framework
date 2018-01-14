import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RatingModule } from 'ngx-bootstrap/rating';

import { AppComponent } from './app.component';
import { SexreformPipe } from './sexreform.pipe';
import { LitterStarComponent } from './litter-star/litter-star.component';
import { FormsModule } from "@angular/forms";
import { OrderComponent } from './interact/order/order.component';
import { OrderParentComponent } from './interact/order-parent/order-parent.component';
import { PriceQuoteComponent } from './interact/price-quote/price-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    SexreformPipe,
    LitterStarComponent,
    OrderComponent,
    OrderParentComponent,
    PriceQuoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RatingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
