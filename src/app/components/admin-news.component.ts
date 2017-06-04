import { Component, AfterViewInit } from '@angular/core';

declare var Quill: any;

@Component({
  selector: 'admin-news',
  templateUrl: './admin-news.component.html'
})
export class AdminNewsComponent implements AfterViewInit {

  ngAfterViewInit () {
    var editor = new Quill('#editor', {
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
