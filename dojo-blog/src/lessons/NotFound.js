import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return (
        <div>
            <h2>Page not found</h2>
            <Link to='/'>Go back to home page</Link>
        </div>
    );
}

export default NotFound;