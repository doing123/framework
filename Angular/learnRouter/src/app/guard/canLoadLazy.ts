import {Injectable} from "@angular/core";
import {CanLoad, Route} from "@angular/router";

@Injectable()
export class CanLoadLazy implements CanLoad {
  canLoad(route: Route) {

    // route 参数为延迟加载配置项，path为当前URL， async
    console.log(route.path);

    // 模拟状态
    const isCanLoad: boolean = Math.random() < 0.5;

    if (!isCanLoad) {
      console.log('不允许异步加载！');
    }
    return isCanLoad;
  }
}
