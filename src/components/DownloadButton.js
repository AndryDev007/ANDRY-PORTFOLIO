import React from 'react';
import { Button } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';

const DownloadButton = ({ fileUrl, fileName }) => {
    const handleDownload = () => {
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  
    return (
      <Button variant="info" onClick={handleDownload}>
        Download my CV<FaDownload />
      </Button>
    );
  };
  
  export default DownloadButton;
  