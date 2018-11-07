/*
 * Public API Surface of ngx-materialize
 */

export * from './lib/ngx-materialize.module';

if (!('M' in window)) {
  throw new Error('Couldn\'t find M object on window. It is created by the materialize-css library.' +
    ' Please import materialize-css before importing ngx-materialize.');
}

declare var M: any;

export function toast(...args) {
  M.toast(...args);
}

export function updateTextFields(...args) {
  setTimeout(() => M.updateTextFields(...args), 100);
}

export function textareaAutoResize(...args) {
  setTimeout(() => M.textareaAutoResize(...args), 100);
}
