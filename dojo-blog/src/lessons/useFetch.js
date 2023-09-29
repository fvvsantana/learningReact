import React, { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        setTimeout(() =>
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw Error(`${response.status} - ${response.statusText}`);
                    }
                    return response.json();
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setErrorMessage(null);
                }).catch(error => {
                    setErrorMessage(error.message);
                    setIsPending(false);
                }),
            1000,
        );
    }, [url]);

    return { data, isPending, errorMessage };
}

export default useFetch;