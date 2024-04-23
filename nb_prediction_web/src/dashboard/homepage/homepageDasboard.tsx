import React, {useState} from 'react';
import { Layout, Col } from 'antd';
import '../../global.css';
import MachineLearningCard from '../../assets/dashboard/machineLearningCard';
import TutorialCard from '../../assets/dashboard/tutorialCard';

const { Content, Footer } = Layout;

const HomepageDashboard: React.FC = () => {
    const [result, setResult] = useState<string>('');

    const handleTextSubmit = (text: string) => {
        // Here you can perform any necessary actions with the submitted text
        // For example, you can make an API request to a backend server to process the text
        // For demonstration purposes, let's just set the result in the state
        setResult(`Text submitted: ${text}`);
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
                        <TutorialCard/>
                    </div>
                 </Col>

                 <Col span={16}>
                    <div className='content-item-mid' style={{marginBottom: '40px'}}>
                        <MachineLearningCard onTextSubmit={handleTextSubmit}/>
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
