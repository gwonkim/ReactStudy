import React from 'react'; //next는 안 해도 됨 but { use~ } 때문에 결국 사용 
import Link from 'next/link';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';


const Home = () => {
    return (
        <>
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"></link>
                <script src="http://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.js" />
            </Head>
            <Link href="/about" ><a>about</a></Link>
            <div>Hello, Next!</div>
        </>
    );
};

export default Home;