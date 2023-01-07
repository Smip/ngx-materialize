# Ngx-Materialize

[![GitHub license](https://img.shields.io/github/license/Smip/ngx-materialize.svg)](https://github.com/Smip/ngx-materialize/blob/master/LICENSE)

One more materialize wrapper for Angular

Support [materializecss.com](https://materializecss.com) for Angular without jquery

The library tested and successfully works with materialize-css version 1.0.0 and Angular 6 & 7 & 8

## [Demo](https://smip.github.io/ngx-materialize/dist/ngx-materialize)

## Installation

Install materialize

`npm i -S materialize-css`

Install Ngx-Materialize:

`npm i -S @steinv/ngx-materialize`

Add `"./node_modules/materialize-css/dist/js/materialize.js"` to your **angular.json** file in section **scripts**

Add `"./node_modules/materialize-css/dist/css/materialize.css"` to your **angular.json** file in section **styles** 

**or**

If you use scss add to your styles.scss `@import '~materialize-css/sass/materialize.scss';`


Add NgxMaterialize import to your module:

```
import {NgxMaterialize} from '@stein/ngx-materialize';

...

@NgModule({
  imports: [
    ...
    NgxMaterialize
    ...
  ],
  ...
})
```

## Types

Library has defined types to next elements:

- Toast
- AutocompleteOptions
- DropdownOptions
- FormSelectOptions
- DropdownInstance
- FormSelectInstance
- AutocompleteInstance
- ...

In plans add types to every directive.

## Usage

Library supports:

### Directives:

To initialize any component add relevant directive to your element with prefix `m`, for example: **Tooltip** > `mTooltip`

To add options to component, use parameter to directive, for example: `[mTooltip]="{'enterDelay': '0'}"`

If you need access to Methods, Options, Properties of Materialize component, use `(mInstance)="your_variable = $event;"`

- Autocomplete

Add directive `[mAutocomplete]="{'data':autocompliteData}"`
```
<div class="row">
  <div class="input-field col s12">
    <i class="material-icons prefix">textsms</i>
    <input type="text" id="autocomplete-input" [mAutocomplete]="{'data':autocompliteData}" (mInstance)="autocompliteInstance = $event;">
    <label for="autocomplete-input">Autocomplete</label>
  </div>
</div>
```
- Carousel

`mCarousel`

- Chips

`mChips`

- Collapsible

`mCollapsible`

- Datepicker

`mDatepicker`

- Dropdown

`mDropdown`

- FormSelect

`mFormSelect`

If you use select in ngModel or Reactive Forms and the value in the field dynamically changes from the component, after changes value you should update the view using `this.mFormSelectInstance.update();`

HTML:
```
  <div class="input-field col s12 m6">
    <select class="icons" mFormSelect (mInstance)="mFormSelectInstance = $event" [(ngModel)]="mFormSelect">
      <option value="" disabled selected>Choose your option</option>
      <option value="1" data-icon="https://materializecss.com/images/sample-1.jpg">example 1</option>
      <option value="2" data-icon="https://materializecss.com/images/office.jpg">example 2</option>
      <option value="3" data-icon="https://materializecss.com/images/yuna.jpg">example 3</option>
    </select>
    <label>Images in select</label>
  </div>
```

Component:
```
import {Component, OnInit} from '@angular/core';
import {FormSelectInstance} from '@steinv/ngx-materialize';

export class AppComponent implements OnInit {
  mFormSelectInstance: FormSelectInstance;
  mFormSelect= '';
  ngOnInit(): {
    setTimeout(() => {
      this.mFormSelect = 2;
      this.mFormSelectInstance.update();
    }, 4000);
  }
}

```

- Materialbox

`mMaterialbox`

- Modal

`mModal`

- ScrollSpy

Add directive `mScrollSpy` to your sections:

```
<div id="introduction" class="section" mScrollSpy>
  <p>Content </p>
</div>

<div id="structure" class="section" mScrollSpy>
  <p>Content </p>
</div>
```

- Sidenav

`mSidenav`

- Slider

`mSlider`

- Tabs

`mTabs`

- TapTarget

`mTapTarget`

- Timepicker

`mTimepicker`

- Tooltip

`mTooltip`

- Parallax

`mParallax`

- Pushpin

`mPushpin`

HTML:

```
<div class="parallax-container">
  <div class="parallax" mParallax><img src="https://materializecss.com/images/parallax1.jpg"></div>
</div>
<div class="row">
  <div class="col s12">
    <h2>Some block</h2>
  </div>
</div>
<div class="parallax-container">
  <div class="parallax" mParallax><img src="https://materializecss.com/images/parallax2.jpg"></div>
</div>
```

### Functions:

- toast
```
import {Component, OnInit} from '@angular/core';
import {toast} from '@steinv/ngx-materialize';

export class AppComponent implements OnInit {
  ngOnInit(): {
    toast({html: 'Toast!'});
  }
}
```
- updateTextFields
```
import {Component, OnInit} from '@angular/core';
import {updateTextFields} from '@steinv/ngx-materialize';

export class AppComponent implements OnInit {
  ngOnInit(): {
    setTimeout(() => {
       updateTextFields();
    }, 0);
  }
}
```
- textareaAutoResize

HTML:
```
<textarea id="textarea1" #textarea class="materialize-textarea">Lorem ipsum dolor sit amet, alia vocent meliore ius ad, mea graeco evertitur et. Eos ad case labitur iuvaret, at ius alia nonumes, illud aperiam adipisci et eum. Et pro discere docendi indoctum, ad duo discere postulant. Option propriae duo id. Tota graeco molestiae pri ex. Sit malorum instructior comprehensam et, falli novum vis ad. Nullam cetero blandit cum ea, te option audire percipit eos.</textarea>
```

Component:

```
import {Component, OnInit} from '@angular/core';
import {textareaAutoResize} from '@steinv/ngx-materialize';

export class AppComponent implements OnInit {
  
  @ViewChild('textarea') textarea: ElementRef;
  
  ngOnInit(): {
    setTimeout(() => {
      textareaAutoResize(this.textarea.nativeElement);
    }, 0);
  }
}
```


## Issues
If you have questions or issues feel free to create new an topic in [issues](https://github.com/steinv/ngx-materialize/issues).

## License

Licensed under [MIT](https://opensource.org/licenses/MIT).
