import React from 'react';
import { Layout, Col } from 'antd';
import UploadFile from '../../assets/dashboard/uploadFile';
import '../../global.css';
import MachineLearningCard from '../../assets/dashboard/machineLearningCard';

const { Content, Footer } = Layout;

const HomepageDashboard: React.FC = () => {
    const handleFileChange = (file: File) => {
        // Handle the file change event here
        console.log('Selected file:', file);
        // You can call your API to process the file here
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Content
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    minHeight: '540px',
                }}
            >
                 <Col span={6}>
                    <div className='content-item-mid' style={{marginBottom: '40px'}}>
                        <UploadFile onFileChange={handleFileChange}/>
                    </div>
                 </Col>

                 <Col span={16}>
                    <div className='content-item-mid' style={{marginBottom: '40px'}}>
                        <MachineLearningCard onFileChange={handleFileChange}/>
                    </div>
                 </Col>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Machine Learning Prediction Model © 2024 Created Regina Diva Dharma
            </Footer>
        </Layout>
    );
};

export default HomepageDashboard;
