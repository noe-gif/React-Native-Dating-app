/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// React
import React, {useEffect, useRef, useCallback} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Button,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  Platform,
  Image,
} from 'react-native';
import 'react-native-reanimated';
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

// Dependencies
import {NavigationProp} from '@react-navigation/core';
import {MotiView, MotiImage} from 'moti';

// Components
import BottomSheet from '../../uiComponents/bottomSheet/BottomSheet';

// Other
import newLogo from '../../assets/new_logo2.png';
import shiba from '../../assets/shiba.png';

type PageList = {
  Home: undefined;
  Signup: undefined;
  Signin: undefined;
};

type Props = {
  navigation: NavigationProp<PageList>;
};

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

function GetStarted({navigation}: Props) {
  const bottomSheetRef = useRef();
  const onGetStartedPress = useCallback(() => {
    bottomSheetRef.current.expand();
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <MotiImage
        source={newLogo}
        style={{
          width: width * 0.8,
          height: width * 0.8,
        }}
        from={{opacity: 0, translateY: 50}}
        animate={{opacity: 1, translateY: 0}}
        transition={{delay: 100}}
      />
      <MotiView
        from={{opacity: 0, translateY: 50}}
        animate={{opacity: 1, translateY: 0}}
        transition={{delay: 200}}
        style={{alignItems: 'center'}}>
        <Text style={styles.text}>
          그 앱은 "있는 그대로"와 "있는 그대로" 기반으로 제.
        </Text>
        <Text style={styles.textSmall}>우리는 앱의 기능에 대해</Text>
      </MotiView>
      <TouchableWithoutFeedback
        onPress={() => {
          onGetStartedPress();
          // navigation.navigate('signup');
        }}>
        <MotiView
          style={[styles.button, {width: width * 0.8}]}
          from={{opacity: 0, translateY: 50}}
          animate={{opacity: 1, translateY: 0}}
          transition={{delay: 300}}>
          <Text style={styles.textButton}>시작하기</Text>
        </MotiView>
      </TouchableWithoutFeedback>
      <Text style={styles.logginButton}>계정에 로그인</Text>
      <BottomSheet
        ref={bottomSheetRef}
        activeHeight={height * 0.5}
        backgroundColor={'white'}
        backDropColor={'black'}>
        <View style={styles.bottomSheetWrapper}>
          <Image
            source={shiba}
            style={{
              width: width * 0.35,
              height: height * 0.14,
              alignSelf: 'center',
            }}
          />
          <View
            style={{
              padding: 10,
              width: width * 0.9,
            }}>
            <Text style={styles.bottomSheetTextTitle}>
              그 앱은 MBTFY 있는 그대로
            </Text>
            <Text style={styles.bottomSheetText}>
              그 앱은 MBTFY 있는그대로 기반
            </Text>
          </View>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('onboarding')}>
            <View style={styles.buttonBottomSheet}>
              <Text style={[styles.textButton, {color: 'white'}]}>
                시작하기
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </BottomSheet>
    </GestureHandlerRootView>
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
  text: {
    backgroundColor: 'black',
    textAlign: 'center',
    marginHorizontal: 35,
    color: 'white',
    lineHeight: 20,
    fontSize: 12,
    marginBottom: 5,
  },
  bottomSheetTextTitle: {
    fontWeight: '900',
    color: 'black',
    fontSize: 20,
    marginBottom: 5,
    textAlign: 'left',
  },
  bottomSheetText: {
    color: '#B3B3B3',
    lineHeight: 20,
    fontSize: 12,
    marginBottom: 5,
    textAlign: 'left',
  },
  textSmall: {
    width: 'auto',
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
  buttonBottomSheet: {
    width: width * 0.9,
    backgroundColor: '#9A26FB',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {fontSize: 16, fontWeight: '600', color: 'black'},
  logginButton: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  bottomSheetWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    textAlign: 'left',
    padding: height * 0.05,
  },
});

export default GetStarted;
