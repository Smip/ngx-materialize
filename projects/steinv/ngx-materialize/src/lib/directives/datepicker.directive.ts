import {Directive, ElementRef, EventEmitter, HostListener, Inject, Input, OnDestroy, OnInit, Output, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

declare const M: any;

@Directive({
  selector: '[mDatepicker]'
})
export class DatepickerDirective implements OnInit, OnDestroy {
  @Input() mDatepicker: object;
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
        Object.assign(this.options, this.mDatepicker);
        this.instances = M.Datepicker.init(this.element.nativeElement, this.options);
        this.mInstance.emit(this.instances);
      }, 0);
    }
  }

  ngOnDestroy(): void {
    if (this.instances) {
      this.instances.destroy();
    }
  }

  @HostListener('change') dateChanges() {
    this.element.nativeElement.dispatchEvent(new CustomEvent('input'));
  }
}
