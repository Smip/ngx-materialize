import {Directive, ElementRef, EventEmitter, Inject, Input, OnDestroy, OnInit, Output, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {DropdownInstance, DropdownOptions} from '../types';

declare const M: any;

@Directive({
  selector: '[mDropdown]'
})
export class DropdownDirective implements OnInit, OnDestroy {
  @Input() mDropdown: DropdownOptions;
  @Output() mInstance: EventEmitter<DropdownInstance> = new EventEmitter();
  options: DropdownOptions = {};
  instances: DropdownInstance;

  constructor(
    private element: ElementRef,
    @Inject(PLATFORM_ID) private platform: Object
  ) {
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platform)) {
      setTimeout(() => {
        Object.assign(this.options, this.mDropdown);
        this.instances = M.Dropdown.init(this.element.nativeElement, this.options);
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
