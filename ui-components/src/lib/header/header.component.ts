import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from '@angular-storybook-tailwind-nx/ui-components/badge';
import { ButtonComponent } from '@angular-storybook-tailwind-nx/ui-components/button';

@Component({
  selector: 'angular-storybook-tailwind-nx-header',
  standalone: true,
  imports: [CommonModule, BadgeComponent, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {}
