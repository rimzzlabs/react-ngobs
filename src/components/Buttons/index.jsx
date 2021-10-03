import PropTypes from 'prop-types'

export const Button = ({ children, onEvent = () => null, type = '' }) =>
  type == 'login' ? (
    <button
      onClick={onEvent}
      className='inline-flex items-center space-x-1 py-2 sm:py-3 px-4 sm:px-8 lg:px-10 text-sm sm:text-base lg:text-lg rounded-lg shadow outline-none focus:ring ring-offset-2 transition ring-blue-500 ring-offset-white bg-blue-500 hover:bg-blue-400 text-white'>
      {children}
    </button>
  ) : type === 'logout' ? (
    <button
      onClick={onEvent}
      className='inline-flex items-center space-x-1 py-2 sm:py-3 px-4 sm:px-8 lg:px-10 text-sm sm:text-base lg:text-lg rounded-lg shadow outline-none focus:ring ring-offset-2 transition ring-red-500 ring-offset-white bg-red-500 hover:bg-red-400 text-white'>
      {children}
    </button>
  ) : (
    <button
      onClick={onEvent}
      className='inline-flex items-center space-x-1 py-2 sm:py-3 px-4 sm:px-8 lg:px-10 text-sm sm:text-base lg:text-lg rounded-lg shadow outline-none focus:ring ring-offset-2 transition ring-gray-700 ring-offset-white bg-gray-700 hover:bg-gray-600 text-white'>
      {children}
    </button>
  )

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onEvent: PropTypes.func.isRequired,
  type: PropTypes.string,
}
