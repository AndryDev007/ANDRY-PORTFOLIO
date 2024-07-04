import React from 'react';
import { Button } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';

const DownloadButton = ({ fileUrl, fileName }) => {
  const handleDownload = async () => {
    try {
      console.log(`Attempting to download file from: ${fileUrl}`);

      const response = await fetch(fileUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/octet-stream',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const blob = await response.blob();
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = fileName;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        window.URL.revokeObjectURL(link.href);
      }, 100);
    } catch (error) {
      console.error('Error downloading file:', error.message);
      alert('Error downloading file. Please try again.');
    }
  };

  return (
    <Button variant="info" onClick={handleDownload}>
      Download my CV <FaDownload />
    </Button>
  );
};

export default DownloadButton;
