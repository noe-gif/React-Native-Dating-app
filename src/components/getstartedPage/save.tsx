/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// React
import React, {useEffect, useRef, useCallback, useMemo} from 'react';
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
  TouchableOpacity,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {
  BottomSheetRefProps,
} from '../../uiComponents/bottomSheet/BottomSheet';

// Dependencies
import {NavigationProp} from '@react-navigation/core';
import {MotiView, MotiImage} from 'moti';

// Other
import newLogo from '../../assets/new_logo2.png';

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
  const ref = useRef<BottomSheetRefProps>(null);

  const onPress = useCallback(() => {
    const isActive = ref?.current?.isActive();
    if (isActive) {
      ref?.current?.scrollTo(0);
    } else {
      ref?.current?.scrollTo(-200);
    }
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
          그 앱은 "있는 그대로"와 "있는 그대로" 기반으로 제공된다.
        </Text>
        <Text style={styles.textSmall}>우리는 앱의 기능에 대해</Text>
      </MotiView>
      <TouchableWithoutFeedback onPress={onPress}>
        <MotiView
          style={[styles.button, {width: width * 0.8}]}
          from={{opacity: 0, translateY: 50}}
          animate={{opacity: 1, translateY: 0}}
          transition={{delay: 300}}>
          <Text style={styles.textButton}>시작하기</Text>
        </MotiView>
      </TouchableWithoutFeedback>
      <Text style={styles.logginButton}>계정에 로그인</Text>
      <BottomSheet ref={ref}>
        <View style={{flex: 1, backgroundColor: 'white'}} />
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
  textButton: {fontSize: 16, fontWeight: '600', color: 'black'},
  logginButton: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});

export default GetStarted;
