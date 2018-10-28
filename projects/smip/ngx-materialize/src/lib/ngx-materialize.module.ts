import {NgModule} from '@angular/core';
import {TooltipDirective} from './directives/tooltip.directive';
import {TabsDirective} from './directives/tabs.directive';
import {CarouselDirective} from './directives/carousel.directive';
import {CollapsibleDirective} from './directives/collapsible.directive';
import {DatepickerDirective} from './directives/datepicker.directive';
import {DropdownDirective} from './directives/dropdown.directive';
import {FormSelectDirective} from './directives/form-select.directive';
import {ModalDirective} from './directives/modal.directive';
import {SidenavDirective} from './directives/sidenav.directive';
import {TapTargetDirective} from './directives/tap-target.directive';
import {MaterialboxDirective} from './directives/materialbox.directive';
import {SliderDirective} from './directives/slider.directive';
import {ScrollSpyDirective} from './directives/scroll-spy.directive';
import {AutocompleteDirective} from './directives/autocomplete.directive';
import {ChipsDirective} from './directives/chips.directive';
import {TimepickerDirective} from './directives/timepicker.directive';

const M_MODULES = [
  TooltipDirective,
  TabsDirective,
  CarouselDirective,
  CollapsibleDirective,
  DatepickerDirective,
  DropdownDirective,
  FormSelectDirective,
  ModalDirective,
  SidenavDirective,
  TapTargetDirective,
  MaterialboxDirective,
  SliderDirective,
  ScrollSpyDirective,
  AutocompleteDirective,
  ChipsDirective,
  TimepickerDirective
];

@NgModule({
  imports: [],
  declarations: M_MODULES,
  exports: M_MODULES
})
export class NgxMaterializeModule {
}
