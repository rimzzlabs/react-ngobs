import PropTypes from 'prop-types'

export const Container = ({ children, formField = false, main = false, chatRoom = false }) => {
  return formField ? (
    <div className='flex items-center justify-between w-full h-10 sm:h-12 p-0.5 rounded-lg overflow-hidden bg-gray-100'>
      {children}
    </div>
  ) : main ? (
    <main className='relative overflow-x-hidden max-w-5xl h-screen mx-auto overflow-y-auto bg-gray-900'>{children}</main>
  ) : chatRoom ? (
    <section className='w-full space-y-2 px-2 sm:px-4 lg:px-6 py-14 sm:py-16 lg:py-20'>{children}</section>
  ) : null
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  formField: PropTypes.bool,
  chatRoom: PropTypes.bool,
  main: PropTypes.bool,
}
