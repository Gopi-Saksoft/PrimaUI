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
  constructor(private renderer: Renderer2) {

  }
  public handleOtpKey(event: KeyboardEvent, index: number): void {
    const input = event.target as HTMLInputElement;
    const key = event.key;
    const currentValue = input.value;

    const isDigit = /^[0-9]$/.test(key);
    const isBackspace = key === 'Backspace';

    // Move to previous field on backspace if current is empty
    if (isBackspace && index > 1 && currentValue.length === 0) {
      this.focusInput(`#txtCode${index - 1}`);
      return;
    }

    // Move to next field on digit
    if (isDigit && index < 6) {
      // Delay ensures value is registered before moving focus
      setTimeout(() => this.focusInput(`#txtCode${index + 1}`), 0);
    }
  }
  private focusInput(selector: string): void {
    try {
      const element = this.renderer.selectRootElement(selector, true);
      element.focus();
    } catch {
      // Element may not exist, safely ignore
    }
  }
  reset() {
    this.otpValue = this.code1 = this.code2 = this.code3 = this.code4 = this.code5 = this.code6 = '';
  }
  submit() {
    this.otpValue = `${this.code1}${this.code2}${this.code3}${this.code4}${this.code5}${this.code6}`;
  }
}
