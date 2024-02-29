import React from 'react'
import { NavLink } from 'react-router-dom'




function Home() {
  const clickHandler = () => {
    localStorage.clear()
    window.location.reload()
  }
  return (
    <>

      <div className='head'>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/UserInsert" >userinsert</NavLink>
        <NavLink to="/UserView">userview</NavLink>
        <NavLink to="/UserUpdate">userupdate</NavLink>
        <NavLink to="/UserDelete">userdelete</NavLink>
        <button onClick={clickHandler}>Log Out</button>
      </div>


    </>
  )
}

export default Home