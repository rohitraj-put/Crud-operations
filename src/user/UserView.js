import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UserView() {
  const [datas, setDatas] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4000/ragistion')
      .then(res => {
        console.log(res)
        setDatas(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  },[])

  return (
    <>
      <table>
        {
          datas.map(data => <tr key={data.id}><td>{data.firstName}</td><td>{data.lastName}</td><td>{data.email}</td><td>{data.password}</td></tr>)
        }
      </table>
    </>
  )
}

export default UserView