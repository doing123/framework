import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RatingModule } from 'ngx-bootstrap/rating';

import { AppComponent } from './app.component';
import { SexreformPipe } from './sexreform.pipe';
import { LitterStarComponent } from './litter-star/litter-star.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    SexreformPipe,
    LitterStarComponent
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
