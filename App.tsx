/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// React
import React, {useEffect} from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  Platform,
  Dimensions,
} from 'react-native';
import {Easing} from 'react-native-reanimated';
import 'react-native-gesture-handler';

// Dependencies
import {Colors} from 'react-native/Libraries/NewAppScreen';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BetweenPagesProvider} from 'between-pages';

// Components
import GetStarted from './src/components/getstartedPage/getStarted';
import SignUp from './src/components/signupPage/Signup';
import OnboardingScreen from './src/components/onBoarding/onBoarding';
import Loader from './src/components/loader/Loader';
import Result from './src/components/result/Result';
import Home from './src/components/app/Home';
import Profile from './src/components/app/Profile';
import Conversations from './src/components/app/Conversations';
import Likes from './src/components/app/Likes';
import Swipper from './src/components/app/Swipper';
import Message from './src/components/app/Message';

const Stack = createNativeStackNavigator();
function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1500);
  });

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#9A26FB'} />
      <Stack.Navigator
        initialRouteName="getstarted"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="getstarted" component={GetStarted} />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="onboarding" component={OnboardingScreen} />
        <Stack.Screen name="loader" component={Loader} />
        <Stack.Screen name="result" component={Result} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen
          name="message"
          component={Message}
          options={{
            headerShown: false,
            presentation: 'card',
            animationTypeForReplace: 'push',
            animation: 'fade_from_bottom',
          }}
        />
        <Stack.Screen
          options={{animation: 'none'}}
          name="swipper"
          component={Swipper}
        />

        <Stack.Screen
          options={{animation: 'none'}}
          name="profile"
          component={Profile}
        />
        <Stack.Screen
          options={{animation: 'none'}}
          name="conversations"
          component={Conversations}
        />
        <Stack.Screen
          options={{animation: 'none'}}
          name="likes"
          component={Likes}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#9A26FB',
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  text: {
    backgroundColor: 'black',
    textAlign: 'center',
    marginHorizontal: 35,
    color: 'white',
    lineHeight: 20,
    fontSize: 12,
    marginBottom: 5,
  },
  button: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {fontSize: 16, fontWeight: '600', color: 'black'},
  logginButton: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});

export default App;
