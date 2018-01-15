import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {

  contactId: number;
  contactName: string;
  private sub: any;

  constructor(private routeInfo: ActivatedRoute) {
  }

  ngOnInit() {
    // 参数快照的方式：ngOnInit只调用一次
    // this.contactId = this.routeInfo.snapshot.queryParams['id']; // 获取query方式的参数
    // this.contactId = this.routeInfo.snapshot.params['id']; // 获取path方式的参数

    // 参数订阅
    /*this.sub = this.routeInfo.queryParams.subscribe((queryParams: Params) => {
      this.contactId = queryParams['id'];
    });*/
    this.sub = this.routeInfo.params.subscribe((params: Params) => {
      this.contactId = params['id'];
    });

    // 这里是Resolve守卫返回的值
    this.routeInfo.data.subscribe((data: { content: Contact }) => {
      this.contactId = data.content.id;
      this.contactName = data.content.name;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

export class Contact {
  constructor(public id: number, public name: string) {
  }
}
