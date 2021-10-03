import { Container } from '@/layouts/'
import { useRef, useState } from 'react'
import { BiSend } from 'react-icons/bi'
import { db, auth } from '@/services/firebase'
import PropTypes from 'prop-types'
import firebase from 'firebase'

export default function Form({ bottom }) {
  const [message, setMessage] = useState('')
  const btn = useRef()

  const sendMessage = async e => {
    e.preventDefault()
    try {
      if (message.length > 0) {
        const { uid, photoURL, displayName } = auth.currentUser
        btn.current.classList.add('translate-x-96')
        await db.collection('messages').add({
          message,
          displayName,
          displayPicture: photoURL,
          uid,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setMessage('')
        bottom.current.scrollIntoView({ behavior: 'smooth' })
      } else {
        return false
      }
    } catch (err) {
      console.error(`error, please send a message, error: ${err}`)
    }
  }

  return (
    <>
      <form
        onSubmit={sendMessage}
        className='w-full lg:max-w-screen-lg h-14 sm:h-16 lg:h-20 flex items-center justify-center px-2 sm:px-4 fixed bottom-0 sm:bottom-0 left-1/2 -translate-x-1/2 bg-gray-900'>
        <Container formField>
          <input
            type='text'
            placeholder='Send a Message...'
            value={message}
            onChange={e => {
              setMessage(e.target.value)
              if (e.target.value.length > 0) {
                btn.current.classList.remove('translate-x-96')
              } else {
                btn.current.classList.add('translate-x-96')
              }
            }}
            className='w-full h-full px-2 sm:px-4 text-sm sm:text-base lg:text-base bg-transparent outline-none text-gray-900'
          />
          <button
            ref={btn}
            className='flex items-center justify-center text-sm sm:text-base lg:text-lg space-x-1 sm:space-x-2 w-32 sm:w-40 lg:w-48 h-full rounded-lg bg-blue-500 text-white translate-x-96 transition'>
            <span>Send</span>
            <span>
              <BiSend />
            </span>
          </button>
        </Container>
      </form>
    </>
  )
}

Form.propTypes = {
  bottom: PropTypes.any,
}
