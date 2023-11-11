import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SinglePost = () => {
    const post = useLoaderData();
    console.log(post)
    return (
        <div>
            
        </div>
    );
};

export default SinglePost;