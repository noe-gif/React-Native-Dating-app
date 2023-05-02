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
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import ContentLoader, {Rect, Circle} from 'react-content-loader/native';
import {useNavigation} from '@react-navigation/native';

type ListItemProps = {
  viewableItems: Animated.SharedValue<ViewToken[]>;
  item: {
    id: number;
  };
};

const ConversationLoader: React.FC<ListItemProps> = React.memo(
  ({viewableItems, item}) => {
    const navigation = useNavigation();

    const rStyle = useAnimatedStyle(() => {
      const isVisible = Boolean(
        viewableItems.value
          .filter(item => item.isViewable)
          .find(viewableItem => viewableItem.item.id === item.id),
      );

      return {
        opacity: withTiming(isVisible ? 1 : 0),
        transform: [
          {
            scale: withTiming(isVisible ? 1 : 0.6),
          },
        ],
      };
    }, []);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      setTimeout(() => {
        setLoading(true);
      }, 1500);
    });

    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('message', {
            currentUserId: 1,
            userId: item.id,
            userPic: item.image,
          });
        }}>
        <Animated.View
          style={[
            {
              width: '100%',
              height: 90,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            },
            rStyle,
          ]}>
          {loading ? (
            <>
              <Image
                source={item.image}
                style={{width: 65, height: 65, borderRadius: 50}}
              />
              <View
                style={{
                  width: '70%',
                  height: '50%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  overflow: 'hidden',
                }}>
                <Text style={{fontSize: 15, color: 'black', fontWeight: '600'}}>
                  김지영
                </Text>
                <Text>{item.conversation}</Text>
              </View>
            </>
          ) : (
            <ContentLoader viewBox="0 2 300 50">
              <Circle cx="30" cy="30" r="30" />
              <Rect x="80" y="17" rx="4" ry="4" width="210" height="13" />
              <Rect x="80" y="40" rx="3" ry="3" width="190" height="10" />
            </ContentLoader>
          )}
        </Animated.View>
      </TouchableOpacity>
    );
  },
);

// const ConversationLoader = ({viewableItems, item, index}) => {
//   const [loading, setLoading] = useState(false);
//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(true);
//     }, 1500);
//   });

//   return (
//     <TouchableOpacity
//       key={index}
//       style={{
//         width: '100%',
//         height: 90,
//         display: 'flex',
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-around',
//       }}>
//       {loading ? (
//         <>
//           <Image
//             source={item.image}
//             style={{width: 65, height: 65, borderRadius: 50}}
//           />
//           <View
//             style={{
//               width: '70%',
//               height: '50%',
//               display: 'flex',
//               justifyContent: 'space-between',
//               overflow: 'hidden',
//             }}>
//             <Text style={{fontSize: 15, color: 'black', fontWeight: '600'}}>
//               김지영
//             </Text>
//             <Text>{item.conversation}</Text>
//           </View>
//         </>
//       ) : (
//         <ContentLoader viewBox="0 2 300 50">
//           <Circle cx="30" cy="30" r="30" />
//           <Rect x="80" y="17" rx="4" ry="4" width="210" height="13" />
//           <Rect x="80" y="40" rx="3" ry="3" width="190" height="10" />
//         </ContentLoader>
//       )}
//     </TouchableOpacity>
//   );
// };

const styles = StyleSheet.create({});

export {ConversationLoader};
