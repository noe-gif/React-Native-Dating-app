import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Dimensions,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ripple from './Ripple';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBomb,
  faUser,
  faHeart,
  faComment,
} from '@fortawesome/free-solid-svg-icons';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';

// en gros tu fais un drawer et la première page et juste tu réimplémente (réappelle) le composant drawer sur chaque page
// avec un props de la page actuelle pour afficher l'icon de manière jolie. Tu divise la page avec les screen height et width
// ensuite on est bon quoi, fin taré quoi

// et au passage tu fais aussi un composant header qui sera réappellé à chaque fois avec des options en props parce que
// parfois le contenu change au niveau des icons (genre page profil t'a accès au paramètres mais pas sur la page messages)
import conversationsIcon from '../../assets/footerNav/conversationsIcon.png';
import conversationsIconSelected from '../../assets/footerNav/conversationsIconSelected.png';

import heartIcon from '../../assets/footerNav/heartIcon.png';
import heartIconSelected from '../../assets/footerNav/heartIconSelected.png';

import profileIcon from '../../assets/footerNav/profileIcon.png';
import profileIconSelected from '../../assets/footerNav/profileIconSelected.png';

import swipperIcon from '../../assets/footerNav/swipperIcon.png';
import swipperIconSelected from '../../assets/footerNav/swipperIconSelected.png';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const Colors = [
  {
    title: 'istj',
    background: '#17CED4',
  },
  {
    title: 'isfj',
    background: '#FD7638',
  },
  {
    title: 'estj',
    background: '#FFE931',
  },
  {
    title: 'esfj',
    background: '#9A26FB',
  },
];

const buttons = [
  {
    id: 1,
    icon: faUser,
    iconSelected: profileIconSelected,
    destination: 'profile',
  },
  {
    id: 2,
    icon: faBomb,
    iconSelected: swipperIconSelected,
    destination: 'swipper',
  },
  {
    id: 3,
    icon: faHeart,
    iconSelected: heartIconSelected,
    destination: 'likes',
  },
  {
    id: 4,
    icon: faComment,
    iconSelected: conversationsIconSelected,
    destination: 'conversations',
  },
];

const Footer = ({pageId, theme}) => {
  const navigation = useNavigation();
  function getBackgroundColor(theme: string): string | undefined {
    const color = Colors.find(c => c.title === theme);
    return color?.background;
  }
  return (
    <SafeAreaView style={styles.container}>
      {buttons.map((item, index) => {
        return (
          <GestureHandlerRootView key={index}>
            <Ripple
              style={styles.buttonContainer}
              onTap={() => {
                navigation.navigate(item.destination, {
                  theme: theme,
                });
              }}>
              <FontAwesomeIcon
                icon={item.icon}
                size={25}
                style={{
                  alignSelf: 'center',
                  color:
                    pageId === item.id ? getBackgroundColor(theme) : '#E8E8E8',
                }}
              />
              {/* <Image
                source={
                  pageId.pageId === item.id ? item.iconSelected : item.icon
                }
                style={{
                  width: 27,
                  height: 25,
                  alignSelf: 'center',
                }}
              /> */}
            </Ripple>
          </GestureHandlerRootView>
        );
      })}
    </SafeAreaView>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 0.09,
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    width: SCREEN_WIDTH * 0.25,
    height: SCREEN_HEIGHT * 0.1,
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    // iOS
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 20,
    // Android
    elevation: 2,
  },
});
