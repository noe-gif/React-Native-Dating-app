import {
  View,
  Text,
  Animated,
  PanResponder,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import Card from './Card';
import CardLoader from './CardLoader';
const Swipping = ({theme}) => {
  const [data, setData] = useState([
    {
      image: require('../../../assets/korean.png'),
      id: 1,
      title: '김지영',
      age: 21,
      description: '이것은 설명입니다',
    },
    {
      image: require('../../../assets/korean2.png'),
      id: 2,
      title: '김지영',
      age: 21,
      description: '이것은 설명입니다',
    },
    {
      image: require('../../../assets/korean3.png'),
      id: 3,
      title: '김지영',
      age: 21,
      description: '이것은 설명입니다',
    },
    {
      image: require('../../../assets/korean4.png'),
      id: 4,
      title: '김지영',
      age: 21,
      description: '이것은 설명입니다',
    },
    {
      image: require('../../../assets/korean5.png'),
      id: 5,
      title: '김지영',
      age: 21,
      description: '이것은 설명입니다',
    },
    {
      image: require('../../../assets/korean6.png'),
      id: 6,
      title: '김지영',
      age: 21,
      description: '이것은 설명입니다',
    },
    {
      image: require('../../../assets/korean7.png'),
      id: 7,
      title: '김지영',
      age: 21,
      description: '이것은 설명입니다',
    },
    {
      image: require('../../../assets/korean8.png'),
      id: 8,
      title: '김지영',
      age: 21,
      description: '이것은 설명입니다',
    },
  ]);
  useEffect(() => {
    if (!data.length) {
      setData([
        {
          image: require('../../../assets/korean.png'),
          id: 1,
          title: '김지영',
          age: 21,
          description: '이것은 설명입니다',
        },
        {
          image: require('../../../assets/korean2.png'),
          id: 2,
          title: '김지영',
          age: 21,
          description: '이것은 설명입니다',
        },
        {
          image: require('../../../assets/korean3.png'),
          id: 3,
          title: '김지영',
          age: 21,
          description: '이것은 설명입니다',
        },
        {
          image: require('../../../assets/korean4.png'),
          id: 4,
          title: '김지영',
          age: 21,
          description: '이것은 설명입니다',
        },
        {
          image: require('../../../assets/korean5.png'),
          id: 5,
          title: '김지영',
          age: 21,
          description: '이것은 설명입니다',
        },
        {
          image: require('../../../assets/korean6.png'),
          id: 6,
          title: '김지영',
          age: 21,
          description: '이것은 설명입니다',
        },
        {
          image: require('../../../assets/korean7.png'),
          id: 7,
          title: '김지영',
          age: 21,
          description: '이것은 설명입니다',
        },
        {
          image: require('../../../assets/korean8.png'),
          id: 8,
          title: '김지영',
          age: 21,
          description: '이것은 설명입니다',
        },
      ]);
    }
  }, [data.length]);
  const swipe = useRef(new Animated.ValueXY()).current;
  const rotate = useRef(new Animated.Value(0)).current;
  const [hasLoaded, setHasLoaded] = useState(false);
  const panResponser = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, {dx, dy}) => {
      swipe?.setValue({x: dx, y: dy});
    },

    onPanResponderRelease: (_, {dx, dy}) => {
      let direction = Math.sign(dx);
      let isActionActive = Math.abs(dx) > 200;
      if (isActionActive) {
        Animated.timing(swipe, {
          toValue: {x: 500 * dx, y: dy},
          useNativeDriver: true,
          duration: 500,
        }).start(removeCard);
      } else {
        Animated.spring(swipe, {
          toValue: {x: 0, y: 0},
          useNativeDriver: true,
          friction: 5,
        }).start();
      }
    },
  });
  const removeCard = useCallback(() => {
    setData(prepState => prepState.slice(1));
    swipe.setValue({x: 0, y: 0});
  }, [swipe]);

  const handelSelection = useCallback(
    (direction: number) => {
      Animated.timing(swipe, {
        toValue: {x: direction * 500, y: 0},
        useNativeDriver: true,
        duration: 500,
      }).start(removeCard);
    },
    [removeCard],
  );

  useEffect(() => {
    setTimeout(() => {
      setHasLoaded(true);
    }, 1500);
  });
  return (
    <View
      style={{
        flex: 1,
      }}>
      {hasLoaded ? (
        data
          .map((item, index) => {
            let isFirst = index === 0;
            let dragHanlders = isFirst ? panResponser.panHandlers : {};
            return (
              <Card
                theme={theme}
                item={item}
                rotate={rotate}
                isFirst={isFirst}
                swipe={swipe}
                {...dragHanlders}
              />
            );
          })
          .reverse()
      ) : (
        <CardLoader />
      )}

      {/* <View
        style={{
          width: '100%',
          position: 'absolute',
          height: 100,
          bottom: 0,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            width: 60,
            height: 60,
            backgroundColor: '#fff',
            elevation: 5,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            handelSelection(-1);
          }}>
          <Image
            source={require('../../../assets/cancel.png')}
            style={{width: 34, height: 34}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 60,
            height: 60,
            backgroundColor: '#fff',
            elevation: 5,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            handelSelection(1);
          }}>
          <Image
            source={require('../../../assets/heart.png')}
            style={{width: 40, height: 40, tintColor: '#00FFC8'}}
          />
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default Swipping;
