import React, { useState } from 'react'

export const AddCategory = ({onNewValue}) => {
    const [inputValue, setinputValue] = useState()

    //una manera
    // const onInputChange = (event) =>{
    //     setinputValue(event.target.value)
    // }

    //hace parte del input
    // onChange={(event) => onInputChange(event)}

    const onInputChange = ({target}) =>{
        setinputValue(target.value)
    }

    const onSubmit = (event) =>{
        event.preventDefault()
        if (inputValue.trim().length <=1) return
        //setcategories(categories => [inputValue, ...categories ])
        onNewValue(inputValue.trim())
        setinputValue('')
    }


  return (
    <form onSubmit={(event) => onSubmit(event)}>
       <input 
        type="text" 
        placeholder='Buscar gifs'
        value={inputValue} 
        onChange={onInputChange}/>


    </form>
   
  )
}
