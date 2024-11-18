import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();
    console.log(error)
    return (
        <div>
            <h2>Opps!!</h2>
            <p>{error.statusText}</p>
            {
                error.status === 404 && <div>
                    <h3>page id not Found !</h3>
                    <p>Please Back to Home Page</p>
                    <Link to={'/'}><button>Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;