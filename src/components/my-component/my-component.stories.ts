import CustomDocsPage from './Custom-Docs-Page.mdx';


export default {
  title: 'Components/My Component',
  parameters: {
    docs: {
      page: CustomDocsPage,
    },
  },
  args: {
    label: "My Component",
    color: "primary",
    size: "m",
   
  },

  argTypes: {
    color: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    size: {
      options: ['s', 'm'],
      control: { type: 'radio' },
    },
  },

};

 

const DefaultTemplate = (args) => `<my-component color="${args.color}" size="${args.size}">${args.label}</my-component>`;

export const Default = DefaultTemplate.bind({});
Default.argTypes = {

};