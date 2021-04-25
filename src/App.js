import React, {Suspense} from 'react';
import routes from './routes';
export default class SiderDemo extends React.Component {
  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>
    );
  }
}