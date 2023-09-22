import React from "react";
import { useState } from "react";

const ButtonClickExample = () => {
    const title = "title of the blog";
    const website = "https://www.google.com";
    const handleClick = (event) => {
        console.log('Hello Ninjas!', event);
    }
    const [getName, setName] = useState('mario');



    return (
        <div className="home">
            <h2>Home page</h2>
            <h1>{title}</h1>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => setName('luigi')}>Click me again</button>
            <p>Name: {getName}</p>
            <p>
            <a href={website}>Go to Google</a>
            <button onClick={console.log('refreshed')}> Test</button>
            </p>
            
        </div>
    );
}

export default ButtonClickExample;