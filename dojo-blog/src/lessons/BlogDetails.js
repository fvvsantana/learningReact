import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isPending, errorMessage } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleDelete = () => {
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'DELETE',
        }).then(() => {
            history.push('/');
        });
    }

    return (
        <div className="blog-details">
            <div>{isPending && <p>Loading...</p>}</div>
            <div>{errorMessage}</div>
            {blog &&
                <div>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>Delete Blog</button>
                </div>
            }
        </div>
    );
}

export default BlogDetails;