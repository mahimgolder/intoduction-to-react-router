import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const { title, body} = post;
    const navigate = useNavigate();
    const {id} = useParams();


    console.log(postId)

    const handleGoBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <h3>Post Details About: {id}</h3>
            <p>{title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>GO Back</button>
        </div>
    );
};

export default PostDetails;