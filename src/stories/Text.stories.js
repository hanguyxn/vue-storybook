import Text from "../components/Text.vue";

export default {
  title: 'Components/MyText', // Tiêu đề sẽ xuất hiện trong Storybook
  component: Text,          // Định nghĩa component
  argTypes: {
    tag: { control: { type: 'text' }, description: 'HTML tag to use (e.g., p, span, h1)' },
    text: { control: { type: 'text' }, description: 'The content of the text' },
    class: { 
      control: { type: 'select', options: ['default', 'body-strong', 'body-strong2', 'body-base', 'body-small', 'body-medium', 'body-larger', 'light'] },
      description: 'CSS class to apply for styling'
    },
  },
};

const Template = (args) => ({
  components: { Text },
  setup() {
    return { args };
  },
  template: '<Text v-bind="args" />',
});

// Các phiên bản khác nhau của component
export const Default = Template.bind({});
Default.args = {
  tag: 'p',
  text: 'This is a default paragraph.',
  class: 'default',
};

export const StrongText = Template.bind({});
StrongText.args = {
  tag: 'p',
  text: 'This is a strong text.',
  class: 'body-strong',
};

export const LargeHeading = Template.bind({});
LargeHeading.args = {
  tag: 'h1',
  text: 'This is a large heading.',
  class: 'body-larger',
};

export const LightText = Template.bind({});
LightText.args = {
  tag: 'span',
  text: 'This is light text.',
  class: 'light',
};
