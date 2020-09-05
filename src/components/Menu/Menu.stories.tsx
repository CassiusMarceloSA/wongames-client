import Menu from '.';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Menu',
  component: Menu
} as Meta;

export const Basic: Story = (args) => <Menu {...args} />;

Basic.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark'
  }
};
