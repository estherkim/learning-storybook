import { Foo } from './foo';

export default {
  title: 'Foo',
  component: Foo,
};

const Template = () => <Foo />;

export const Default = Template.bind({});
