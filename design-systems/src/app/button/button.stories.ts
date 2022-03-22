import { ButtonComponent } from './button.component';
import { Story } from '@storybook/angular';

const Template: Story<ButtonComponent> = (args) => ({
  props: args,
});

export default {
  title: 'Components/Button',
  component: ButtonComponent,
};

export const DefaultButton = Template.bind({});

DefaultButton.args = {
  label: 'Submit',
  bgColor: '#0085FC',
  fontSize: 13,
};

DefaultButton.argTypes = {
  bgColor: {
    control: 'color',
  },
  fontSize: {
    control: { type: 'range', min: 8, max: 20 },
  },
};
