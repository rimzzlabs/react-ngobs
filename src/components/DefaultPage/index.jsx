import { IoLogoGoogle } from 'react-icons/io5'
import { auth } from '@/services/firebase'
import { Button } from '../Buttons'
import firebase from 'firebase'
import svg from '@/chat.svg'

export default function DefaultPage() {
  const signIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }
  return (
    <div className='grid place-items-center w-full h-full'>
      <div className='space-y-2 sm:space-y-3.5 lg:space-y-4'>
        <div className='grid place-items-center w-full'>
          <img src={svg} alt='illustration image' className='w-9/12 sm:w-1/2' />
        </div>
        <div className='w-9/12 sm:w-8/12 mx-auto'>
          <h1 className='text-center text-xl sm:text-2xl lg:text-4xl font-bold text-blue-500'>Ngobs!</h1>
          <p className='text-center text-sm sm:text-base lg:text-lg text-gray-200'>
            Mengobrol lebih seru dengan teman-teman, login menggunakan akun Google mu dengan tombol dibawah dan mulai
            mengobrol dengan teman-teman!
          </p>
        </div>
        <div className='grid place-items-center w-full'>
          <Button onEvent={signIn} type='login'>
            <span>
              <IoLogoGoogle />
            </span>
            <span className='font-semibold uppercase tracking-wider'>Login</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
