import React, { useState } from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

interface UploadFileProps {
  onFileChange: (file: File) => void;
}

const UploadFile: React.FC<UploadFileProps> = ({ onFileChange }) => {
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
    <Upload
      fileList={fileList}
      onChange={handleChange}
      customRequest={customRequest}
      maxCount={1}
    >
      <Button icon={<UploadOutlined />}>Upload File</Button>
    </Upload>
  );
};

export default UploadFile;
