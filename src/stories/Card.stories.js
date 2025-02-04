import Card from "../components/Card.vue";

export default {
  title: "Components/MyCard",
  components: Card,
  argTypes: {
    cardClassType: {
      control: {
        type: 'select',
        options: ['light', 'dark'],
      },
      description: 'Choose the card class type.',
    },
    textStyle: {
      control: {
        type: 'select',
        options: ['light', 'dark'],
      },
      description: 'Choose the text style for the card.',
    },
    cardTitle: {
      control: 'text',
      description: "This is the card's title.",
    },
    currency: {
      control: 'text',
      description: 'Currency of the money.',
    },
    label: {
      control: 'text',
      description: 'Label after the price.',
    },
    itemList: {
      control: {
        type: 'object',
        description: "List of items with their links",
        defaultValue: {
          'List item 1': '#',
          'List item 2': '#',
        },
      },
    },
    btnFn: {
      description: 'Function to call when the button is clicked.',
      action: 'clicked', // Register action for the button click event.
    },
    textBtn: {
      control: 'text',
      description: 'Text on the button (default: "Click me!")',
    },
    btnClass: {
      control: 'text',
      description: 'CSS class for the button.',
    },
  },
};

const Template = (args) => ({
  components: { Card },
  setup() {
    return { args };
  },
  template: '<Card v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  cardClassType: 'light',
  textStyle: 'body-strong',
  textBtn: 'Click me!',
  btnClass: 'btn btn-primary btn--small',
};

export const Dark = Template.bind({});
Dark.args = {
    cardClassType: 'dark',
    textStyle: 'light',
    textBtn: 'Click me!',
    btnClass: 'btn btn-neutral btn--small',
};

