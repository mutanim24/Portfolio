import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('posts.json')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <div>
            <div>
                <SectionTitle title='Blog'></SectionTitle>
            </div>
            <div className="grid grid-cols-3 gap-5 mb-14">
                {
                    posts.map(post => <div key={post.id} className="overflow-hidden rounded text-white shadow-md shadow-slate-200">
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
                            <p>
                                {post.description.slice(0, 60)}....
                            </p>
                        </div>
                        {/*  <!-- Action base sized link button --> */}
                        <div className="flex justify-end gap-2 p-2 pt-0">
                            <button className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-gray-600">
                                <span>Read more!</span>
                            </button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Posts;