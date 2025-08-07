import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMaxDigits]',
  standalone: true
})
export class MaxDigitsDirective {
  @Input() appMaxDigits = 0;

  private allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    const input = event.target as HTMLInputElement;
    const value = input.value || '';
    const isDigit = /^[0-9]$/.test(event.key);
    const isAllowed = this.allowedKeys.includes(event.key);

    // Prevent entering more digits
    if (value.length >= this.appMaxDigits && !isAllowed) {
      event.preventDefault();
    }

    // Block non-digit characters
    if (!isDigit && !isAllowed) {
      event.preventDefault();
    }
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent): void {
    event.preventDefault();
  }

  @HostListener('drop', ['$event'])
  onDrop(event: DragEvent): void {
    event.preventDefault();
  }
}
