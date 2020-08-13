import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { createWrapper } from 'next-redux-wrapper';
import AppLayout from '../components/AppLayout';
import { Provider } from 'react-redux';
import reducer from '../reducers';

import wrapper from '../store/configureStore';
import { initialState } from '../reducers/user';
import { applyMiddleware } from 'redux';

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

const configureStore = (initialState, options) => {
  const sagaMiddleware = createSagaMiddleware();
  /* sagaMiddleware 별도의 파일로 불가 (영상은 x) */
  const middlewares = [sagaMiddleware];  // <- 넣고 싶은 미들웨어 넣기
  const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : compose(
      applyMiddleware(...middlewares),
      !options.inServer && window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
        ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
    );
  const store = createStore(reducer, initialState, enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
};


export default withRedux(configureStore)(NodeBird);


/* 고차 컴포넌트 */
/* export default withRedux((initialState, options) => {
  const middlewares = [];
  const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(
      applyMiddleware(...middlewares),
    );
  const store = createStore(reducer, enhancer);
  return store;
})(NodeBird);
 */