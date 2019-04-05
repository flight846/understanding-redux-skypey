import React from 'react';

const Header = (props) => {
    const { user } = props;

    return (
        <h1>{ user.user_id }</h1>
    )
}

export default Header;