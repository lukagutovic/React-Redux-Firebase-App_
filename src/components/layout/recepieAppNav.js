import React from 'react'
import { NavLink } from 'react-router-dom'

const RecepieAppNav = () => {
 
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/recepieApp'>FIND YOUR RECIPE</NavLink></li>
      </ul>
    </div>
  )
}

export default RecepieAppNav