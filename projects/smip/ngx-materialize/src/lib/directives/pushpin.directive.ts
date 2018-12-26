import {Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

declare const M: any;

@Directive({
  selector: '[mPushpin]'
})
export class PushpinDirective implements OnInit, OnDestroy {
  @Input('mPushpin') mPushpin: object;
  @Output() mInstance = new EventEmitter();
  options = {};
  instances: any;

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    setTimeout(() => {
      Object.assign(this.options, this.mPushpin);
      this.instances = M.Pushpin.init(this.element.nativeElement, this.options);
      this.mInstance.emit(this.instances);
    }, 0);
  }

  ngOnDestroy(): void {
    if (this.instances) {
      this.instances.destroy();
    }
  }
}
