import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from '@angular-storybook-tailwind-nx/ui-components/badge';

@Component({
  selector: 'angular-storybook-tailwind-nx-button',
  standalone: true,
  imports: [CommonModule, BadgeComponent],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {}
