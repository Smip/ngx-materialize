# Ngx-Materialize

[![GitHub license](https://img.shields.io/github/license/Smip/ngx-materialize.svg)](https://github.com/Smip/ngx-materialize/blob/master/LICENSE)

One more materialize wrapper for Angular

Support [materializecss.com](https://materializecss.com) for Angular 6 without jquery

The library tested and successfully works with  materialize-css version 1.0.0-rc.2 and Angular 6.1.0

## [Demo](https://smip.github.io/ngx-materialize/dist/ngx-materialize)

## Installation

Install materialize

` npm install materialize-css@next --save`

Install Ngx-Materialize:

`npm i -S @smip/ngx-materialize`

Add `"~materialize-css/dist/js/materialize.js"` to your **angular.json** file in section **scripts**

Add `"~materialize-css/dist/css/materialize.css"` to your **angular.json** file in section **styles** 

**or**

If you use scss add to your styles.scss `@import '~materialize-css/sass/materialize.scss';`


Add NgxMaterialize import to your module:

```
import {NgxMaterialize} from '@smip/ngx-materialize';

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

- Materialbox

`mMaterialbox`

- Modal

`mModal`

- ScrollSpy

This directive works only with angular 6.1+, reed more by [link](https://stackoverflow.com/a/52724769) 

Default options getActiveElement was changed to:
```
'getActiveElement': (id) => 'a[href$="#' + id + '"]'
```

Add options `anchorScrolling: 'enabled'` to your RouterModule:

```
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([], {
      anchorScrolling: 'enabled'
    })
  ],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule {
}
```

Add directive `mScrollSpy` to your sections:

```
<div id="introduction" class="section" mScrollSpy>
  <p>Content </p>
</div>

<div id="structure" class="section" mScrollSpy>
  <p>Content </p>
</div>
```

Add links:

```
<ul class="section table-of-contents">
  <li><a [routerLink]="[]" fragment="introduction">Introduction</a></li>
  <li><a [routerLink]="[]" fragment="structure">Structure</a></li>
</ul>
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



### Functions:

- toast
```
import {Component, OnInit} from '@angular/core';
import {toast} from '@smip/ngx-materialize';

export class AppComponent implements OnInit {
  ngOnInit(): {
    toast({html: 'Toast!'});
  }
}
```
- updateTextFields
```
import {Component, OnInit} from '@angular/core';
import {updateTextFields} from '@smip/ngx-materialize';

export class AppComponent implements OnInit {
  ngOnInit(): {
    updateTextFields();
  }
}
```
- textareaAutoResize
```
import {Component, OnInit} from '@angular/core';
import {textareaAutoResize} from '@smip/ngx-materialize';

export class AppComponent implements OnInit {
  ngOnInit(): {
    textareaAutoResize();
  }
}
```


## Issues
If you have questions or issues feel free to create new an topic in [issues](https://github.com/Smip/ngx-materialize/issues).

## License

Licensed under [MIT](https://opensource.org/licenses/MIT).
