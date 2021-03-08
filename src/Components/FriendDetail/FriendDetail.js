import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = (props) => {
    //const {name, username, email, address, phone, website, company} = props.friendId;
    const [friend, setFriend] = useState({});
    const {friendId} = useParams();
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data));
    },[]);

    const friendDetailStyle = {
        border: '1px solid tomato',
        margin: '20px',
        padding: '20px',
        borderRadius: '10px',
        width: '400px',
        height: '260px',
        textAlign: 'center',
        marginLeft: '530px',
        boxShadow:"5px 5px 3px 3px gray",
    }
    return (
        <div style={friendDetailStyle}>
            <h1>Name : {friend.name}</h1>
            <h4>UserName : {friend.username}</h4>
            <p>Email : {friend.email}</p>
            <>Phone : {friend.phone}</>
            <p>Website : {friend.website}</p>
        </div>

    );
};

export default FriendDetail;