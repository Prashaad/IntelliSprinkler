import React, { useState, useEffect } from "react";
import axios from 'axios';

const doPost = (endpoint, query) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'POST',
        url: `http://65.1.145.209/sprinkler/${endpoint}`,
        id: 100,
        name: "Post Test",
        Description: "NewDesc"
    };

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.post(options);
            setData(response.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            alert(error)
        } finally{
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch };
}

export default doPost;