

import {useState} from 'react'
import {AddCategory, GifGrid} from './components'
//import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    // HOOK SNIPET  
    const [categories, setcategories] = useState(['One Punch'])

    const onAddCategory =(onNewValue)=>{
        //categories.push['valorant']
       //agregar un nuevo elemento a un objeto en un hook
       if(categories.includes(onNewValue))return
        setcategories([onNewValue, ...categories])

        //setcategories(cat => [...cat,'Valorant'])


    }

  return (

    <>
    {/* Titulo */}
        <h1>GifExpertApp</h1>

    {/* Input */}
    <AddCategory 
    // setcategories={setcategories}
    onNewValue={event => onAddCategory(event)}
    />


    {/* Listado de Gif */}
    {/* <button onClick={onAddCategory}>Agregar</button> */}

        {
            categories.map((category) => (
        

                <GifGrid
                    key={category}
                    category={category}
                />

                // <div key={category}>
                //       <li >{category}</li>
                // </div>
            
            ))
        }

          {/* Gif Item */}
    </>

  )
}
