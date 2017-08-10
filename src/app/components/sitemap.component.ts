import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'sitemap',
  templateUrl: './sitemap.component.html'
})
export class SitemapComponent implements OnInit {
  constructor (private title: Title) {}

  ngOnInit () {
    this.title.setTitle('Magie D\'Inverno - Crediti');
		document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
}
