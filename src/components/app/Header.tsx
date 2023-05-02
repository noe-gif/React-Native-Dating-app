import React, {useEffect, useRef} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  StatusBar,
  View,
  TouchableOpacity,
} from 'react-native';
import Lottie from 'lottie-react-native';
import logo from '../../assets/swipperLogo2.png';
import settings from '../../assets/lotties/settings.json';
import LottieView from 'lottie-react-native';
import Ripple from './Ripple';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
const Colors = {
  istj: {
    background: '#17CED4',
  },
  isfj: {
    background: '#FFE931',
  },
  estj: {
    background: '#FD7638',
  },
  esfj: {
    background: '#9A26FB',
  },
};
type Theme = 'istj' | 'isfj' | 'estj' | 'esfj';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const Header = ({onPress, theme}) => {
  const animationRef = useRef<Lottie>(null);
  const navigation = useNavigation();
  const progress = useDerivedValue(() => {
    switch (theme) {
      case 'istj':
        return withTiming(0);
      case 'estj':
        return withTiming(1);
      case 'isfj':
        return withTiming(2);
      case 'esfj':
        return withTiming(3);
    }
  }, [theme]);
  const rStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1, 2, 3],
      [
        Colors.istj.background,
        Colors.isfj.background,
        Colors.estj.background,
        Colors.esfj.background,
      ],
    );
    return {backgroundColor};
  });
  const rTextStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      progress.value,
      [0, 1, 2, 3],
      [
        Colors.istj.background,
        Colors.isfj.background,
        Colors.estj.background,
        Colors.esfj.background,
      ],
    );

    return {color};
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#FAFAFA'} barStyle="dark-content" />
      {/* <TouchableOpacity
        style={styles.centerElement}
        onPress={() => {
          animationRef.current?.play();
          navigation.navigate('getstarted');
        }}>
        <LottieView
          ref={animationRef}
          source={settings}
          loop={false}
          autoPlay={false}
          style={styles.settings}
        />
      </TouchableOpacity> */}
      <Animated.View style={styles.leftElement}>
        <Animated.Text
          style={[
            {
              fontSize: 35,
              color: 'black',
              fontWeight: '700',
            },
            rTextStyle,
          ]}>
          Mbtfy
        </Animated.Text>
      </Animated.View>
      <TouchableOpacity style={styles.rightElement} onPress={onPress}>
        <Animated.View
          style={[
            {
              width: 45,
              height: 45,
              borderRadius: 50,
              display: 'flex',
              alignItems: 'center',
              alignContent: 'center',
              justifyContent: 'center',
            },
            rStyle,
          ]}>
          <Text style={{fontSize: 20, color: '#FFF', fontWeight: '600'}}>
            🐶
          </Text>
        </Animated.View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 0.08,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    paddingRight: 10,
  },
  settings: {
    position: 'relative',
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
  leftElement: {
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    width: '40%',
    height: '100%',
    marginTop: 10,
  },
  centerElement: {
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    width: '40%',
    height: '100%',
  },
  rightElement: {
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    width: '20%',
    height: '100%',
    marginTop: 10,
  },
});
