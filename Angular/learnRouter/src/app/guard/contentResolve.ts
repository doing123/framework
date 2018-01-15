import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {Contact} from "../contact/contact.component";

@Injectable()
export class ContentResolve implements Resolve<Contact> {
  constructor(private router: Router) {
  }

  // 返回值
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id: number = route.params['id'];

    console.log(id);
    if (id == 1) {
      // 模拟加载数据
      return new Contact(2, 'zhangsan');
    } else {
      // 如出现加载数据报错，需把用户导航到其他页面
      this.router.navigate(['/home']);
    }
  }
}
