import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";

export class LoginGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    /**
     * ActivatedRouteSnapshot: 所要激活的目标配置项（被使用到的路由信息）
     * RouterStateSnapshot：应用当前所处的路由状态，包含当前所需的所有配置项
     */

    // 获取配置信息
    console.log(route.routeConfig);

    // 将所需配置项以树形结构的方式组织起来
    console.log(state.root);

    // 当前登录用户有没有权限，发请求
    const loggedIn: boolean = Math.random() < 0.5;

    if (!loggedIn) {
      console.log('暂未登录');
    }
    return loggedIn;
  }
}
