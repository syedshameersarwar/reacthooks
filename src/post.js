import React from 'react';

const Post = ({ post, onUpdateClick, onDelete }) => {
    return (
    <div>
        <h3>{post.id}</h3><br />
        <p>{post.title}</p>
        <p>{post.body}</p>
        <p>{post.userId}</p>
        <button onClick = {() => onDelete(post)}>Delete</button>
        <button onClick = {() => onUpdateClick(post)}>Update</button>
        <br/>
        <p>***</p>
        <br/><br/>
    </div>);
}

export default Post;