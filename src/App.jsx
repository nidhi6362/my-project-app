import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import MyProfile from './pages/MyProfile/MyProfile';
import './App.css';

const { Header, Sider, Content } = Layout;

const App = () => {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Header>
          <Navbar />
        </Header>
        <Layout>
          <Sider>
            <Sidebar />
          </Sider>
          <Layout style={{ padding: '24px' }}>
            <Content>
              <Routes>
                <Route path="/" element={<ProductDetails />} />
                <Route path="/my-profile" element={<MyProfile />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
};
export default App;