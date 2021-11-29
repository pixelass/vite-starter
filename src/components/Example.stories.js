import Example from './Example'

export default {
  title: 'components/Example',
  component: Example,
}

const Template = args => Example(args)

export const ShortText = Template.bind({})
ShortText.args = { text: 'Short Text' }

export const LongText = Template.bind({})
LongText.args = {
  text: 'This is a very long text to show how the component behaves',
}
