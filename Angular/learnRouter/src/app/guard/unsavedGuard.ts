import {CanDeactivate} from "@angular/router";
import {ContactComponent} from "../contact/contact.component";

export class UnsavedGuard implements CanDeactivate<ContactComponent> {
  canDeactivate(component: ContactComponent) {
    console.log(component);

    // component 根据组件中的树形或方法判断
    return window.confirm('暂未保存确定要离开吗?');
  }
}
