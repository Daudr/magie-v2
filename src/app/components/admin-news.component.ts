import { Component, AfterViewInit } from '@angular/core';

declare var Quill: any;

@Component({
  selector: 'admin-news',
  templateUrl: './admin-news.component.html'
})
export class AdminNewsComponent implements AfterViewInit {
  editorOpen: boolean = false;

  ngAfterViewInit () { }

  openEditor () {
    var toolbarOptions = [
      ['bold', 'italic', 'underline', 'strike'],

      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],

      [{ 'size': ['small', false, 'large', 'huge'] }],
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

      [{ 'color': [] }, { 'background': [] }],
      [{ 'font': [] }],
      [{ 'align': [] }],

      ['clean']
    ];
    var options = {
      modules: {
        toolbar: toolbarOptions
      },
      placeholder: 'Inserisci il contenuto dell\'email',
      theme: 'snow'
    };
    var editor = new Quill('#editor-quill', options);
    this.editorOpen = true;
  }
}
