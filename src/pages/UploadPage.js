import React, {useState} from 'react';
import axios from 'axios';

function App() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadMessage, setUploadMessage] = useState('');

    const handleUploadClick = async () => {
        // Open file explorer
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'video/*'; // Specify accepted file types as video files
        input.onchange = (event) => {
            const file = event.target.files[0];
            setSelectedFile(file);
        };
        input.click();
    };

    const uploadVideo = async () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile);

            try {
                await axios.post('http://localhost:8081/videos/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                setUploadMessage('Video uploaded successfully.');
                // Do something after successful upload
            } catch (error) {
                console.error('Error uploading video:', error);
                if (error.response) {
                    // Error with response from the server
                    setUploadMessage(`Error: ${error.response.data}`);
                    // Display the error message on the screen or handle it accordingly
                } else {
                    // Network error or other general error
                    setUploadMessage('Error: Failed to upload the video.');
                    // Display a generic error message on the screen or handle it accordingly
                }
            }
        } else {
            console.log('No file selected');
        }
    };


    return (
        <div>
            <button onClick={handleUploadClick}>Upload</button>
            {selectedFile && <p>Selected file: {selectedFile.name}</p>}
            <button onClick={uploadVideo}>Submit</button>
            {uploadMessage && <p>{uploadMessage}</p>}
        </div>
    );
}

export default App;
