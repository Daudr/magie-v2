import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';
@Injectable()
export class SeoService {
  constructor(private meta: Meta) { }
  generateTags(config) {
    // default values
    config = {
      title: 'Magie D\'Inverno - Pista di pattinaggio a San Vendemiano',
      description: 'Magie D\'Inverno: la pista di pattinaggio in ghiaccio vero più grande nella provincia di Treviso. Dal 18 novembre 2017 all\'11 marzo 2018',
      image: 'https://www.magiedinverno.it/assets/icons/logo/logo_magie.png',
      slug: '',
      ...config
    };

    this.meta.updateTag({ name: 'description', content: config.description });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: config.image });
    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({ property: 'og:site_name', content: config.title });
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:image', content: config.image });
    this.meta.updateTag({ property: 'og:url', content: `https://www.magiedinverno.it/${config.slug}` });
  }
}
