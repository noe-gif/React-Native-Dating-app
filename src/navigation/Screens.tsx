/**
 * React Native Dating app
 * https://github.com/noe-gif/Dating-app-React-Native
 *
 * @NoéCampo
 **/

// Components
import GetStarted from '../components/getstartedPage/getStarted';
import SignUp from '../components/signupPage/Signup';
import OnboardingScreen from '../components/onBoarding/onBoarding';
import Loader from '../components/loader/Loader';
import Result from '../components/result/Result';
import Home from '../components/app/Home';
import Profile from '../components/app/Profile';
import Conversations from '../components/app/Conversations';
import Likes from '../components/app/Likes';
import Swipper from '../components/app/Swipper';
import Message from '../components/app/Message';

export const screens = [
  {
    id: 1,
    name: 'getstarted',
    component: GetStarted,
    options: null,
  },
  {
    id: 2,
    name: 'signup',
    component: SignUp,
    options: null,
  },
  {
    id: 3,
    name: 'onboarding',
    component: OnboardingScreen,
    options: null,
  },
  {
    id: 4,
    name: 'loader',
    component: Loader,
    options: null,
  },
  {
    id: 5,
    name: 'result',
    component: Result,
    options: null,
  },
  {
    id: 6,
    name: 'home',
    component: Home,
    options: null,
  },
  {
    id: 7,
    name: 'message',
    component: Message,
    options: {
      headerShown: false,
      presentation: 'card',
      animationTypeForReplace: 'push',
      animation: 'fade_from_bottom',
    },
  },
  {
    id: 8,
    name: 'swipper',
    component: Swipper,
    options: {animation: 'none'},
  },
  {
    id: 9,
    name: 'profile',
    component: Profile,
    options: {animation: 'none'},
  },
  {
    id: 10,
    name: 'conversations',
    component: Conversations,
    options: {animation: 'none'},
  },
  {
    id: 11,
    name: 'likes',
    component: Likes,
    options: {animation: 'none'},
  },
];
