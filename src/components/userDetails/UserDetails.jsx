import { Link, useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    
    const {name, id} = user;
    console.log(name)
    return (
        <div>
            <h2>Details About users: {name}</h2>
            <Link to={'users'}>
            <button>Back to users</button>
            </Link>
        </div>
    );
};

export default UserDetails;