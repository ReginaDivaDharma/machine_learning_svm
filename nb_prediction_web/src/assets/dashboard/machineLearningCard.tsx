import React, { useState } from 'react';
import { Card, Button, Input, message, Row, Col } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

interface MachineLearningCardProps {
  onTextSubmit: (text: string) => void;
}

const MachineLearningCard: React.FC<MachineLearningCardProps> = ({ onTextSubmit }) => {
  const [text, setText] = useState<string>('');
  const [prediction, setPrediction] = useState<string>('');

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleSubmit = async () => {
    // Call the onTextSubmit callback with the entered text
    onTextSubmit(text);
    // Simulate API call to predict sentiment
    try {
      const response = await fetch('https://api.example.com/predictSentiment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text })
      });
      const data = await response.json();
      // Set the predicted sentiment
      setPrediction(data.sentiment);
    } catch (error) {
      console.error('Error predicting sentiment:', error);
      message.error('Failed to predict sentiment. Please try again.');
    }
  };

  return (
    <Card
      style={{
        height: '400px',
        width: '800px',
        backgroundColor: '#6D9773',
      }}
    >
      <Row gutter={[16, 16]}>
        {/* Left Section - Text Input */}
        <Col span={12}>
          <Card
            style={{
              backgroundColor: '#fff',
              borderRadius: '5px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              padding: '20px',
              height:'350px'
            }}
          >
            <h1 style={{ color: '#6D9773', textAlign: 'center', marginBottom: '20px' }}>Enter Text</h1>
            <Input.TextArea
              value={text}
              onChange={handleTextChange}
              placeholder="Enter a paragraph or sentence"
              autoSize={{ minRows: 4, maxRows: 6 }}
              style={{
                width: '100%',
                minHeight: '250px',
                borderRadius: '5px',
                resize: 'none',
                marginBottom: '20px',
                border: '1px solid #ccc',
              }}
            />
            <Button
              type="primary"
              style={{
                width: '100%',
                borderRadius: '5px',
                backgroundColor: '#0C3B2E',
                border: 'none',
              }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Card>
        </Col>
        
        {/* Right Section - Output */}
        <Col span={12}>
          <Card
            style={{
              backgroundColor: '#fff',
              borderRadius: '5px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              padding: '20px',
              height:'350px'
            }}
          >
            <h1 style={{ color: '#6D9773', textAlign: 'center', marginBottom: '20px' }}>Prediction</h1>
            <div style={{ textAlign: 'center' }}>
              <h4 style={{ color: '#6D9773', textAlign: 'center', marginBottom: '20px' }}>The text inputted is predicted to be : </h4>
              <p>{prediction}</p>
            </div>
          </Card>
        </Col>
      </Row>
    </Card>
  );
};

export default MachineLearningCard;
