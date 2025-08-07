import { Routes } from '@angular/router';
import { Page1 } from './page1/page1';
import { Page2 } from './page2/page2';
import { Page3 } from './page3/page3';

export const routes: Routes = [
     { path: '', component: Page1 },
     { path: 'otppage', component: Page1 },
     { path: 'page2', component: Page2 },
     { path: 'page3', component: Page3 },
];
