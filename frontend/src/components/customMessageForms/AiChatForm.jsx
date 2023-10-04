import { useInput } from '../../hooks/useInput'
import { useAiChatMutation } from '../../slices/ai/aiApiSlice'

import BaseForm from './components/BaseForm'

const AiChatForm = ({ props, activeChat }) => {
  const [state, setState, onChangeHandler] = useInput({
    text: '',
    attached: '',
    preview: ''
  })

  const [aiChat, { isLoading }] = useAiChatMutation()

  const onSubmitHandler = async () => {
    const { text, attached } = state
    const { username, onSubmit } = props

    const created = new Date().toISOString()
    const attachments = attached
      ? [{ blob: attached, file: attached.name }]
      : []

    const formData = {
      created,
      activeChatId: activeChat.id,
      sender_username: username,
      text,
      attachments
    }

    onSubmit(formData)
    setState({ text: '', attached: '', preview: '' })

    const isAiChatOn = activeChat.people.some(user =>
      user.person.username.endsWith('_bot')
    )
    if (isAiChatOn) await aiChat(formData)
  }

  return (
    <BaseForm
      state={state}
      setState={setState}
      onChangeHandler={onChangeHandler}
      onSubmitHandler={onSubmitHandler}
      isLoading={isLoading}
    />
  )
}

export default AiChatForm
