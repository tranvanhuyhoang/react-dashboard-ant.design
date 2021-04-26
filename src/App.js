import React, {Suspense} from 'react';
import routes from './routes';
import withClearCache from "./clearCache";


const ClearCacheComponent = withClearCache(MainApp);

function App() {
  return <ClearCacheComponent />;
}

function MainApp() {
  return (
    <Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>
  );
}

export default App;