import { Meta, Story } from '@storybook/react';
import { useState } from 'react';
import Switch from './Switch';

export default {
  title: 'crp-kit/Input/Switch',
  component: Switch,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Primary: Story = () => {
  const [value, setValue] = useState(false);

  return (
    <div style={{ height: '300px', padding: '100px' }}>
      <Switch value={value} onChange={() => setValue(!value)} />
    </div>
  );
};
