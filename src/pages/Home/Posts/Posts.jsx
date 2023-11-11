import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PostCard from "../../../components/PostCard/PostCard";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     fetch('posts.json')
    //         .then(res => res.json())
    //         .then(data => setPosts(data))
    // }, [])
    fetch("http://localhost:3000/blog")
    .then(res => res.json())
    .then(data => setPosts(data))
    return (
        <div id="blog">
            <div>
                <SectionTitle title='Blog'></SectionTitle>
            </div>
            <div className="grid md:grid-cols-3 gap-5 mb-14">
                {
                    posts.map(post => <PostCard
                        key={(post._id)}
                        post={post}
                    ></PostCard>)
                }
            </div>
        </div>
    );
};

export default Posts;