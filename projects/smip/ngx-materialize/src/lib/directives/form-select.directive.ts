import {Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

declare const M: any;

@Directive({
  selector: '[mFormSelect]'
})
export class FormSelectDirective implements OnInit, OnDestroy {
  @Input('mFormSelect') mFormSelect: object;
  @Output() mInstance = new EventEmitter();
  options = {};
  instances: any;

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    Object.assign(this.options, this.mFormSelect);
    M.FormSelect.prototype.update = this.update.bind(this);
    setTimeout(() => {
      this.instances = M.FormSelect.init(this.element.nativeElement, this.options);
      this.mInstance.emit(this.instances);
    }, 0);
  }

  ngOnDestroy(): void {
    if (this.instances) {
      this.instances.destroy();
    }
  }

  update() {
    this.instances.destroy();
    setTimeout(() => {
      this.instances = M.FormSelect.init(this.element.nativeElement, this.options);
      this.mInstance.emit(this.instances);
    }, 0);
  }

}
