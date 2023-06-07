import { Provider } from 'react-redux';
import { store } from './src/store/store';
import AppNavigation from './src/components/Navigation/AppNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  )
}

export default App;
