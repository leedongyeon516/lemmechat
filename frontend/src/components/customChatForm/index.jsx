import { useState } from 'react'

const CustomChatForm = ({ props }) => {
  const [chatRoomName, setChatRoomName] = useState('')

  const onSubmitHandler = e => {
    e.preventDefault()

    if (!chatRoomName) return

    const { onFormSubmit } = props

    onFormSubmit(chatRoomName)
    setChatRoomName('')
  }

  return (
    <div className={`p-3 d-flex justify-content-center`}>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          value={chatRoomName}
          placeholder="create a chat room"
          onChange={e => setChatRoomName(e.target.value)}
        />
      </form>
      <div onClick={onSubmitHandler}>
        <img
          alt="ChatGPT_logo.svg"
          src="//upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/512px-ChatGPT_logo.svg.png"
          decoding="async"
          width="25"
          height="25"
        ></img>
      </div>
      <div></div>
    </div>
  )
}

export default CustomChatForm
