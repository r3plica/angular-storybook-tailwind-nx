import type { Meta, StoryObj } from '@storybook/angular';
import { ContentComponent } from './content.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ContentComponent> = {
  component: ContentComponent,
  title: 'ContentComponent',
};
export default meta;
type Story = StoryObj<ContentComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/content works!/gi)).toBeTruthy();
  },
};
