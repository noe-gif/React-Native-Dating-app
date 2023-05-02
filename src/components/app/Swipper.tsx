import React, {useCallback, useRef, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  StatusBar,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import Footer from './Footer';
import Header from './Header';
import Swipping from './swipeComponents/Swipping';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Ripple from './Ripple';
import selectorCat1 from '../../assets/selectorCat1.png';
import selectorCat2 from '../../assets/selectorCat2.png';
import selectorDog1 from '../../assets/selectorDog1.png';
import selectorDog2 from '../../assets/selectorDog2.png';
import cat1 from '../../assets/cat1.png';
import cat2 from '../../assets/cat2.png';
import dog1 from '../../assets/dog1.png';
import dog2 from '../../assets/dog2.png';

import BottomSheet from '../../uiComponents/bottomSheet/BottomSheet';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SWIPPER_CODE = 2;

const Swipper = () => {
  const [theme, setTheme] = useState<Theme>('esfj');
  const bottomSheetRef = useRef();

  const onGetStartedPress = useCallback(() => {
    bottomSheetRef.current.expand();
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar backgroundColor={'white'} />
      <Header theme={theme} onPress={onGetStartedPress} />
      <BottomSheet
        ref={bottomSheetRef}
        activeHeight={SCREEN_HEIGHT * 0.5}
        backgroundColor={'white'}
        backDropColor={'black'}>
        <View
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}>
          <View style={styles.line} />

          <TouchableOpacity
            style={{
              width: '100%',
              height: '25%',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
            onPress={() => {
              bottomSheetRef.current.close();
              setTheme('istj');
            }}>
            <Image
              source={selectorCat1}
              style={{
                width: '100%',
                height: '100%',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              }}
            />
            <Text
              style={{
                position: 'absolute',
                fontSize: 35,
                color: '#FFF',
                fontWeight: '700',
                textShadowColor: 'black',
                textShadowRadius: 1,
                textShadowOffset: {
                  width: 3,
                  height: 3,
                },
                margin: 15,
              }}>
              이에네프피
            </Text>
            <Image
              source={cat1}
              style={{
                width: 60,
                height: 40,
                position: 'absolute',
                top: '25%',
                left: '55%',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '100%',
              height: '25%',
            }}
            onPress={() => {
              bottomSheetRef.current.close();
              setTheme('isfj');
            }}>
            <Image
              source={selectorDog1}
              style={{
                width: '100%',
                height: '100%',
              }}
            />
            <Text
              style={{
                position: 'absolute',
                fontSize: 35,
                color: '#FFF',
                fontWeight: '700',
                textShadowColor: 'black',
                textShadowRadius: 1,
                textShadowOffset: {
                  width: 3,
                  height: 3,
                },
                margin: 15,
                right: 0,
              }}>
              애수에페우제이
            </Text>
            <Image
              source={dog1}
              style={{
                width: 60,
                height: 40,
                position: 'absolute',
                top: '25%',
                left: '11%',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '100%',
              height: '25%',
            }}
            onPress={() => {
              bottomSheetRef.current.close();
              setTheme('estj');
            }}>
            <Image
              source={selectorCat2}
              style={{
                width: '100%',
                height: '100%',
              }}
            />
            <Text
              style={{
                position: 'absolute',
                fontSize: 35,
                color: '#FFF',
                fontWeight: '700',
                textShadowColor: 'black',
                textShadowRadius: 1,
                textShadowOffset: {
                  width: 3,
                  height: 3,
                },
                margin: 15,
              }}>
              이에스떼지
            </Text>
            <Image
              source={cat2}
              style={{
                width: 55,
                height: 40,
                position: 'absolute',
                top: '25%',
                left: '55%',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '100%',
              height: '25%',
            }}
            onPress={() => {
              bottomSheetRef.current.close();
              setTheme('esfj');
            }}>
            <Image
              source={selectorDog2}
              style={{
                width: '100%',
                height: '100%',
              }}
            />
            <Text
              style={{
                position: 'absolute',
                fontSize: 35,
                color: '#FFF',
                fontWeight: '700',
                textShadowColor: 'black',
                textShadowRadius: 1,
                textShadowOffset: {
                  width: 3,
                  height: 3,
                },
                margin: 15,
                right: 0,
              }}>
              이스테지
            </Text>
            <Image
              source={dog2}
              style={{
                width: 60,
                height: 40,
                position: 'absolute',
                top: '25%',
                left: '38%',
              }}
            />
          </TouchableOpacity>
        </View>
      </BottomSheet>
      <Swipping theme={theme} />
      <Footer theme={theme} pageId={SWIPPER_CODE} />
    </GestureHandlerRootView>
  );
};

export default Swipper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  lineContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  line: {
    top: '1%',
    left: '40%',
    zIndex: 10,
    position: 'absolute',
    width: 50,
    height: 4,
    backgroundColor: 'black',
    borderRadius: 20,
  },
});
