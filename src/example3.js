import React,{ useState, useEffect } from 'react';

//sample API call in functional component using
//useEffect hook
//this example does not require cleanup


const BasicApiCall = ({ postId }) => {
    const [post,setPost] = useState({
        "userId": null,
        "id": null,
        "title": '',
        "completed": false 
    });

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${postId}`)
            .then(res => res.json())
            .then(json => setPost(json));    
    }, [postId]); 

    return(
    <div>
        <span>Fetched Post: </span>
        <p>{post.title}</p>
        <p>{post.userId}</p>
        <p>{post.completed? 'true': 'false'}</p>
    </div>);
}

export default BasicApiCall;