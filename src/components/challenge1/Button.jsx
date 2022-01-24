import PropTypes from 'prop-types'

const Button = ({ label, variant, disableShadow, disabled, startIcon, endIcon, size, color }) => {
  return (
    <button disabled={disabled} className={`
    // Size Variants
    ${size === 'sm' ? 'py-1 px-2' : ''}
    ${size === 'md' ? 'py-2 px-3' : ''}
    ${size === 'lg' ? 'py-3 px-4' : ''}
    ${size === 'xl' ? 'py-4 px-5' : ''}
    // Color Variants
    ${color === 'primary' ? 'bg-blue-500 hover:bg-blue-700 text-white' : ''}
    ${color === 'secondary' ? 'bg-gray-200 hover:bg-gray-300 text-gray-700' : ''}
    ${color === 'success' ? 'bg-green-500 hover:bg-green-700 text-white' : ''}
    ${color === 'danger' ? 'bg-red-500 hover:bg-red-700 text-white' : ''}
    ${color === 'warning' ? 'bg-yellow-500 hover:bg-yellow-700 text-white' : ''}
    ${color === 'info' ? 'bg-teal-500 hover:bg-teal-700 text-white' : ''}
    // Type Variants
    ${variant === 'outline' ? 'bg-white border border-blue-600 text-blue-600 hover:bg-blue-100' : ''}
    ${variant === 'text' ? 'bg-white  text-blue-600 hover:bg-blue-100' : ''}
    ${variant === 'default' ? 'bg-transparent border-blue-600 text-blue-600 hover:bg-blue-100' : ''}
    // Disabled Variants
    ${disabled ? 'cursor-not-allowed text-opacity-80 select-none text-gray-400 bg-gray-200 hover:bg-gray-300 border-gray-300' : ''}
    ${disableShadow ? 'shadow-none' : ' shadow'}
    // Defaults Variants
    transition duration-300 border-1 border-gray-300 bg-gray-300 hover:bg-opacity-80 font-medium rounded-md`}
    >
      {startIcon && <span className="mr-2">{startIcon}</span>}
      {label}
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </button>
  )
}


Button.defaultProps = {
  label: 'Default',
  disableShadow: true,
  disabled: false,
  startIcon: null,
  endIcon: null,
  variant: '',
  size: 'md',
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  disableShadow: PropTypes.bool,
  disabled: PropTypes.bool,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  variant: PropTypes.oneOf(['outline', 'text', 'default']),
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  color: PropTypes.string,
}


export default Button;