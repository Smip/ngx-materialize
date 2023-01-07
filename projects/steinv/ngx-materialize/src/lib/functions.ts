import {Toast} from './types';

declare const M: any;

export function toast(args: Toast): void {
  M.toast(args);
}

export function updateTextFields(): void {
  setTimeout(() => M.updateTextFields(), 100);
}

export function textareaAutoResize(...args) {
  setTimeout(() => M.textareaAutoResize(...args), 100);
}
