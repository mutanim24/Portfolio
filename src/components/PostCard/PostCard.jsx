
import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({post}) => {
    return (
        <div key={post._id} className="overflow-hidden rounded text-white shadow-md shadow-slate-200">
            {/*  <!-- Image --> */}
            <figure>
                <img
                    src={post.image}
                    alt="card image"
                    className="aspect-video w-full"
                />
            </figure>
            {/*  <!-- Body--> */}
            <div className="p-6">
                <header className="mb-4 flex gap-4">

                    <div>
                        <h3 className="text-xl font-medium">
                            {post.title}
                        </h3>
                        <p className="text-sm text-slate-400"> By {post.author.name}, {post.publish_date}</p>
                    </div>
                </header>
                <p className="text-base">
                    {post.description.slice(0, 80)}....
                </p>
            </div>
            {/*  <!-- Action base sized link button --> */}
            <div className="flex justify-end gap-2 p-2 pt-0">
                <Link to={`/blog/${post._id}`} className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-gray-600 border border-white bottom-5">
                    <span>Read more!</span>
                </Link>
            </div>
        </div>
    );
};

export default PostCard;