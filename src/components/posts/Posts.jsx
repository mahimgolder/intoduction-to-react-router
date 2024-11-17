import { useLoaderData } from "react-router-dom";
import Post from '../post/Post'


const Posts = () => {
    const posts = useLoaderData();
    const {id, title, body} =posts;
    return (
        <div>
            <h2>Posts:{posts.length}</h2>
            <div className="users">
                {
                    posts.map(post => <Post key={post.id} post ={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;