/**
 * React Native Dating app
 * https://github.com/noe-gif/Dating-app-React-Native
 *
 * @NoéCampo
 **/

// React
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';

// Components
import MainNavigator from './src/navigation/Navigator';

// Utils
import {hideSplashScreen} from './src/utils/splashScreen/HideSplashScreen';

function App(): JSX.Element {
  useEffect(() => {
    hideSplashScreen();
  });

  return (
    <>
      <StatusBar backgroundColor={'#9A26FB'} />
      <MainNavigator />
    </>
  );
}

export default App;
