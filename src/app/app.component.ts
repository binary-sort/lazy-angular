import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { LazyLoaderService } from './lazy-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lazy-angular';
  @ViewChild('container', { read: ViewContainerRef, static: false })
  container: ViewContainerRef;

  constructor(private lazyLoader: LazyLoaderService) { }

  load() {
    this.container.clear();
    this.lazyLoader.load('lazy', this.container);
  }
}
