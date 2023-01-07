export interface Toast {
  html: string;
  displayLength?: number;
  inDuration?: number;
  outDuration?: number;
  classes?: string;
  completeCallback?: () => void;
  activationPercent?: number;
}

export interface AutocompleteOptions {
  data?: {}; // Autocomplete data set
  limit?: number; // Limit of results the autocomplete shows
  onAutocomplete?: (selected: string) => void; // Callback for when autocompleted
  minLength?: number; // Min characters before autocomplete starts
  sortFunction?: (a: string, b: string, inputString: string) => number;
}


export interface DropdownOptions {
  alignment?: string;
  autoFocus?: boolean;
  constrainWidth?: boolean;
  container?: string | HTMLElement;
  coverTrigger?: boolean;
  closeOnClick?: boolean;
  hover?: boolean;
  inDuration?: number;
  outDuration?: number;
  onOpenStart?: (el: HTMLElement) => void;
  onOpenEnd?: (el: HTMLElement) => void;
  onCloseStart?: (el: HTMLElement) => void;
  onCloseEnd?: (el: HTMLElement) => void;
  onItemClick?: (el: HTMLElement) => void;
}

export interface FormSelectOptions {
  classes?: string;
  dropdownOptions?: DropdownOptions;
}

export interface DropdownInstance {
  el: HTMLElement;
  options: DropdownOptions;
  id: string;
  dropdownEl: HTMLElement;
  isOpen: boolean;
  isScrollable: boolean;
  focusedIndex: number;
  open: () => void;
  close: () => void;
  destroy: () => void;
  recalculateDimensions: () => void;
}

export interface FormSelectInstance {
  el: HTMLElement;
  options: FormSelectOptions;
  dropdownOptions: DropdownOptions;
  isMultiple: boolean;
  wrapper: HTMLElement;
  input: HTMLElement;
  dropdown: DropdownInstance;
  destroy: () => void;
  getSelectedValues: () => any[];
  update: () => void;
}

export interface AutocompleteInstance {
  el: HTMLElement;
  options: AutocompleteOptions;
  isOpen: boolean;
  count: number;
  activeIndex: number;
  dropdown: DropdownInstance;
  open: () => void;
  close: () => void;
  destroy: () => void;
  selectOption: (el: any) => void;
  updateData: (data: {}) => void;
}
