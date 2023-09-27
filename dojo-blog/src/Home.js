import React, { useEffect, useState } from "react";
import BlogList from "./lessons/BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null);

    const handleDelete = (id) => setBlogs(blogs.filter(blog => blog.id !== id));

    useEffect(() => {
        setTimeout(() =>
            fetch('http://localhost:8000/blogss')
                .then(response => {
                    if (!response.ok) {
                        throw Error(`${response.status} - ${response.statusText}`);
                    }
                    return response.json();
                })
                .then(data => {
                    setBlogs(data);
                    setIsPending(false);
                    setErrorMessage(null);
                }).catch(error => {
                    setErrorMessage(error.message);
                    setIsPending(false);
                }),
            1000,
        );
    }, []);

    return (
        <div className="home">
            {isPending && <p>Loading ...</p>}
            {errorMessage && <p>{errorMessage}</p>}
            {blogs && <BlogList blogs={blogs} title='All posts' handleDelete={handleDelete} />}
        </div>
    );
}

export default Home;
