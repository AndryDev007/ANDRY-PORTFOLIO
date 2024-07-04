import React from 'react';
import { Button } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';

const DownloadButton = ({ fileUrl, fileName }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();

    setTimeout(() => {
      document.body.removeChild(link);
      window.URL.revokeObjectURL(link.href);
    }, 100);
  };

  return (
    <Button variant="info" onClick={handleDownload}>
      Download my CV <FaDownload />
    </Button>
  );
};

export default DownloadButton;