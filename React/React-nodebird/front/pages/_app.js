import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { createWrapper } from 'next-redux-wrapper';
import AppLayout from '../components/AppLayout';
import { Provider } from 'react-redux';
import reducer from '../reducers';

import wrapper from '../store/configureStore';

const NodeBird = ({ Component, store }) => {
  return (
    /* 컴포넌트  최상의 provider  store = redux state  */
    <Provider store={store}>
      <Head>
        <title>NodeBird</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
      </Head>
      <AppLayout>
        <Component />
      </AppLayout>
    </Provider>
  );
};

NodeBird.propTypes = {
  Component: PropTypes.elementType,
  store: PropTypes.object,
};

/* 고차 컴포넌트 */
export default wrapper.withRedux(NodeBird);