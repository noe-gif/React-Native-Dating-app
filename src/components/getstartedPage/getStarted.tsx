/**
 * React Native Dating app
 * https://github.com/noe-gif/Dating-app-React-Native
 *
 * @NoéCampo
 **/

// React
import React, {useRef, useCallback} from 'react';
import {TouchableWithoutFeedback, Text} from 'react-native';
import 'react-native-reanimated';
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

// Dependencies
import {MotiView, MotiImage} from 'moti';

// Components
import GetStartedBottomSheet from './getStartedBottomSheet';

// Other
import newLogo from '../../assets/new_logo2.png';
import {styles} from '../../styles/getStarted.style';
import {SCREEN_WIDTH} from 'src/constants/dimensions';

function GetStarted({navigation}) {
  const bottomSheetRef = useRef();
  const onGetStartedPress = useCallback(() => {
    bottomSheetRef.current.expand();
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <MotiImage
        source={newLogo}
        style={{
          width: SCREEN_WIDTH * 0.8,
          height: SCREEN_WIDTH * 0.8,
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
        }}>
        <MotiView
          style={[styles.button, {width: SCREEN_WIDTH * 0.8}]}
          from={{opacity: 0, translateY: 50}}
          animate={{opacity: 1, translateY: 0}}
          transition={{delay: 300}}>
          <Text style={styles.textButton}>시작하기</Text>
        </MotiView>
      </TouchableWithoutFeedback>
      <Text style={styles.logginButton}>계정에 로그인</Text>
      <GetStartedBottomSheet
        bottomSheetRef={bottomSheetRef}
        navigation={navigation}
      />
    </GestureHandlerRootView>
  );
}

export default GetStarted;
