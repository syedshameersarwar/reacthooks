import React, { useState, useEffect } from 'react';

const AddForm = ({ handleAdd }) => {
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [userId,setUserId] = useState('');

    useEffect(() => {      
        return () => {
            setTitle('');
            setBody('');
            setUserId('');
        };
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            body: body,
            userId: userId,
            title: title
        };

        handleAdd(newPost);
    }

    const handleDisable = () => {
        if( body === '' || userId === '' || title === '')
            return true;
        return false;
    }


    return(
        <div>
            <form onSubmit = {handleSubmit}>

                <input type = 'text' value = {title} 
                onChange = {e => setTitle(e.target.value)}
                placeholder = 'Post Title' />
                
                <input type = 'text' value = {body} 
                onChange = {e => setBody(e.target.value)}
                placeholder = 'Body' />

                <input type = 'text' value = {userId} 
                onChange = {e => setUserId(e.target.value)}
                placeholder = 'User Id' />

                <button type = 'submit' disabled = {handleDisable()}>
                    Submit
                </button>
            </form>
        </div>)
}


export default AddForm;
