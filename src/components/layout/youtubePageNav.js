import React from 'react'
import { NavLink } from 'react-router-dom'

const YoutubePageNav = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/youtubePage'>Youtube Page</NavLink></li>
      </ul>
    </div>
  )
}

export default YoutubePageNav