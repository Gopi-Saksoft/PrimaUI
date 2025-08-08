import { Component, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MaxDigitsDirective } from '../directive/MaxDigitsDirective';

@Component({
  selector: 'app-page1',
  imports: [FormsModule,
    MaxDigitsDirective],
  templateUrl: './page1.html',
  styleUrl: './page1.scss',
  //standalone: false
})
export class Page1 {
  public code1: string = '';
  public code2: string = '';
  public code3: string = '';
  public code4: string = '';
  public code5: string = '';
  public code6: string = '';
  public otpValue: string = '';
  public redemPts: string = '';

  constructor(private renderer: Renderer2) {

  }
  // public handleOtpKey(event: KeyboardEvent, index: number): void {
  //   const input = event.target as HTMLInputElement;
  //   const key = event.key;
  //   const currentValue = input.value;

  //   const isDigit = /^[0-9]$/.test(key);
  //   const isBackspace = key === 'Backspace';

  //   // Move to previous field on backspace if current is empty
  //   if (isBackspace && index > 1 && currentValue.length === 0) {
  //     this.focusInput(`#txtCode${index - 1}`);
  //     return;
  //   }

  //   // Move to next field on digit
  //   if (isDigit && index < 6) {
  //     // Delay ensures value is registered before moving focus
  //     setTimeout(() => this.focusInput(`#txtCode${index + 1}`), 0);
  //   }
  // }
  public handleOtpKey(event: KeyboardEvent, index: number): void {
    const input = event.target as HTMLInputElement;
    const key = event.key;

    if (key === 'Backspace') {
      if (input.value === '' && index > 1) {
        this.focusInput(`#txtCode${index - 1}`);
      }
    }
  }

  public handleOtpInput(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    // Allow only digits
    if (!/^\d$/.test(value)) {
      input.value = '';
      return;
    }

    // Move to next input if value is valid and not the last box
    if (index < 6) {
      this.focusInput(`#txtCode${index + 1}`);
    }
  }

  get isOtpComplete(): boolean {
    return [this.code1, this.code2, this.code3, this.code4, this.code5, this.code6]
      .every(code => code && code.length === 1);
  }

  private focusInput(selector: string): void {
    try {
      const element = this.renderer.selectRootElement(selector, true);
      element.focus();
    } catch {
      // ignore if element not found
    }
  }
  reset() {
    this.otpValue = this.code1 = this.code2 = this.code3 = this.code4 = this.code5 = this.code6 = '';
  }
  submit() {
    this.otpValue = `${this.code1}${this.code2}${this.code3}${this.code4}${this.code5}${this.code6}`;
  }
}
