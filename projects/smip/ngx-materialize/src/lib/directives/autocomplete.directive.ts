import {Directive, ElementRef, EventEmitter, HostListener, Inject, Input, OnDestroy, OnInit, Output, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {AutocompleteInstance, AutocompleteOptions} from '../types';

declare const M: any;

@Directive({
  selector: '[mAutocomplete]'
})
export class AutocompleteDirective implements OnInit, OnDestroy {
  @Input() mAutocomplete: AutocompleteOptions;
  @Output() mInstance: EventEmitter<AutocompleteInstance> = new EventEmitter();
  options: AutocompleteOptions = {};
  instances: AutocompleteInstance;

  constructor(
    private element: ElementRef,
    @Inject(PLATFORM_ID) private platform: Object
  ) {
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platform)) {
      setTimeout(() => {
        Object.assign(this.options, this.mAutocomplete);
        this.instances = M.Autocomplete.init(this.element.nativeElement, this.options);
        this.mInstance.emit(this.instances);
      }, 0);
    }
  }

  ngOnDestroy(): void {
    if (this.instances) {
      this.instances.destroy();
    }
  }

  @HostListener('change') onAutocomplete() {
    this.element.nativeElement.dispatchEvent(new CustomEvent('input'));
  }
}
