import React from 'react'

const InputSearch = ({inputText, setInputText}) => {

  const handleChange = e => {
    setInputText(e.target.value)
  }

  return (
    <form>
      <input value={inputText} onChange={handleChange} type="text" />
    </form>
  )
}

export default InputSearch