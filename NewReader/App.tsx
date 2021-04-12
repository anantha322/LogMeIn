import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import ReduxObject from './src/adapters/redux';

const {store, persistor} = ReduxObject();
import AppNavigation from './src/navigation';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: 'white',
    flex: 1,
  };
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaView style={backgroundStyle}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <AppNavigation />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;
