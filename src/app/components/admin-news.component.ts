import { Component, AfterViewInit } from '@angular/core';

declare var Quill: any;

@Component({
  selector: 'admin-news',
  templateUrl: './admin-news.component.html'
})
export class AdminNewsComponent implements AfterViewInit {

  ngAfterViewInit () {
    var editor = new Quill('#editor-quill', {
      debug: 'info',
      modules: {
        toolbar: ['bold', 'italic', 'underline', 'strike']
      },
      placeholder: 'Compose an epic...',
      readOnly: true,
      theme: 'snow'
    });
  }
}
