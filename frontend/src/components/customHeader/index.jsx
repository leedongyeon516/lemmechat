import { useSelector } from 'react-redux'

const CustomHeader = ({ chat }) => {
  const themeColor = useSelector(state => state.themeColor.theme)

  return (
    <header className={`p-4 d-flex justify-content-around ${themeColor}`}>
      <h3>{chat.title}</h3>
    </header>
  )
}

export default CustomHeader
