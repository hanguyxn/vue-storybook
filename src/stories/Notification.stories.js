import Notification from '../components/Notification.vue';

export default {
  title: 'Components/MyNotification',
  component: Notification,
  argTypes: {
    notiType: { 
      control: { type: 'select', options: ['message', 'alert'] },
      description: 'Type of notification (message or alert)',
    },
    hasIcon: { 
      control: 'boolean',
      description: 'Display icon in the notification',
    },
    hasDissmis: { 
      control: 'boolean',
      description: 'Show or hide the dismiss button',
    },
    title: { 
      control: 'text',
      description: 'Title of the notification',
    },
    body: { 
      control: 'text',
      description: 'Body text of the notification',
    },
    hasButton: { 
      control: 'boolean',
      description: 'Display the button in ',
    },
    buttonType: { 
      control: { type: 'select', options: ['primary', 'neutral'] },
      description: 'Styling for the button',
    },
    buttonLabel: { 
      control: 'text',
      description: 'Label text for the button',
    },
  },
};

const Template = (args) => ({
  components: { Notification },
  setup() {
    return { args };
  },
  template: '<Notification v-bind="args" />',
});

// Các phiên bản khác nhau của Notification
export const Default = Template.bind({});
Default.args = {
  notiType: 'message',
  hasIcon: true,
  hasDissmis: true,
  title: 'Default Notification',
  body: 'This is a default notification.',
  hasButton: true,
  buttonType: 'primary',
  buttonLabel: 'Got it',
};

export const Alert = Template.bind({});
Alert.args = {
  notiType: 'alert',
  hasIcon: true,
  hasDissmis: true,
  title: 'Alert Notification',
  body: 'This is an alert notification.',
  hasButton: true,
  buttonType: 'primary',
  buttonLabel: 'Understood',
};

export const NoIcon = Template.bind({});
NoIcon.args = {
  notiType: 'message',
  hasIcon: false,
  hasDissmis: true,
  title: 'No Icon Notification',
  body: 'This notification does not have an icon.',
  hasButton: true,
  buttonType: 'neutral',
  buttonLabel: 'Okay',
};

export const NoDismissButton = Template.bind({});
NoDismissButton.args = {
  notiType: 'alert',
  hasIcon: true,
  hasDissmis: false,
  title: 'No Dismiss Notification',
  body: 'This notification cannot be dismissed.',
  hasButton: true,
  buttonType: 'primary',
  buttonLabel: 'Close',
};

export const WithoutButton = Template.bind({});
WithoutButton.args = {
  notiType: 'message',
  hasIcon: true,
  hasDissmis: true,
  title: 'No Button Notification',
  body: 'This notification does not have a button.',
  hasButton: false,
};
