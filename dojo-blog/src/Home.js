import React, { useEffect, useState } from "react";
import BlogList from "./lessons/BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true)

    const handleDelete = (id) => setBlogs(blogs.filter(blog => blog.id !== id));

    useEffect(() => {
        setTimeout(() =>
            fetch('http://localhost:8000/blogs').then(response => response.json()).then(data => {
                setBlogs(data);
                setIsPending(false);
            }),
            1000,
        )
    }, []);

    return (
        <div className="home">
            
            {isPending && <p>Loading ...</p>}
            {blogs && <BlogList blogs={blogs} title='All posts' handleDelete={handleDelete} />}
        </div>
    );
}

export default Home;
