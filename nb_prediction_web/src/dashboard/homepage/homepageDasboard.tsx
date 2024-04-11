import React from 'react';
import { Layout } from 'antd';
import '../../global.css';

const { Content, Footer } = Layout;

const HomepageDashboard: React.FC = () => {
  
  return (
    <Layout>
      <Content style={{ backgroundColor: '#A8C7E6', minHeight: '540px' }}>
          
      </Content>
      
      <Footer style={{ textAlign: 'center' }}>
        Naive Bayes Prediction Model © 2024 Created Regina Diva Dharma
      </Footer>
    </Layout>
  );
};

export default HomepageDashboard;
