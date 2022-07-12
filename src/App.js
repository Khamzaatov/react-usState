import { useState } from 'react'
import './style.css'

function App() {
  const [text, setText] = useState()
  const [empty, setEmpty] = useState(true)
  const [send, setSend] = useState(false)
  const [blur, setBlur] = useState(false)

  const handleText = (e) => {
    setText(e.target.value)
    if (!e.target.value) {
      setEmpty(true)
    } else {
    setEmpty(false)
    setSend(false)
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()


    console.log(text)
    setText('')
    setEmpty(true)
    setSend(true)
    setBlur(false)
  }

  const hadnleBlur = () => {
    setBlur(true)
    setSend(false)
  }



  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleText} onBlur={hadnleBlur} />
        <button type="submit" disabled={empty}>Клик</button>
      </form>
      {(empty && blur) && <i><div className='error'>Поле ввода не может быть пустым!</div></i>}
      {send ? <i><div className='send'>Сообщение отправлено!</div></i> : null}
    </div>
  );
}

export default App;
