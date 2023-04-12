import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {  store } from './src/store/store';
import Tabs from './src/components/Tabs/Tabs';

const App = () => {
  return (
    <Provider store={store}>
      {/*<PersistGate loading={null} persistor={persist}>*/}
        <Tabs />
      {/*</PersistGate>*/}
    </Provider>
  )
}

export default App;
