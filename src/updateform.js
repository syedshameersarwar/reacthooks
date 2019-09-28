import React, { useState, useEffect } from 'react';

const UpdateForm = ({ post, onUpdate }) => {
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [userId,setUserId] = useState('');
    const [recievedPost, setRecievedPost] = useState(null);

    useEffect(() => {
        setRecievedPost(post);

        return () => {
            setTitle('');
            setBody('');
            setUserId('');
            setRecievedPost(null);
        };
    }, [post]);


    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            id: recievedPost.id,
            body: recievedPost.body!==body&&body!== ''?body:recievedPost.body,
            userId: recievedPost.userId!==userId&&userId!== ''?userId:
                        recievedPost.userId,
            title: recievedPost.title!==title&&title!== ''?title:recievedPost.title
        };

        onUpdate(newPost);
    }

    const handleDisable = () => {
        if(recievedPost)
            if((recievedPost.body === body && recievedPost.title === title &&
                recievedPost.userId === userId)||(body===''
                &&title===''&&userId===''))
                return true;
        return false;
    }

    const formElement = (
            <div>
                <form onSubmit = {handleSubmit}>
                    <h3>{recievedPost?recievedPost.id:null}</h3>

                    <input type = 'text' 
                    defaultValue = {recievedPost? recievedPost.title:''}
                    onChange = {e => setTitle(e.target.value)}
                    placeholder = 'Post Title' />
                    
                    <input type = 'text'
                    defaultValue = {recievedPost? recievedPost.body:''}
                    onChange = {e => setBody(e.target.value)}
                    placeholder = 'Body' />

                    <input type = 'text' 
                    defaultValue = {recievedPost? recievedPost.userId:''} 
                    onChange = {e => setUserId(e.target.value)}
                    placeholder = 'User Id' />

                    <button type = 'submit'
                    disabled ={handleDisable()}>Submit</button>
                </form>
           </div>);

    if(!recievedPost)
        return null;
    
    return formElement;
           
}


export default UpdateForm;
