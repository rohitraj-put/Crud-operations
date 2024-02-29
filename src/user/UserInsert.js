import axios from 'axios'
import React, { useState } from 'react'


function UserInsert() {
  const [Posts, setPosts] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  })
  const submitHandler = (e) => {
    e.preventDefault()
    axios.post("http://localhost:4000/ragistion", Posts)
  }
  return (
    <>
      <form className='form'>
        <input type='text'
          className='txt'
          placeholder='Enter Your first Name' required
          onChange={e => setPosts({ ...Posts, firstName: e.target.value })}
        />
        <input type='text'
          className='txt'
          placeholder='Enter Your last Name' required
          onChange={e => setPosts({ ...Posts, lastName: e.target.value })}
        />
        <input type='email'
          className='txt'
          placeholder='Enter Your email' required
          onChange={e => setPosts({ ...Posts, email: e.target.value })}
        />
        <input type='password'
          className='txt'
          placeholder='Enter Your Pasword' required
          onChange={e => setPosts({ ...Posts, password: e.target.value })}
        />
        <button onClick={submitHandler}>Insert Data</button>
      </form>
      {/* <h2>{JSON.stringify(Posts)}</h2> */}

    </>

  )
}

export default UserInsert