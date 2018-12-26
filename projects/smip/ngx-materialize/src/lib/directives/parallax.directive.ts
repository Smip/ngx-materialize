import {Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

declare const M: any;

@Directive({
  selector: '[mParallax]'
})
export class ParallaxDirective implements OnInit, OnDestroy {
  @Input('mParallax') mParallax: object;
  @Output() mInstance = new EventEmitter();
  options = {};
  instances: any;

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    setTimeout(() => {
      Object.assign(this.options, this.mParallax);
      this.instances = M.Parallax.init(this.element.nativeElement, this.options);
      this.mInstance.emit(this.instances);
    }, 0);
  }

  ngOnDestroy(): void {
    if (this.instances) {
      this.instances.destroy();
    }
  }
}
