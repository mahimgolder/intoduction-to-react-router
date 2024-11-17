import { Link } from "react-router-dom";

const Post = ({post}) => {
    const {id, title, body} = post
    const userStyle ={
        border: '2px solid blue',
        padding: '10px',
        borderRadius: '20px'

    }
    return (
        <div style={userStyle}>
            <h4>Post of Id:{id}</h4>
            <p>{title}</p>
            <p><small>{body}</small></p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <link to={`/post/${id}`}>
            <button>Show Details</button>
            </link>
        </div>
    );
};
export default Post;