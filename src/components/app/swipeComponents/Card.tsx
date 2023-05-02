import {View, Text, Dimensions, Image, Animated} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import Like from './Like';
import LinearGradient from 'react-native-linear-gradient';
import {SCREEN_WIDTH} from '@gorhom/bottom-sheet';
import Test from './Test';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Card = ({theme, item, isFirst, swipe, ...rest}) => {
  const rotate = swipe.x.interpolate({
    inputRange: [-100, 0, 100],
    outputRange: ['8deg', '0deg', '-8deg'],
  });
  const likeOpacity = swipe.x.interpolate({
    inputRange: [10, 100],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });
  const rejectOpacity = swipe.x.interpolate({
    inputRange: [-100, -10],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });
  useEffect(() => {}, [item, isFirst, swipe, {...rest}]);
  const renderChoice = useCallback(() => {
    return (
      <>
        <Animated.View
          style={[
            {position: 'absolute', top: 100, left: 20},
            {opacity: likeOpacity},
          ]}>
          <Like type={'Like'} />
        </Animated.View>
        <Animated.View
          style={[
            {position: 'absolute', top: 100, right: 20},
            {opacity: rejectOpacity},
          ]}>
          <Like type={'Nope'} />
        </Animated.View>
      </>
    );
  }, []);
  return (
    <Animated.View
      style={[
        {
          width: '95%',
          height: '97%',
          position: 'absolute',
          display: 'flex',
          margin: 10,
        },
        isFirst && {
          transform: [...swipe.getTranslateTransform(), {rotate: rotate}],
        },
      ]}
      {...rest}>
      <Image
        source={item.image}
        style={{width: '100%', height: '100%', borderRadius: 20}}
      />
      {isFirst && renderChoice()}
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.05)', 'rgba(0,0,0,0.9)']}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          borderRadius: 20,
          justifyContent: 'flex-end',
        }}>
        <View
          style={{
            width: '100%',
            height: '35%',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'flex-start',
            padding: 10,
            paddingLeft: 15,
          }}>
          <View style={{width: '100%'}}>
            <Text
              style={{
                fontSize: 40,
                color: '#FFF',
                fontWeight: '600',
              }}>
              {`${item.title}, ${item.age}`}
            </Text>
            <Text
              style={{
                fontSize: 25,
                color: '#FFF',
                fontWeight: '600',
              }}>
              {item.description}
            </Text>
          </View>
          <Test theme={theme} />
        </View>
      </LinearGradient>
    </Animated.View>
  );
};

export default Card;
