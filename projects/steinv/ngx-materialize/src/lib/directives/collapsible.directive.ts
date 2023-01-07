import {Directive, ElementRef, EventEmitter, Inject, Input, OnDestroy, OnInit, Output, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

declare const M: any;


@Directive({
  selector: '[mCollapsible]'
})
export class CollapsibleDirective implements OnInit, OnDestroy {
  @Input() mCollapsible: object;
  @Output() mInstance = new EventEmitter();
  options = {};
  instances: any;

  constructor(
    private element: ElementRef,
    @Inject(PLATFORM_ID) private platform: Object
  ) {
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platform)) {
      setTimeout(() => {
        Object.assign(this.options, this.mCollapsible);
        this.instances = M.Collapsible.init(this.element.nativeElement, this.options);
        this.mInstance.emit(this.instances);
      }, 0);
    }
  }

  ngOnDestroy(): void {
    if (this.instances) {
      this.instances.destroy();
    }
  }
}
