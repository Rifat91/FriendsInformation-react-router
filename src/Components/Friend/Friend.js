import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Friend = (props) => {
    const { name, email, id } = props.friend;
    const friendStyle = {
        border: '1px solid tomato',
        margin: '20px',
        padding: '20px',
        borderRadius: '10px',
        width: '400px',
        height: '200px',
        textAlign: 'center',
        marginLeft: '530px',
        boxShadow:"5px 5px 3px 3px gray"
    }
    return (
        <div>
            <div style={friendStyle}>
                <h2>Name : {name}</h2>
                <p>Email : {email}</p>
                <Link to={`/friend/${id}`}>
                    <Button variant="success">Show Detail Of {id}</Button>{' '}
                </Link>
            </div>
        </div>
    );
};

export default Friend;