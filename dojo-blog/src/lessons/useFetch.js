import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();
        setTimeout(() =>
            fetch(url, { signal: abortController.signal })
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
                    if (error.name === 'AbortError') {
                        console.log('fetch aborted');
                    } else {
                        setErrorMessage(error.message);
                        setIsPending(false);
                    }
                }),
            1000,
        );
        return () => abortController.abort();
    }, [url]);

    return { data, isPending, errorMessage };
}

export default useFetch;