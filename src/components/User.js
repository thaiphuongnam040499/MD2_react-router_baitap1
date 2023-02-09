import React from 'react'
import { NavLink } from 'react-router-dom'

export default function User(props) {
    let { users } = props
    return (
        <div>
            <div className="user">
                <h1 className="my-3">User page</h1>
                <div className="row">
                    {
                        users.map((user) =>
                            <div key={user.id} className="col-3 my-3">
                                <div className="card text-left">
                                    <img
                                        className="card-img-top"
                                        src="https://smilemedia.vn/wp-content/uploads/2022/09/cach-chup-hinh-the-dep.jpeg"
                                        alt=""
                                    />
                                    <div className="card-body">
                                        <h4 className="card-title">Name: {user.name}</h4>
                                        <p className="card-text">Email: {user.email}</p>
                                    </div>
                                    <div className="card-body">
                                        <NavLink to={`/user/${user.id}`}><button className="btn btn-primary">Show more details</button></NavLink>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

        </div>
    )
}
