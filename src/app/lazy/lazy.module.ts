import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy/lazy.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LazyComponent],
  entryComponents: [LazyComponent]
})
export class LazyModule {
  static entry = LazyComponent;
}
