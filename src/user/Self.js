import axios from 'axios'
import React, { useState } from 'react'

function Self() {
    const [postD, setPostD] = useState({
        name: "",
        date: ""
    })
    const hendlarInput = (e) => {
        setPostD({ ...postD, [e.target.name]: e.target.value })
    }

    function subitHend(e){
        e.preventDefault()
        axios.post('http://localhost:4000/ragistion',postD)
        .then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    }
    return (
        <>
            <form onSubmit={subitHend}>
                name:<input type='text' placeholder='name' onChange={hendlarInput} name='name' />
                Date:<input type='date' placeholder='name' onChange={hendlarInput} name='date' />
                <button>submit</button>
            </form>
        </>
    )
}

export default Self