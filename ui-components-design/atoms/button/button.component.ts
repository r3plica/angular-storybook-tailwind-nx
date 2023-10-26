import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from '../badge';

@Component({
  selector: 'angular-storybook-tailwind-nx-button',
  standalone: true,
  imports: [CommonModule, BadgeComponent],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {}
