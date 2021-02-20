import { Story, Meta } from '@storybook/react/types-6-0'
import Calculator from '.'

export default {
  title: 'Calculator',
  component: Calculator
} as Meta

export const Default: Story = () => <Calculator />
