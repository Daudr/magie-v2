import { Component, AfterViewInit } from '@angular/core';

declare var Quill: any;

@Component({
  selector: 'admin-news',
  templateUrl: './admin-news.component.html'
})
export class AdminNewsComponent implements AfterViewInit {

  ngAfterViewInit () {
    $(document).ready(() => {
      var options = {
        modules: {
          toolbar: ['bold', 'italic', 'underline', 'strike']
        },
        placeholder: 'Compose an epic...',
        theme: 'snow'
      };
      var editor = new Quill('#editor-quill', options);
    });
  }
}
