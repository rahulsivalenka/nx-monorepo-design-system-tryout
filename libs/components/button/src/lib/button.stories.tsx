import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Button from @nx-monorepo-design-system-tryout\/button package!/gi)).toBeTruthy();
  },
};

export const CustomLabel: Story = {
  args: {
    label: 'Custom Label'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Custom Label/gi)).toBeTruthy();
  },
}