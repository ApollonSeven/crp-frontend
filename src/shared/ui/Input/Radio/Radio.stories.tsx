import { Meta, Story } from '@storybook/react';
import { useState } from 'react';
import Radio from './Radio';

export default {
  title: 'crp-kit/Input/Radio',
  component: Radio,
  parameters: {
      default: 'dark',
  },
    args: {
      variant: "Dark",

    }
} as Meta;

export const Primary: Story = (args) => {
  const [value, setValue] = useState('1');

  return (
    <div style={{ height: '300px', padding: '100px' }}>
        <Radio {...args} valueName="1" value={value} onChange={(value) => setValue(value)} >First option</Radio>
      <br />
      <br />
        <Radio {...args} valueName="2" value={value} onChange={(value) => setValue(value)}>Second option</Radio>
      <br />
      <br />
      <Radio {...args} valueName="3" value={value} onChange={(value) => setValue(value)}>Third option with some description</Radio>
      <br />
      <br />
        <Radio {...args} valueName="4" value={value} onChange={(value) => setValue(value)}>Fourth option</Radio>
    </div>
  );
};
