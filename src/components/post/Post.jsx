import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id, title, body} = post;
    const navigate = useNavigate();
    const userStyle ={
        border: '2px solid blue',
        padding: '10px',
        borderRadius: '20px'

    }


    const handleShowDetails = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div style={userStyle}>
            <h4>Post of Id:{id}</h4>
            <p>{title}</p>
            <p><small>{body}</small></p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}>
            <button>Show Details</button>
            </Link>
            <br />
            <button onClick={handleShowDetails}>Show Details</button>
        </div>
    );
};
export default Post;