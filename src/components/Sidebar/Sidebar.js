import React from 'react';
import './Sidebar.css';
import User from '../../containers/User/User';

const Sidebar = (props) => {
    return (
        <aside className="Sidebar">
            {
                props.contacts.map(contact => {
                    return (
                        <User
                            user={contact}
                            key={contact.user_id}
                        />
                    )
                })
            }
        </aside>
    )
}

export default Sidebar;
