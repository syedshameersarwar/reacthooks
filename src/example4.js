import React,{ useState, useEffect } from 'react';
import Post from './post';
import AddForm from './addform';
import UpdateForm from './updateform';


const Posts = () => {
    const [posts,setPosts] = useState(null);
    const [update,setUpdate] = useState(false);
    const [showUpdate,setShowUpdate] = useState(false);
    const [remove,setRemove] = useState(false);
    const [create,setCreate] = useState(false);
    const [showCreate, setShowCreate] = useState(false);
    const [currentPost,setCurrentPost] = useState(null);

    useEffect(() => {
        if(!posts){
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(json => {
                    json.sort((p1,p2) => p1.id-p2.id);
                    setPosts(json);
                });
        }

        if(create){
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(currentPost),
                headers: {
                "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .then(json => {
                const updatedPosts = posts.concat([json]).sort(
                    (p1,p2) => p1.id-p2.id);
                setPosts(updatedPosts);
            });
            
            setCreate(false);
            setShowCreate(false);
        }

        if(remove){
            const updatedPosts=posts.filter(post=>post.id !== currentPost.id);
            setPosts(updatedPosts);

            fetch(`https://jsonplaceholder.typicode.com/posts/${currentPost.id}`
            , {
                method: 'DELETE'
            });

            setRemove(false);
        }

        if(update){
            const updatedPosts=posts.filter(
                post=>post.id !== currentPost.id).concat([currentPost]);
            updatedPosts.sort((p1,p2) => p1.id-p2.id);
            setPosts(updatedPosts);

            fetch('https://jsonplaceholder.typicode.com/posts/1', {
                method: 'PUT',
                body: JSON.stringify(currentPost),
                headers: {
                "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .then(json => console.log(json));

            setUpdate(false);
            setShowUpdate(false);
        }

    }, [posts,remove,currentPost,create,update])

    const handleAddClick = () => setShowCreate(true);

    const handleAdd = (post) => {
        setCreate(true);
        setCurrentPost(post);
    }
    
    const handleUpdateClick = (post) => {
        setShowUpdate(true);
        setCurrentPost(post);
    }

    const handleUpdate = (post) => {
        setUpdate(true);
        setCurrentPost(post);
    }

    const handleDelete = (post) => {
        setCurrentPost(post);
        setRemove(true);
    }

    const home = (<div>
        <button onClick = {handleAddClick}>
            +
        </button>
        <br />
        <ol>
        {posts && posts.map(post => <li key ={post.id}>
            <Post onUpdateClick = {handleUpdateClick}
             onDelete = {handleDelete} post = {post}/> 
            </li>)})}
        </ol>
    </div>);

    return(
    <div>
        {showCreate && !showUpdate?(<AddForm handleAdd = {handleAdd}/>):
        null}
        {!showCreate && showUpdate ? 
        <UpdateForm post = {currentPost} onUpdate = {handleUpdate} />:
        null}   
        {(!showCreate&&!showUpdate) && home} 
    </div>)
}

export default Posts;