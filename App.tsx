import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { storageService } from './src/utils/storageService';
import AppNavigation from './src/components/Navigation/AppNavigation';

const App = () => {

  useEffect(() => {
    const getToken = async () => {
      return await storageService.getStateFromStorage('token');
    }
    getToken();
  }, []);

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  )
}

export default App;
