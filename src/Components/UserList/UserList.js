import React from 'react'
import User from '../User/User';
import './UserList.css';
export default function UserList(props) {
    return (
        <section className="Users" >
            {props.users.map(user => (
                <User user={user}
                    key={user.id}
                    openPopup={props.openPopup} />
            ))}
        </section>
    )
}
