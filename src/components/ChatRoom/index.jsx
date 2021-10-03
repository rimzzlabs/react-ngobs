import { IoChatbubble, IoLogOutOutline } from 'react-icons/io5'
import { useEffect, useRef, useState } from 'react'
import { db, auth } from '@/services/firebase'
import { Container } from '@/layouts/'
import { Button } from '../Buttons'
import Form from '../Forms'

export default function ChatRoom() {
  const [messages, setMessages] = useState([])
  const bottom = useRef()
  const warnUser = useRef()

  const signOut = () => {
    auth.signOut()
  }

  const logoutConfirm = () => {
    warnUser.current.classList.toggle('-translate-y-full')
  }

  useEffect(() => {
    db.collection('messages')
      .orderBy('createdAt')
      .limit(150)
      .onSnapshot(snap => {
        setMessages(snap.docs.map(doc => doc.data()))
      })

    return () => {
      return false
    }
  }, [])

  return (
    <>
      <div
        ref={warnUser}
        className='absolute top-0 flex items-center justify-between w-full h-32 px-2 sm:px-4 -translate-y-full bg-gray-900 transition-all duration-500 z-30'>
        <p className='w-full text-sm sm:text-base lg:text-lg text-gray-200'>
          apakah anda yakin ingin meninggalkan room chat?
        </p>
        <div className='space-x-1 sm:space-x-2 w-full flex justify-end'>
          <Button onEvent={signOut} type='logout'>
            <span>Ya</span>
          </Button>
          <Button onEvent={logoutConfirm} type='login'>
            <span>tidak</span>
          </Button>
        </div>
      </div>
      <header className='w-full lg:max-w-screen-lg h-12 sm:h-14 lg:h-16 flex items-center justify-between px-2 sm:px-4 fixed top-0 sm:bottom-0 left-1/2 -translate-x-1/2 bg-gray-900'>
        <div className='flex items-center space-x-2 sm:space-x-3.5 text-lg font-semibold text-gray-200'>
          <span className='text-blue-500'>
            <IoChatbubble />
          </span>
          <span>Ngobs!</span>
        </div>
        <Button onEvent={logoutConfirm}>
          <span>
            <IoLogOutOutline />
          </span>
        </Button>
      </header>
      <Container chatRoom>
        {messages.map(({ displayPicture, message, uid, displayName }, i) => (
          <div key={i} className={`w-full flex ${uid === auth.currentUser.uid ? 'justify-end' : 'justify-start'} `}>
            <div className={`flex flex-col space-y-2 max-w-[75%] sm:max-w-[60%] lg:max-w-[50%] p-2`}>
              <div
                className={`w-full flex items-center space-x-2 sm:space-x-3.5 ${
                  uid === auth.currentUser.uid ? 'flex-row-reverse space-x-reverse sm:space-x-reverse' : 'flex-row'
                }`}>
                <img src={displayPicture} alt='' className='w-8 lg:w-12 rounded-full object-cover' />
                <span className={`text-xs sm:text-sm font-semibold text-gray-200`}>{displayName}</span>
              </div>
              <div
                className={`w-full rounded-b-xl p-2 sm:p-4 ${
                  uid === auth.currentUser.uid
                    ? ' rounded-l-xl bg-blue-500 text-white'
                    : 'rounded-r-xl bg-white text-gray-800'
                }`}>
                <p className='w-full break-words'>{message}</p>
              </div>
            </div>
          </div>
        ))}
      </Container>
      <Form bottom={bottom} />
      <div ref={bottom}></div>
    </>
  )
}
