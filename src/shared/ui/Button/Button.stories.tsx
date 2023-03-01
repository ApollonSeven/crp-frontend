import { Meta, Story } from '@storybook/react';
import Button from './Button';
import { Props } from './Button.typings';

const defaultArgs: Partial<Props> = {
  disabled: false,
  size: 'M',
  variant: "Primary"
};

export default {
  title: 'crp-kit/Button',
  component: Button,
} as Meta<Props>;

export const Default: Story<Props> = (args) => <Button {...args}>Title</Button>;
Default.args = defaultArgs;
