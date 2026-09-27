import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT, isPlatformServer } from '@angular/common';

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
  url: string;
  image?: string;
  type?: string;
  author?: string;
  schema?: any;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    @Inject(DOCUMENT) private dom: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  updateSeoTags(config: SeoConfig): void {
    // 1. Title
    this.titleService.setTitle(config.title);

    // 2. Standard Meta Tags
    this.metaService.updateTag({ name: 'description', content: config.description });
    if (config.keywords) {
      this.metaService.updateTag({ name: 'keywords', content: config.keywords });
    }
    if (config.author) {
      this.metaService.updateTag({ name: 'author', content: config.author });
    }

    // 3. Open Graph Tags
    this.metaService.updateTag({ property: 'og:title', content: config.title });
    this.metaService.updateTag({ property: 'og:description', content: config.description });
    this.metaService.updateTag({ property: 'og:url', content: config.url });
    this.metaService.updateTag({ property: 'og:type', content: config.type || 'website' });
    if (config.image) {
      this.metaService.updateTag({ property: 'og:image', content: config.image });
    }

    // 4. Twitter Card Tags
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: config.title });
    this.metaService.updateTag({ name: 'twitter:description', content: config.description });
    if (config.image) {
      this.metaService.updateTag({ name: 'twitter:image', content: config.image });
    }

    // 5. Canonical URL
    this.updateCanonicalUrl(config.url);

    // 6. JSON-LD Schema
    if (config.schema) {
      this.updateSchema(config.schema);
    }
  }

  private updateCanonicalUrl(url: string) {
    const head = this.dom.getElementsByTagName('head')[0];
    let element: HTMLLinkElement | null = this.dom.querySelector(`link[rel='canonical']`) || null;
    if (element == null) {
      element = this.dom.createElement('link') as HTMLLinkElement;
      element.setAttribute('rel', 'canonical');
      head.appendChild(element);
    }
    element.setAttribute('href', url);
  }

  private updateSchema(schema: any) {
    const head = this.dom.getElementsByTagName('head')[0];
    const scriptId = 'schema-ld';
    let script = this.dom.getElementById(scriptId) as HTMLScriptElement;
    
    if (script) {
      script.text = JSON.stringify(schema);
    } else {
      script = this.dom.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      head.appendChild(script);
    }
  }
}
