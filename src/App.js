import './App.css';
import './App.less'
import store from './store'
import { Provider } from 'react-redux'
import { Layout } from 'antd';
import React from 'react';
import Menu from './component/menu';
import './mock/data'
import 'antd/dist/antd.css'
import Home from './views/home'
import Wiki from './views/wiki/wiki'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import WikiHeader from '../src/component/wiki_card/wiki_header'
const { Header, Footer, Sider, Content } = Layout;


function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
            <Layout>
                <Sider className='sider' >
                    <Menu/>
                </Sider>
                <Layout>
                        <Header className='header'>
                            <WikiHeader/>
                        </Header>
                        <Routes>
                            <Route path='/home' element={<Home/>}></Route>
                            <Route path='/wiki' element={<Wiki/>}></Route>
                        </Routes>
                </Layout>
            </Layout>
        </BrowserRouter>
    </Provider>

  );
}

export default App;
