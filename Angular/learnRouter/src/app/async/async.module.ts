import {RouterModule, Routes} from "@angular/router";
import {AsyncComponent} from "./async/async.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path: '', component: AsyncComponent}
];

@NgModule({
  declarations: [
    AsyncComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: []
})

export class AsyncModule {
}
