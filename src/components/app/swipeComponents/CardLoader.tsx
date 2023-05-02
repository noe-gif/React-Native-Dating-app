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
import korean from '../../../assets/korean.png';
import {MotiView} from '@motify/components';
import {Easing} from 'react-native-reanimated';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const Header = () => {
  return (
    <>
      {[...Array(3).keys()].map(index => {
        return (
          <MotiView
            from={{opacity: 1, scale: 1}}
            animate={{opacity: 0, scale: 4}}
            transition={{
              type: 'timing',
              duration: 2000,
              easing: Easing.out(Easing.ease),
              delay: index * 400,
              loop: true,
            }}
            key={index}
            style={styles.dot}
          />
        );
      })}
      <View style={styles.container}>
        <Image
          source={korean}
          style={{width: '70%', height: '70%', borderRadius: 50}}
        />
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#9A26FB',
    display: 'flex',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    top: '40%',
  },
  dot: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#9A26FB',
    display: 'flex',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    top: '40%',
  },
});
