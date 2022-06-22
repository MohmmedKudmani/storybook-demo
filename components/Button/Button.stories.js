import React from 'react'
import Button from './Button'
import GoogleIcon from '../../public/svg/GoogleIcon'

const ButtonStory = {
  title: 'Button',
  component: Button,
}

const Template = (args) => <Button {...args} />
// With Controls
export const Primary = Template.bind({})
Primary.args = {
  label: 'I Think',
}
export const Red = Template.bind({})
Red.args = {
  color: 'red',
  variant: 'filled',
  label: 'We will have',
}
export const Green = Template.bind({})
Green.args = {
  color: 'green',
  variant: 'filled',
  label: 'A great journey',
}
export const Yellow = Template.bind({})
Yellow.args = {
  color: 'Yellow',
  variant: 'filled',
  label: 'Together',
}
export const GoogleButton = Template.bind({})
GoogleButton.args = {
  color: 'gray',
  variant: 'default',
  label: 'Continue with Google',
  leftIcon: <GoogleIcon />,
}

// Without Controls
// export const Primary = () => <Button>I think</Button>
// export const Red = () => <Button color='red'>A great journey</Button>
// export const Green = () => <Button color='green'>A great journey</Button>
// export const Yellow = () => <Button color='yellow'>Together</Button>
// export const GoogleButton = () => (
//   <Button leftIcon={<GoogleIcon />} variant='default' color='gray'>
//     Continue with Google
//   </Button>
// )

export default ButtonStory
