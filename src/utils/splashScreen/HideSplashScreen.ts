import SplashScreen from 'react-native-splash-screen';

export const hideSplashScreen = () => {
  setTimeout(() => {
    SplashScreen.hide();
  }, 1500);
};
