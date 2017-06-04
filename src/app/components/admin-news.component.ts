import { Component, OnInit } from '@angular/core';

declare var Quill: any;

@Component({
  selector: 'admin-news',
  templateUrl: './admin-news.component.html'
})
export class AdminNewsComponent implements OnInit {

  ngOnInit () {
    var editor = new Quill('#editor-quill');
  }
}
