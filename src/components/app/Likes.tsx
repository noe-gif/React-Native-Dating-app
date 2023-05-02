import React, {useState} from 'react';
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
} from 'react-native';
import Footer from './Footer';
import Header from './Header';
import Ripple from './Ripple';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {MotiView} from 'moti';
import LinearGradient from 'react-native-linear-gradient';
import ContentLoader, {Rect, Circle} from 'react-content-loader/native';

const rawData = [
  {
    id: 1,
    name: 'Lorem Ipsum',
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

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const LIKES_CODE = 3;

const Likes = ({route, navigation}) => {
  const {theme} = route.params;
  const [filterSelected, setFilterSelected] = useState([
    true,
    false,
    false,
    false,
  ]);
  const [data, setData] = useState(rawData);
  const userMbtiId = 1;
  const filterMatchesFromMbti = () => {
    const filteredArray = rawData.filter(item => userMbtiId === item.mbtiId);
    setData(filteredArray);
  };
  const filterMatchesFromRecent = () => {
    const filteredArray = rawData.filter(item => item.id >= 5);
    setData(filteredArray);
  };
  const filterMatchesFromLocation = () => {
    const filteredArray = rawData.filter(item => item.id <= 2);
    setData(filteredArray);
  };

  const renderItem = ({item, index}) => {
    return (
      <MotiView
        style={styles.listContainer}
        from={{opacity: 0, translateY: 50}}
        animate={{opacity: 1, translateY: 0}}
        transition={{delay: 100 + index * 200}}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.image} />
        </View>
        <LinearGradient
          colors={item.gradient}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            borderRadius: 5,
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
            <View style={{width: 'auto'}}>
              <Text
                style={{
                  fontSize: 15,
                  color: '#FFF',
                  fontWeight: '600',
                  textShadowColor: 'black',
                  textShadowRadius: 1,
                  textShadowOffset: {
                    width: 1,
                    height: 1,
                  },
                }}>
                김지영 (21)
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  color: '#FFF',
                  fontWeight: '600',
                  textShadowColor: 'black',
                  textShadowRadius: 1,
                  textShadowOffset: {
                    width: 1,
                    height: 1,
                  },
                }}>
                이것은 설명입니다
              </Text>
            </View>
            <View
              style={{
                width: '90%',
                height: '30%',
                backgroundColor: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
              }}>
              <Text
                style={{
                  fontSize: 10,
                  color: item.color,
                  fontWeight: '600',
                }}>
                {item.mbti}
              </Text>
            </View>
          </View>
        </LinearGradient>
      </MotiView>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#FFF'} />

      <View
        style={{
          height: 70,
          paddingLeft: 10,
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
        }}>
        <Text
          style={{
            fontSize: 35,
            color: 'black',
            fontWeight: '700',
          }}>
          Discover
        </Text>
      </View>
      <GestureHandlerRootView>
        <View
          style={{
            width: '100%',
            height: 50,
            display: 'flex',
            flexDirection: 'row',
            paddingLeft: 10,
            paddingRight: 10,
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            borderBottomWidth: 1,
            borderBottomColor: '#E1E1E1',
          }}>
          <Ripple
            style={
              filterSelected[0]
                ? styles.buttonContainerSelected
                : styles.buttonContainer
            }
            onTap={() => {
              setFilterSelected([true, false, false, false]);
              setData(rawData);
              // navigation.navigate(item.destination);
            }}>
            <Text
              style={
                filterSelected[0]
                  ? styles.buttonContainerSelectedText
                  : {textAlign: 'center'}
              }>
              All user
            </Text>
          </Ripple>
          <Ripple
            style={
              filterSelected[1]
                ? styles.buttonContainerSelected
                : styles.buttonContainer
            }
            onTap={() => {
              setFilterSelected([false, true, false, false]);
              filterMatchesFromMbti();
              // navigation.navigate(item.destination);
            }}>
            <View
              style={{
                width: 5,
                height: 5,
                position: 'absolute',
                borderRadius: 50,
                backgroundColor: 'red',
                right: 0,
              }}
            />
            <Text
              style={
                filterSelected[1]
                  ? styles.buttonContainerSelectedText
                  : {textAlign: 'center'}
              }>
              My mbti
            </Text>
          </Ripple>
          <Ripple
            style={
              filterSelected[2]
                ? styles.buttonContainerSelected
                : styles.buttonContainer
            }
            onTap={() => {
              setFilterSelected([false, false, true, false]);
              filterMatchesFromRecent();
              // navigation.navigate(item.destination);
            }}>
            <Text
              style={
                filterSelected[2]
                  ? styles.buttonContainerSelectedText
                  : {textAlign: 'center'}
              }>
              New
            </Text>
          </Ripple>
          <Ripple
            style={
              filterSelected[3]
                ? styles.buttonContainerSelected
                : styles.buttonContainer
            }
            onTap={() => {
              setFilterSelected([false, false, false, true]);
              filterMatchesFromLocation();
              // navigation.navigate(item.destination);
            }}>
            <Text
              style={
                filterSelected[3]
                  ? styles.buttonContainerSelectedText
                  : {textAlign: 'center'}
              }>
              Nearby
            </Text>
          </Ripple>
        </View>
      </GestureHandlerRootView>
      <View
        style={{
          height: '73%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'center',
          paddingLeft: 6,
        }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <Footer theme={theme} pageId={LIKES_CODE} />
    </SafeAreaView>
  );
};

export default Likes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
  },
  buttonContainer: {
    width: 70,
    height: 40,
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
  },
  buttonContainerSelected: {
    width: 70,
    height: 40,
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    // iOS
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 20,
    // Android
    // elevation: 2,
    borderBottomWidth: 3,
    borderBottomColor: '#9A26FB',
  },
  buttonContainerSelectedText: {
    color: '#9A26FB',
    textAlign: 'center',
  },
  listContainer: {
    width: Dimensions.get('window').width / 2 - 10,
    borderRadius: 5,
    margin: 2,
    marginTop: 5,
  },
  imageContainer: {
    borderRadius: 10,
  },
  image: {width: '100%', height: 250, borderRadius: 5},
});
