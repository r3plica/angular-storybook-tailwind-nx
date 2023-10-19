import { Component } from '@angular/core';
import { NxWelcomeComponent } from './nx-welcome.component';
import { LayoutComponent } from '@angular-storybook-tailwind-nx/ui-components/layout';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, LayoutComponent],
  selector: 'angular-storybook-tailwind-nx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-storybook-tailwind-nx';
}
