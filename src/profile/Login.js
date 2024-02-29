import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Login() {
    const [users, setUsers] = useState({
        email:"",
        password:""
    })
    const usenavigate = useNavigate()

    function submitForm(e) {
        e.preventDefault()

        if (users.email == "user@gmail.com" && users.password == "12345") {
            usenavigate("/welcome")
        } else if (users.email == "admin@gmail.com" && users.password == "12345") {
            usenavigate("/admin")
        } else if (users.email == "guest@gmail.com" && users.password == "12345") {
            usenavigate("/guest")
        }
        else {
            alert("fill correct information")
        }
    }

    return (
        <form className='form' onSubmit={submitForm}>
            <input type='email'
                className='txt'
                placeholder='Enter Your email'
                onChange={e => setUsers({ ...users, email: e.target.value })}

            />
            <input type='text'
                className='txt'
                placeholder='Enter Your Pasword'
                onChange={e => setUsers({ ...users, password: e.target.value })}

            />
            <button>submit</button>
        </form>
    )
}

export default Login