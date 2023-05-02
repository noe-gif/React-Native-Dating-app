import {StyleSheet, SafeAreaView, Dimensions, StatusBar} from 'react-native';
import React, {useEffect, useRef} from 'react';
import Lottie from 'lottie-react-native';
import loader from '../../assets/lotties/loader.json';
import {View} from 'react-native';
import {Image, Text} from 'moti';
import {useNavigation} from '@react-navigation/native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const Loader = () => {
  const animationRef = useRef<Lottie>(null);
  const navigation = useNavigation();

  useEffect(() => {
    animationRef.current?.play();
    setTimeout(() => {
      navigation.navigate('result');
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#F2F2F2'} />
      <View style={styles.loaderTitleWrapper}>
        <Text style={styles.loaderTitle}>로드 중입니다. 기다려 주십시오..</Text>
        <Text style={styles.loaderText}>주어진 답을 분석하기</Text>
      </View>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
        }}>
        <Lottie ref={animationRef} source={loader} style={styles.loader} />
        <Image
          style={{
            width: SCREEN_WIDTH * 0.15,
            height: SCREEN_HEIGHT * 0.05,
            position: 'absolute',
            top: SCREEN_HEIGHT * 0.045,
          }}
          source={require('../../assets/shiba.png')}></Image>
      </View>
    </SafeAreaView>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    width: SCREEN_WIDTH / 7,
    height: SCREEN_HEIGHT / 7,
  },
  loaderTitleWrapper: {
    position: 'absolute',
    top: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT / 6,
    paddingLeft: 30,
    paddingTop: 60,
  },
  loaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  loaderText: {
    fontSize: 14,
    lineHeight: 40,
  },
});
