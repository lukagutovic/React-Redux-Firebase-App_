import React from 'react'
import { NavLink } from 'react-router-dom'

const YoutubePageNav = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/youtubePage'>VIDEO PAGE</NavLink></li>
      </ul>
    </div>
  )
}

export default YoutubePageNav