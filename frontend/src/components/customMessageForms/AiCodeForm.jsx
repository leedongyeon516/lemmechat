import { useInput } from '../../hooks/useInput'
import { useAiCodeMutation } from '../../slices/ai/aiApiSlice'

import BaseForm from './util-components/BaseForm'

const AiCodeForm = ({ props, activeChat }) => {
  const [state, setState, onChangeHandler] = useInput({
    text: '',
    attached: '',
    preview: ''
  })

  const [aiCode, { isLoading }] = useAiCodeMutation()

  const onSubmitHandler = async () => {
    const { text, attached } = state
    const { username, onSubmit } = props

    const created = new Date().getTime()
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

    await aiCode(formData)
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

export default AiCodeForm
