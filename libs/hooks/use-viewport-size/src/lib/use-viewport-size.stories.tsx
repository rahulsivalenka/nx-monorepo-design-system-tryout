
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useViewportSize } from './use-viewport-size';

const ViewportSizeComponent: React.FC = () => {
  const { width, height } = useViewportSize();
  return (
    <div>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
};

export default {
  title: 'Hooks/useViewportSize',
  component: ViewportSizeComponent,
} as Meta;

type Story = StoryObj<typeof ViewportSizeComponent>;

export const Default: Story = {

}