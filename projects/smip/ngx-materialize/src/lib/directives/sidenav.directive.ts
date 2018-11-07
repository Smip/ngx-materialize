import {Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

declare const M: any;

@Directive({
  selector: '[mSidenav]'
})
export class SidenavDirective implements OnInit, OnDestroy {
  @Input('mSidenav') mSidenav: object;
  @Output() mInstance = new EventEmitter();
  options = {};
  instances: any;

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    setTimeout(() => {
      Object.assign(this.options, this.mSidenav);
      this.instances = M.Sidenav.init(this.element.nativeElement, this.options);
      this.mInstance.emit(this.instances);
    }, 0);
  }

  ngOnDestroy(): void {
    if (this.instances) {
      this.instances.destroy();
    }
  }
}
