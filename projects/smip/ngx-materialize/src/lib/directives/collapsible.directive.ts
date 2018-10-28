import {Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

declare const M: any;


@Directive({
  selector: '[mCollapsible]'
})
export class CollapsibleDirective implements OnInit, OnDestroy {
  @Input('mCollapsible') mCollapsible: object;
  @Output() mInstance = new EventEmitter();
  options = {};
  instances: any;

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    setTimeout(() => {
      Object.assign(this.options, this.mCollapsible);
      this.instances = M.Collapsible.init(this.element.nativeElement, this.options);
      this.mInstance.emit(this.instances);
    }, 0);
  }

  ngOnDestroy(): void {
    this.instances.destroy();
  }
}
