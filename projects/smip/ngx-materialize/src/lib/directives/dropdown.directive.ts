import {Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

declare const M: any;

@Directive({
  selector: '[mDropdown]'
})
export class DropdownDirective implements OnInit, OnDestroy {
  @Input('mDropdown') mDropdown: object;
  @Output() mInstance = new EventEmitter();
  options = {};
  instances: any;

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    setTimeout(() => {
      Object.assign(this.options, this.mDropdown);
      this.instances = M.Dropdown.init(this.element.nativeElement, this.options);
      this.mInstance.emit(this.instances);
    }, 0);
  }

  ngOnDestroy(): void {
    if (this.instances) {
      this.instances.destroy();
    }
  }
}
