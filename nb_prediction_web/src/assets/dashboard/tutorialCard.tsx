import React from 'react';
import { Card } from 'antd';

const TutorialCard: React.FC = () => {

  return (
    <Card
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '400px',
        width: '450px',
        paddingTop: '20px',
        backgroundColor: '#6D9773',
        alignContent: 'center'
      }}
    >
      <h1
        style={{
          color: 'white'
        }}
      >Please Read The Instructions!</h1>
      <p style={{
        color: 'white',
        paddingBottom: '20px'
      }}>
        How to use the machine learning website? <tr></tr>
        1. Please write down the sentence to be predicted <tr></tr>
        2. Click the submit button <tr></tr>
        3. See the results!
      </p>
     
    </Card>
  );
};

export default TutorialCard;
