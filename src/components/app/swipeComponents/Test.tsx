import {View, Text, Dimensions, Image} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import Like from './Like';
import LinearGradient from 'react-native-linear-gradient';
import {SCREEN_WIDTH} from '@gorhom/bottom-sheet';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
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
const Test = ({theme}) => {
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

  return (
    <Animated.View
      style={[
        {
          width: '80%',
          height: '30%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
        },
        rStyle,
      ]}>
      <Text
        style={{
          fontSize: 20,
          color: '#FFF',
          fontWeight: '600',
        }}>
        🐶 ENFP • 이것명입니다
      </Text>
    </Animated.View>
  );
};

export default Test;
