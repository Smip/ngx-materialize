import {Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

declare const M: any;

@Directive({
  selector: '[mScrollSpy]'
})
export class ScrollSpyDirective implements OnInit, OnDestroy {
  @Input('mScrollSpy') mScrollSpy: object;
  @Output() mInstance = new EventEmitter();
  options = {
    'getActiveElement': (id) => 'a[href$="#' + id + '"]'
  };
  instances: any;

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    setTimeout(() => {
      Object.assign(this.options, this.mScrollSpy);
      this.instances = M.ScrollSpy.init(this.element.nativeElement, this.options);
      this.mInstance.emit(this.instances);
    }, 0);
  }

  ngOnDestroy(): void {
    if (this.instances) {
      this.instances.destroy();
    }
  }
}
