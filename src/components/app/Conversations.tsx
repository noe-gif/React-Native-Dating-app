import React, {useState, useCallback, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  StatusBar,
  FlatList,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ViewToken,
} from 'react-native';
import Footer from './Footer';
import Header from './Header';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedProps,
  useDerivedValue,
} from 'react-native-reanimated';
import {ReText} from 'react-native-redash';
import Svg, {Circle} from 'react-native-svg';
import {ConversationLoader} from './ConversationLoader';

const BACKGROUND_STROKE_COLOR = '#DFDFDF';
const STROKE_COLOR = '#9A26FB';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const CIRCLE_LENGTH = 1000; // 2PI*R
const R = CIRCLE_LENGTH / (9 * Math.PI);
const CONVERSATIONS_CODE = 4;

const rawData = [
  {
    id: 1,
    name: 'Lorem Ipsum',
    conversation: '이것은 매우 🥰 한국어 대화의 예...',
    mbtiId: 1,
    mbti: '🐶 ISFJ • 이것명입니다',
    color: '#9A26FB',
    gradient: [
      'transparent',
      'rgba(154, 38, 251, 0.1)',
      'rgba(154, 38, 251, 1)',
    ],
    image: require('../../assets/korean.png'),
  },
  {
    id: 2,
    name: 'Lorem Ipsum',
    conversation: '🫠이은 매우 한국어 대화의 예...',
    mbtiId: 2,
    mbti: '🐱 ENFP • 이것명입니다',
    color: '#C9B729',
    gradient: [
      'transparent',
      'rgba(255, 233, 49, 0.1)',
      'rgba(255, 233, 49, 1)',
    ],
    image: require('../../assets/korean2.png'),
  },
  {
    id: 3,
    name: 'Lorem Ipsum',
    conversation: '이것은 !!!! 한국어 대화의 예...',
    mbtiId: 3,
    mbti: '🐰 ENFP • 이것명입니다',
    color: '#FD7638',
    gradient: [
      'transparent',
      'rgba(253, 118, 56, 0.1)',
      'rgba(253, 118, 56, 1)',
    ],
    image: require('../../assets/korean3.png'),
  },
  {
    id: 4,
    name: 'Lorem Ipsum',
    conversation: '🤢🤮🤮 매우 ??????? 한국어 대화의 예...',
    mbtiId: 2,
    mbti: '🐺 ENFP • 이것명입니다',
    color: '#17CED4',
    gradient: [
      'transparent',
      'rgba(28, 248, 255, 0.1)',
      'rgba(28, 248, 255, 1)',
    ],
    image: require('../../assets/korean4.png'),
  },
  {
    id: 5,
    name: 'Lorem Ipsum',
    conversation: '이것은 매우 🥰 한국어 대화의 예...',
    mbtiId: 1,
    mbti: '🐶 ISFJ • 이것명입니다',
    color: '#9A26FB',
    gradient: [
      'transparent',
      'rgba(154, 38, 251, 0.1)',
      'rgba(154, 38, 251, 1)',
    ],
    image: require('../../assets/korean5.png'),
  },
  {
    id: 6,
    name: 'Lorem Ipsum',
    conversation: '이것은 매우국어 대화의 예.',
    mbtiId: 2,
    mbti: '🐱 ENFP • 이것명입니다',
    color: '#C9B729',
    gradient: [
      'transparent',
      'rgba(255, 233, 49, 0.1)',
      'rgba(255, 233, 49, 1)',
    ],
    image: require('../../assets/korean6.png'),
  },
  {
    id: 7,
    name: 'Lorem Ipsum',
    conversation: 'I guess so but its 👽👽👽...',
    mbtiId: 3,
    mbti: '🐰 ENFP • 이것명입니다',
    color: '#FD7638',
    gradient: [
      'transparent',
      'rgba(253, 118, 56, 0.1)',
      'rgba(253, 118, 56, 1)',
    ],
    image: require('../../assets/korean7.png'),
  },
  {
    id: 8,
    name: 'Lorem Ipsum',
    conversation: '이것은 매우 한국어 대화의 예...',
    mbtiId: 2,
    mbti: '🐺 ENFP • 이것명입니다',
    color: '#17CED4',
    gradient: [
      'transparent',
      'rgba(28, 248, 255, 0.1)',
      'rgba(28, 248, 255, 1)',
    ],
    image: require('../../assets/korean8.png'),
  },
  {
    id: 9,
    name: 'Lorem Ipsum',
    conversation: '이것은 매우 한국어 대화의 예...',
    mbtiId: 1,
    mbti: '🐶 ENFP • 이것명입니다',
    color: '#9A26FB',
    gradient: [
      'transparent',
      'rgba(154, 38, 251, 0.1)',
      'rgba(154, 38, 251, 1)',
    ],
    image: require('../../assets/korean9.png'),
  },
];

