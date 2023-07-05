import React, {useState} from 'react';
import axios from 'axios';

function UploadPage() {
    const [selectedFile, setSelectedFile] = useState(null);

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
                console.log('Video uploaded successfully.');
                // Do something after successful upload
            } catch (error) {
                console.error('Error uploading video:', error);
                // Handle error
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
        </div>
    );
}

export default UploadPage;
