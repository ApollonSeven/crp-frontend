import { InputProps } from '../Input.typings';

export type Props = {
  maxValue: number;
  minValue: number;
  size?: 'xl' | 'xs';
} & InputProps<number>;
