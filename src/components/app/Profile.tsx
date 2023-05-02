import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Dimensions} from 'react-native';
import Footer from './Footer';
import Header from './Header';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const PROFILE_CODE = 1;

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Text>Profile</Text>
      <Footer pageId={PROFILE_CODE} />
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
