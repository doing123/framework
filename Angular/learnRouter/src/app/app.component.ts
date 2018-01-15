import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router) {
  }

  gotoContact() {
    // this.router.navigate(['/contact'], 3);
    this.router.navigate(['/contact', 1]);
    // this.router.navigate(['/contact', {id: 5}]); // Matrix参数：矩阵URL标记法
  }
}
