import React, { useState } from 'react';
import { Upload, Button, Card } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

interface MachineLearningCardProps {
  onFileChange: (file: File) => void;
}

const MachineLearningCard: React.FC<MachineLearningCardProps> = ({ onFileChange }) => {
  const [fileList, setFileList] = useState<any[]>([]);

  const handleChange = (info: any) => {
    let fileList = [...info.fileList];
    fileList = fileList.slice(-1); // Limit to one file
    setFileList(fileList);

    if (info.file.status === 'done') {
      const file = fileList[0].originFileObj;
      onFileChange(file);
    }
  };

  const customRequest = ({ file, onSuccess }: any) => {
    setTimeout(() => {
      onSuccess('ok');
    }, 0);
  };

  return (
    <Card
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: '400px',
      width: '800px',
      paddingTop: '20px', 
      backgroundColor: '#6D9773',
      alignContent: 'center'
    }}
  >
    <h1
      style={{
        color: 'white'
      }}
    >Machine Learning Result</h1>


  </Card>
  
  );
};

export default MachineLearningCard;
