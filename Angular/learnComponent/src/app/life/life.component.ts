import {
  Component, OnInit, AfterContentChecked, AfterViewChecked, AfterViewInit, DoCheck, AfterContentInit,
  Input, OnChanges, OnDestroy, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit, AfterContentChecked, AfterViewChecked, AfterViewInit,
  DoCheck, OnChanges, OnDestroy, AfterContentInit {

  index: number = 1;

  @Input()
  names: string;

  logLife(msg: string) {
    console.log(`#${this.index++}  ${msg}`);
  }

  /**
   * 组件生命周期：
   * 1.初始化阶段
   * 2.变更检测阶段
   * 3.销毁阶段
   *
   * 初始化阶段钩子函数的执行顺序：
   * Constructor-》ngOnChanges（可选，如当有@Input发生时）-》ngOninit-》ngDoCheck-》ngAfterContentInit
   * -》ngAfterContentChecked-》ngAfterViewInit-》ngAfterViewChecked
   */

  constructor() {
    this.logLife('传入属性的值在constructor中为：' + this.names);
  }

  ngOnInit() {
    this.logLife('ngOnInit');
  }

  // 前提：输入属性@Input/@viewChild，names值改变才会触发,只有输入的不可变对象，发生改变时（内存消耗时）才会触发
  ngOnChanges(changes: SimpleChanges): void {
    const name = changes['names'].currentValue;
    this.logLife('传入属性的值在ngOnchanges中为：' + name);
  }

  ngDoCheck(): void {
    this.logLife('ngDoCheck');
  }

  ngAfterContentInit(): void {
    this.logLife('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    this.logLife('ngAfterContentChecked');
  }

  /**
   * 主要监听@viewChild改变时的钩子
   * 1.先Init/Checked，都是在视图创建完毕后调用
   * 2.如果有子组件，会先子后父
   * 3.钩子函数里面不能做会导致组件视图更新的操作，（代码需写在另外的上下文中setTimeout）
   */
  ngAfterViewInit(): void {
    this.logLife('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    this.logLife('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    this.logLife('ngOnDestroy');
  }

}
