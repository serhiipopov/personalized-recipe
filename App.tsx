import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import Tabs from './src/components/Tabs/Tabs';
import { storageService } from './src/utils/storageService';

const App = () => {

  useEffect(() => {
    const getToken = async () => {
      return await storageService.getStateFromStorage('token');
    }
    getToken();
  }, []);

  return (
    <Provider store={store}>
      <Tabs />
    </Provider>
  )
}

export default App;
