import {
  StyleSheet,
  SafeAreaView,
  Dimensions,
  ScrollView,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import loader from '../../assets/lotties/loader.json';
import {View} from 'react-native';
import {Image, Text} from 'moti';
import {useNavigation} from '@react-navigation/native';
import catMbtiGif from '../../assets/catMbtiGif.gif';
import {WINDOW_WIDTH} from '@gorhom/bottom-sheet';

import istj from '../../assets/istj.png';
import isfj from '../../assets/isfj.png';
import estj from '../../assets/estj.png';
import esfj from '../../assets/esfj.png';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const mbti = [
  {
    id: 1,
    name: 'ISTJ',
    icon: istj,
    color: '#FFC8FE',
    darkerColor: '#CEA5CE',
    tagsColor: '#00000083',
    textColor: 'black',
    mbtiTextColor: '#838383',
  },
  {
    id: 2,
    name: 'ISFJ ',
    icon: isfj,
    color: '#FFE931',
    darkerColor: '#D8C52A',
    tagsColor: '#00000083',
    textColor: 'black',
    mbtiTextColor: '#838383',
  },
  {
    id: 3,
    name: 'ESTJ ',
    icon: estj,
    color: '#FD7638',
    darkerColor: '#D36330',
    tagsColor: '#00000083',
    textColor: 'white',
    mbtiTextColor: '#E3E3E3',
  },
  {
    id: 4,
    name: 'ESFJ ',
    icon: esfj,
    color: '#9A26FB',
    darkerColor: '#7D21CB',
    tagsColor: '#00000083',
    textColor: 'white',
    mbtiTextColor: '#E3E3E3',
  },
];
const Result = () => {
  //   const animationRef = useRef<Lottie>(null);
  const navigation = useNavigation();
  const [num, setNum] = useState(0);
  const [currentMbti, setCurrentMbti] = useState({});

  function randomNumberInRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    // navigation.navigate('result');
    setNum(randomNumberInRange(1, 4));
    setCurrentMbti(mbti[3]);
  }, []);

  return currentMbti && Object.keys(currentMbti).length !== 0 ? (
    <SafeAreaView>
      <StatusBar backgroundColor={currentMbti.color} barStyle="dark-content" />
      <ScrollView>
        <View
          style={[
            styles.mbtiResultWrapper,
            {backgroundColor: currentMbti.color},
          ]}>
          <Text
            style={{
              color: currentMbti.textColor,
              fontSize: 27,
              fontWeight: '900',
            }}>
            파티 풀 부킹 웰시코기
          </Text>
          <Text
            style={{
              color: currentMbti.textColor,
              fontSize: 20,
              fontWeight: '900',
              color: currentMbti.mbtiTextColor,
              padding: 10,
            }}>
            {currentMbti.name}
          </Text>
          <View
            style={{
              height: 200,
              alignContent: 'flex-start',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <Image
              style={{
                position: 'absolute',
                alignSelf: 'center',
                bottom: 0,
                width: 205,
                height: 200,
              }}
              source={require('../../assets/spotlight.gif')}></Image>
            <Image
              style={styles.mbtiResultGif}
              source={require('../../assets/catMbtiGif.gif')}></Image>
          </View>
          <View style={styles.mbtiResultTagsWrapper}>
            <View
              style={[
                styles.mbtiResultTag,
                {backgroundColor: currentMbti.tagsColor},
              ]}>
              <Text style={styles.mbtiResultTagText}>무작위텍스</Text>
            </View>
            <View
              style={[
                styles.mbtiResultTag,
                {backgroundColor: currentMbti.tagsColor},
              ]}>
              <Text style={styles.mbtiResultTagText}>이텍은텍이것</Text>
            </View>
            <View
              style={[
                styles.mbtiResultTag,
                {backgroundColor: currentMbti.tagsColor},
              ]}>
              <Text style={styles.mbtiResultTagText}>아무도모릅</Text>
            </View>
          </View>
          <View
            style={[
              styles.mbtiResultDescriptionWrapper,
              {backgroundColor: currentMbti.darkerColor},
            ]}>
            <Text
              style={{
                color: currentMbti.textColor,
                fontSize: 19,
                fontWeight: '900',
              }}>
              즐거운 곳이라면 어디든 갈게!⭐
            </Text>
            <Text
              style={{
                color: currentMbti.textColor,
                fontSize: 15,
                fontWeight: '700',
              }}>
              좋아하는 사람에겐 꼬리 프로펠러 풀가동, 정이 많고 아낌없는 사랑을
              퍼부어요. 자유로운 성격으로
            </Text>
            <Text
              style={{
                color: currentMbti.textColor,
                fontSize: 15,
                fontWeight: '700',
              }}>
              언제 어디서나 흥이 넘쳐 홀 러요. 파티 없는 인생은 탄산 빠진 콜라!
            </Text>
          </View>
        </View>
        <View
          style={{
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT * 0.6,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            padding: 30,
          }}>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('home')}>
            <View
              style={[
                styles.buttonBottomSheet,
                {backgroundColor: currentMbti.color},
              ]}>
              <Text style={[styles.textButton, {color: currentMbti.textColor}]}>
                접근 ➜
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <Image
            style={{width: SCREEN_WIDTH * 0.45, height: SCREEN_HEIGHT * 0.2}}
            source={currentMbti.icon}></Image>
          <Text
            style={{
              color: 'black',
              fontSize: 24,
              fontWeight: '900',
            }}>
            파티 풀부킹 {currentMbti.name} 웰시코기
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  ) : (
    <></>
  );
};

export default Result;

const styles = StyleSheet.create({
  mbtiResultWrapper: {
    padding: 30,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'flex-start',
    height: '60%',
  },
  mbtiResultGif: {
    marginLeft: 70,
    width: SCREEN_WIDTH / 2,
    height: SCREEN_HEIGHT / 4,
  },
  mbtiResultTagsWrapper: {
    padding: 20,
    width: SCREEN_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  mbtiResultTag: {
    borderRadius: 10,
    padding: 10,
  },
  mbtiResultTagText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '700',
  },
  mbtiResultDescriptionWrapper: {
    borderRadius: 20,
    padding: 20,
    width: SCREEN_WIDTH / 1.1,
    height: SCREEN_HEIGHT / 4,
    backgroundColor: 'yellow',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
  },
  buttonBottomSheet: {
    width: SCREEN_WIDTH * 0.9,
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {fontSize: 20, fontWeight: '900'},
});
