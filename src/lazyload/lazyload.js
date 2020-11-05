import React, { Component, lazy, Suspense } from 'react';
import './style.css'

const Acomponent = lazy(() => import('./Acomponent'));
const Bcomponent = lazy(() => import('./Bcomponent'));
const Ccomponent = lazy(() => import('./Ccomponent'));
const Dcomponent = lazy(() => import('./Dcomponent'));
const Ecomponent = lazy(() => import('./Ecomponent'));
const Fcomponent = lazy(() => import('./Fcomponent'));

class lazyloadPage extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div className='lazyload_page'>
        <Suspense fallback={<img src={require('./loading.gif')} />}>
          <Acomponent />
        </Suspense>
        <Suspense fallback={<img src={require('./loading.gif')} />}>
          <Bcomponent />
        </Suspense>
        <Suspense fallback={<img src={require('./loading.gif')} />}>
          <Ccomponent />
        </Suspense>
        <Suspense fallback={<img src={require('./loading.gif')} />}>
          <Dcomponent />
        </Suspense>
        <Suspense fallback={<img src={require('./loading.gif')} />}>
          <Ecomponent />
        </Suspense>
        <Suspense fallback={<img src={require('./loading.gif')} />}>
          <Fcomponent />
        </Suspense>

      </div>

    )
  }

}
export default lazyloadPage;