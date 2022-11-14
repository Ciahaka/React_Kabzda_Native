import React from 'react';


const callback = (): number => {

  return 12
}
window.setTimeout(callback, 2000)

export const User = () => {
  const deleteUserHandler = () => {
    alert('Я тебя удалил!')
  }
  const saveUserHandler =()=>{
    alert('Я тебя вернул!')
  }
  return (
    <>
      <div>Alex</div>
      <button onClick={deleteUserHandler}>Delete</button>
      <button onClick={saveUserHandler}>Undelete</button>
    </>
  )
}
