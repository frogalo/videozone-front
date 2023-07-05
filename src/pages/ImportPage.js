import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ImportPage() {
    const [videoTitles, setVideoTitles] = useState([]);

    useEffect(() => {
        fetchVideoTitles();
    }, []);

    const fetchVideoTitles = async () => {
        try {
            const response = await axios.get('http://localhost:8081/videos/titles');
            setVideoTitles(response.data);
        } catch (error) {
            console.error('Error fetching video titles:', error);
            // Handle error
        }
    };

    return (
        <div>
            <h1>Import Page</h1>
            <ul>
                {videoTitles.map((title, index) => (
                    <li key={index}>{title}</li>
                ))}
            </ul>
        </div>
    );
}

export default ImportPage;
