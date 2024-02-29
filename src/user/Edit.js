import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


function Edit() {
    const { id } = useParams()
    const [datas, setDatas] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`http://localhost:4000/ragistion/${id}`)
            .then(res => {
                console.log(res)
                setDatas(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    const SubmitHendler = () => {
        axios.patch(`http://localhost:4000/ragistion/${id}`, datas)
        navigate('/UserView')
    }


    return (
        <>

            <form onSubmit={SubmitHendler}>
                <input onChange={e => setDatas({ ...datas, id: e.target.value })} value={datas.id} />
                <input onChange={e => setDatas({ ...datas, firstName: e.target.value })} type='text' value={datas.firstName} />
                <input onChange={e => setDatas({ ...datas, lastName: e.target.value })} type='text' value={datas.lastName} />
                <input onChange={e => setDatas({ ...datas, email: e.target.value })} type='email' value={datas.email} />
                <input onChange={e => setDatas({ ...datas, password: e.target.value })} type='password' value={datas.password} />
                <button>Update</button>
            </form>

        </>
    )
}

export default Edit