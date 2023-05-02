/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// React
import React, {useEffect} from 'react';
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
} from 'react-native';
import 'react-native-reanimated';
import 'react-native-gesture-handler';

// Dependencies
import {NavigationProp} from '@react-navigation/core';
import {MotiView, MotiImage} from 'moti';

type PageList = {
  Home: undefined;
  Signin: undefined;
};

type Props = {
  navigation: NavigationProp<PageList>;
};

const width = Dimensions.get('window').width;
// const height = Dimensions.get('window').height;

function SignUp({navigation}: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <MotiView
        from={{opacity: 0, translateY: 50}}
        animate={{opacity: 1, translateY: 0}}
        transition={{delay: 200}}>
        <Text style={styles.text}>
          그 앱은 "있는 그대로"와 "있는 그대로" 기반으로 제공된다.
        </Text>
        <Text style={styles.text}>우리는 앱의 기능에 대해</Text>
        <Text style={styles.text}>
          그 앱은 "있는 그대로"와 "있는 그대로" 기반으로 제공된다.
        </Text>
        <Text style={styles.text}>우리는 앱의 기능에 대해</Text>
        <Text style={styles.text}>
          그 앱은 "있는 그대로"와 "있는 그대로" 기반으로 제공된다.
        </Text>
        <Text style={styles.text}>우리는 앱의 기능에 대해</Text>
        <Text style={styles.text}>
          그 앱은 "있는 그대로"와 "있는 그대로" 기반으로 제공된다.
        </Text>
        <Text style={styles.text}>우리는 앱의 기능에 대해</Text>
      </MotiView>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate('getstarted');
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
    </SafeAreaView>
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

export default SignUp;
