import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/services/firebase'
import { Container } from '@/layouts'
import ChatRoom from '@/components/ChatRoom'
import DefaultPage from '@/components/DefaultPage'

export default function App() {
  const user = useAuthState(auth)

  return <Container main>{user[0] ? <ChatRoom /> : <DefaultPage />}</Container>
}
