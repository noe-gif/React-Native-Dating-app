/**
 * React Native Dating app
 * https://github.com/noe-gif/Dating-app-React-Native
 *
 * @NoéCampo
 **/

// React
import React from 'react';
import {TouchableWithoutFeedback, Text, View, Image} from 'react-native';
import 'react-native-reanimated';
import 'react-native-gesture-handler';

// Components
import BottomSheet from '../../uiComponents/bottomSheet/BottomSheet';

// Other
import shiba from '../../assets/shiba.png';
import {styles} from '../../styles/getStarted.style';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from 'src/constants/dimensions';

function GetStartedBottomSheet({bottomSheetRef, navigation}) {
  return (
    <BottomSheet
      ref={bottomSheetRef}
      activeHeight={SCREEN_HEIGHT * 0.5}
      backgroundColor={'white'}
      backDropColor={'black'}>
      <View style={styles.bottomSheetWrapper}>
        <Image
          source={shiba}
          style={{
            width: SCREEN_WIDTH * 0.35,
            height: SCREEN_HEIGHT * 0.14,
            alignSelf: 'center',
          }}
        />
        <View
          style={{
            padding: 10,
            width: SCREEN_WIDTH * 0.9,
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
            <Text style={styles.textButton}>시작하기</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </BottomSheet>
  );
}

export default GetStartedBottomSheet;
