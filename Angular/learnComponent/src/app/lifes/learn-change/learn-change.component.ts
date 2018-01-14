import {Component, Input, OnInit, OnChanges, DoCheck, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-learn-change',
  templateUrl: './learn-change.component.html',
  styleUrls: ['./learn-change.component.css']
})
export class LearnChangeComponent implements OnInit, OnChanges, DoCheck {

  @Input() // 父组件传到子组件中
  content: string;

  @Input()
  user: { name: string };

  message: string = 'Angular';

  oldUserName: string;

  changeFlag: boolean = false;
  changeCount: number = 0;

  constructor() {
  }

  ngOnInit() {
    // 内存中存在doing123和Tom两个字符串
    let names = 'doing123';
    names = 'Tom';
    // this.content = 'tests';
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes, null, 2));
  }

  /**
   * 变化监测：Zone：(Monkey-patched)猴子补丁的方式暴力的将所有的异步事件都包裹处理
   * Events, Timer, XHRs
   * microTasks
   * macrotasks
   *
   * Angular中的两种变更监测的策略
   * 1.default：会检测所有组件树。（默认）
   * 2.OnPush：当该组件的输入属性变化时才检测
   */
  ngDoCheck(): void {
    if (this.user.name !== this.oldUserName) {
      this.changeFlag = true;
      console.log('DoCheck:name 从' + this.oldUserName + '变为' + this.user.name);
      this.oldUserName = this.user.name;
    }

    if (this.changeFlag) {
      this.changeCount = 0;
    } else {
      this.changeCount++;
      console.log('name未改变时，DoCheck已调用了' + this.changeCount + '次。');
    }
    this.changeFlag = false;
  }

}
