import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import {
  MultiChatWindow,
  MultiChatSocket,
  useMultiChatLogic
} from 'react-chat-engine-advanced'

import ChatForm from '../components/customChatForm'
import Header from '../components/customHeader'
import AiChatForm from '../components/customMessageForms/AiChatForm'

const Chat = ({ user, secret }) => {
  const chatProps = useMultiChatLogic(
    import.meta.env.VITE_PROJECT_ID,
    user,
    secret
  )

  const themeColor = useSelector(state => state.themeColor.theme)
  const mobileNav = useSelector(state => state.mobileNav)

  const ref = useRef(null)
  useEffect(() => {
    const chatRoom = ref.current.children[0]
    const mobileBtnLeft = chatRoom.children[3]
    const mobileBtnRight = chatRoom.children[4]

    chatRoom.removeChild(mobileBtnLeft)
    chatRoom.removeChild(mobileBtnRight)
  }, [])

  return (
    <main
      ref={ref}
      className={`${themeColor} ${mobileNav.left &&
        'mobile-nav-left-active'} ${mobileNav.right &&
        'mobile-nav-right-active'}`}
    >
      <MultiChatWindow
        {...chatProps}
        renderChatForm={props => <ChatForm props={props} />}
        renderChatHeader={chat => <Header chat={chat} />}
        renderMessageForm={props => {
          return <AiChatForm props={props} activeChat={chatProps.chat} />
        }}
      />
      <MultiChatSocket {...chatProps} />
    </main>
  )
}

export default Chat
