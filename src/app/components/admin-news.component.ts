import { Component, AfterViewInit } from '@angular/core';

declare var Quill: any;

@Component({
  selector: 'admin-news',
  templateUrl: './admin-news.component.html'
})
export class AdminNewsComponent implements AfterViewInit {

  ngAfterViewInit () {
    var container = $('#editor-quill').get(0);
    var editor = new Quill(container, {
    modules: {
      toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline'],
        ['image', 'code-block']
      ]
    },
    placeholder: 'Scrivi qualcosa di bello...',
    theme: 'snow'
  });
  }
}
