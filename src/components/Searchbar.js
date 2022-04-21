import React from 'react'
import './stylesheet.css'
import { ReactComponent as Vector } from './Vector.svg'



function Searchbar({ placeholder }) {
  return (

    <div className='normal-container'>
      <div className='Search-inputs'>
        <input type='text' placeholder={placeholder} />
       <div className='searchIcon'><Vector/></div>
      </div>

      <div className='dataResult'></div>
    </div>

  )
}

export default Searchbar;