const Colors = [
  {
    title: 'istj',
    background: '#17CED4',
  },
  {
    title: 'isfj',
    background: '#FD7638',
  },
  {
    title: 'estj',
    background: '#FFE931',
  },
  {
    title: 'esfj',
    background: '#9A26FB',
  },
];

const Conversations = ({route, navigation}) => {
  const [theme, setTheme] = useState(route.params.theme);
  const AnimatedCircle = Animated.createAnimatedComponent(Circle);
  function getBackgroundColor(theme: string): string | undefined {
    const color = Colors.find(c => c.title === theme);
    return color?.background;
  }

  const progress = useSharedValue(0);

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: CIRCLE_LENGTH * (1 - progress.value),
  }));

  const progressText = useDerivedValue(() => {
    return `${Math.floor(progress.value * 100)}`;
  });

  const onPress = useCallback(() => {
    progress.value = withTiming(progress.value > 0 ? 0 : 1, {duration: 6000});
  }, []);

  onPress();
  const [data, setData] = useState(rawData);

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity key={index} style={styles.bubbleContainer}>
        <Svg style={{position: 'absolute'}}>
          <Circle
            cx={SCREEN_WIDTH * 0.125}
            cy={SCREEN_HEIGHT * 0.0667404419}
            r={R}
            stroke={BACKGROUND_STROKE_COLOR}
            strokeWidth={15}
          />
          <AnimatedCircle
            cx={SCREEN_WIDTH * 0.125}
            cy={SCREEN_HEIGHT * 0.0667404419}
            r={R}
            stroke={getBackgroundColor(theme)}
            strokeWidth={7}
            strokeDasharray={CIRCLE_LENGTH}
            animatedProps={animatedProps}
            strokeLinecap={'round'}
          />
          <Image
            source={item.image}
            style={{
              width: SCREEN_WIDTH * 0.194,
              height: SCREEN_HEIGHT * 0.103903,
              borderRadius: 50,
              marginTop: SCREEN_HEIGHT * 0.0148,
              marginLeft: SCREEN_WIDTH * 0.027,
            }}
          />
        </Svg>
      </TouchableOpacity>
    );
  };
  const viewableItems = useSharedValue<ViewToken[]>([]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <FontAwesomeIcon icon={faBars} size={25} style={{color: '#4F4F4F'}} />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          size={25}
          style={{color: '#4F4F4F'}}
        />
      </View>
      <View style={styles.expiration}>
        <Text style={styles.textTitle}>To activate</Text>
        <FlatList
          style={styles.progressContainer}
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.conversationsContainer}>
        <Text style={styles.textTitle}>Conversations</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.conversationsFlatlist}
          data={data}
          onViewableItemsChanged={({viewableItems: vItems}) => {
            viewableItems.value = vItems;
          }}
          renderItem={({item}) => {
            return (
              <ConversationLoader item={item} viewableItems={viewableItems} />
            );
          }}
        />
      </View>
      <Footer theme={theme} pageId={CONVERSATIONS_CODE} />
    </SafeAreaView>
  );
};

export default Conversations;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  header: {
    paddingLeft: 15,
    paddingRight: 18,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '7%',
  },
  expiration: {
    paddingLeft: 15,
    height: '20%',
  },
  conversationsContainer: {
    paddingLeft: 15,
    paddingRight: 18,
    padding: 10,
    height: '64%',
  },
  conversationsFlatlist: {},
  bubbleContainer: {
    width: 100,
    height: 100,
  },
  textTitle: {
    fontSize: 17,
    color: 'black',
    fontWeight: '700',
    marginBottom: 10,
  },
  progressContainer: {
    paddingTop: 10,
  },
  progressText: {
    fontSize: 10,
    color: 'rgba(256,256,256,0.7)',
    width: 50,
    textAlign: 'center',
  },
});
