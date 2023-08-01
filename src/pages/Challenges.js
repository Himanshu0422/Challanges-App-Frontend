import React from 'react'
import Header from '../components/Header';
import Layout from '../components/Layout';
import { Outlet } from 'react-router-dom';

const Challenges = () => {

    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <Layout>
                    <Outlet />
                </Layout>
            </div>
        </div>
    )
}

export default Challenges;