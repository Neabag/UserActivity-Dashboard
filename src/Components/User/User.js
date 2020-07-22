import React from 'react'
import './User.css';
export default function User(props) {
    return (
        <div className="User" onClick={() => props.openPopup(props.user.id)}>
            <h3>{props.user.real_name}</h3>
        </div>
    )
}
