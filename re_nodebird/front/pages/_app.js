import Proptypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';

const Nodebird = ({ Component }) => {
    return(
        <>
        <Head>
            <meta charSet='utf-8' />
            <title>Nodebird</title>
        </Head>
        <Component />
        </>
    )
};

Nodebird.prototype = {
    Component : Proptypes.elementType.isRequired,
} //점검

export default Nodebird;