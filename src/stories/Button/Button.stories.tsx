import {Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const button: Meta<typeof Button> = { component: Button };

export default button;

export const CCLButtonStrawberry: StoryObj<typeof Button> = {
  args: {
    label: 'Strawberry Pink',
    btnColor: 'strawberry'
  }
};

export const CCLButtonPineapple: StoryObj<typeof Button> = {
  args: {
    label: 'Pineapple Yellow',
    btnColor: 'pineapple'
  }
};

export const CCLButtonSoda: StoryObj<typeof Button> = {
  args: {
    label: 'Soda Blue',
    btnColor: 'soda'
  }
}