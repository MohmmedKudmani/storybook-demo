import { Button as MantineButton } from '@mantine/core'
import PropTypes from 'prop-types'

function Button(props) {
  const { color = 'blue', variant = 'filled', leftIcon, label } = props

  return (
    <MantineButton leftIcon={leftIcon} variant={variant} color={color}>
      {label}
    </MantineButton>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'filled']),
  leftIcon: PropTypes.element,
}

export default Button
