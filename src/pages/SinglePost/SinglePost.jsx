import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SinglePost = () => {
    const post = useLoaderData();

    return (
        <div className='m-16 shadow-2xl p-12'>
            <h1>{post.title}</h1>
            <p>{post.author}</p>
            <img src={post.image} alt="" />
            <p>{post.description}</p>
        </div>
    );
};

export default SinglePost;
