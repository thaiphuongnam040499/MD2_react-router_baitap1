import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function UserDetail(props) {
  const navigate = useNavigate()
  const [selectUser,setSelectUser] = useState("")
  const useId =useParams().userId
  let {users} = props 
  useEffect(()=>{
    users.forEach((user) => {
      if (user.id===useId) {
        setSelectUser(user)
      }
    });
  },[])
  return (
    <div>
        <h1 className="my-3">User Detail</h1>
        <div className="content row ">
          <div className="col-6">
            <ul className="list-group">
              <li className="list-group-item">
                <h5>Name</h5>
                <ul>
                  <li>user name: {selectUser.name}</li>
                  <li>email:{selectUser.email}</li>
                </ul>
              </li>
              <li className="list-group-item">
                <h5>adress detail</h5>
                <ul>
                  <li>street:</li>
                  <li>Suite:</li>
                  <li>City:</li>
                  <li>Zipcode:</li>
                </ul>
              </li>
              <li className="list-group-item">Phone</li>
              <li className="list-group-item">Website</li>
              <li className="list-group-item">
                <h5>Company Detail</h5>
                <ul>
                  <li>name:</li>
                  <li>catch:</li>
                  <li>BS:</li>
                </ul>
              </li>
            </ul>
            <div className='text-center my-3'>
            <button onClick={()=>navigate(-1)} className='btn btn-info'>Ok</button>
          </div>
          </div>

          
          <div className="col-6">
            <img
              className="img-fluid"
              src="https://smilemedia.vn/wp-content/uploads/2022/09/cach-chup-hinh-the-dep.jpeg"
              alt=""
            />
             <p className="text-center">{selectUser.name+"'s photo"}</p>
          </div>
        </div>
    </div>
  )
}
