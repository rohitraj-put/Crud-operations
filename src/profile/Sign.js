import React, { useRef } from 'react'
import Home from '../user/Home'

function Sign() {
    const email = useRef()
    const password = useRef()

    const getEmail = localStorage.getItem("emailData")
    const getPass = localStorage.getItem("passwordData")

    const submitHandler = () => {

        if (email.current.value === "rohit@gmail.com" && password.current.value === "12345") {
            localStorage.setItem("emailData", "rohit@gmail.com")
            localStorage.setItem("passwordData", "12345")
        }
    }

    return (
        <>
            {
                getEmail && getPass ?
                    <Home /> :
                    <form onSubmit={submitHandler}>
                        <div>
                            <input type='email'
                                placeholder='Enter email'
                                ref={email}
                            />
                        </div>
                        <div>
                            <input type='password'
                                placeholder='Enter password'
                                ref={password}

                            />
                        </div>
                        <button>Submit</button>
                    </form>
            }
        </>
    )
}

export default Sign