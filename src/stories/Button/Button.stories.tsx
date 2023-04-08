import {ComponentMeta, ComponentStoryObj } from '@storybook/react';
import Button from './Button';

export default { component: Button } as ComponentMeta<typeof Button>;

export const CCLButtonStrawberry: ComponentStoryObj<typeof Button> = {
  args: {
    label: 'Strawberry Pink',
    btnColor: 'strawberry'
  }
};

export const CCLButtonPineapple: ComponentStoryObj<typeof Button> = {
  args: {
    label: 'Pineapple Yellow',
    btnColor: 'pineapple'
  }
};

export const CCLButtonSoda: ComponentStoryObj<typeof Button> = {
  args: {
    label: 'Soda Blue',
    btnColor: 'soda'
  }
}