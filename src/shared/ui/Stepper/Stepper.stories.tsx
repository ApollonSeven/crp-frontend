import { Meta, Story } from '@storybook/react';
import {Props} from "shared/ui/Stepper/Stepper.typings";
import {Stepper} from "shared/ui/Stepper/Stepper";

const defaultArgs: Partial<Props> = {
    steps: 5,
    currentStep: 1
};

export default {
    title: 'crp-kit/Stepper',
    component: Stepper,
} as Meta<Props>;

export const Default: Story<Props> = (args) => <Stepper {...args}>Title</Stepper>;
Default.args = defaultArgs;
