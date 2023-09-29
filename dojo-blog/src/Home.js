import React, { useEffect, useState } from "react";
import useFetch from "./lessons/useFetch"
import BlogList from "./lessons/BlogList";

const Home = () => {
    //const handleDelete = (id) => setBlogs(blogs.filter(blog => blog.id !== id));
    const { data: blogs, isPending, errorMessage } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {isPending && <p>Loading ...</p>}
            {errorMessage && <p>{errorMessage}</p>}
            {blogs && <BlogList blogs={blogs} title='All posts' /*handleDelete={handleDelete}*/ />}
        </div>
    );
}

export default Home;
