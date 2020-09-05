import Heading from '.';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HeadingProps } from './Heading';

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta;

export const Basic: Story<HeadingProps> = (args) => <Heading {...args} />;

Basic.args = {
  children: 'Most populars'
};
