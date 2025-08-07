import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MaxDigitsDirective } from './directive/MaxDigitsDirective'; // ✅ Ensure path is correct
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule,
    FormsModule
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'] // ✅ FIXED typo here
})
export class App {
  protected title = 'Prepaid Card ';
}
