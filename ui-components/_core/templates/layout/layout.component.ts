import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@angular-storybook-tailwind-nx/ui-components/header';

@Component({
  selector: 'angular-storybook-tailwind-nx-layout',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {}
