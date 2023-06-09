import {StyleSheet, Platform, StatusBar} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#9A26FB',
  },
  text: {
    backgroundColor: 'black',
    textAlign: 'center',
    marginHorizontal: 35,
    color: 'white',
    lineHeight: 20,
    fontSize: 12,
    marginBottom: 5,
  },
  bottomSheetTextTitle: {
    fontWeight: '900',
    color: 'black',
    fontSize: 20,
    marginBottom: 5,
    textAlign: 'left',
  },
  bottomSheetText: {
    color: '#B3B3B3',
    lineHeight: 20,
    fontSize: 12,
    marginBottom: 5,
    textAlign: 'left',
  },
  textSmall: {
    width: 'auto',
    backgroundColor: 'black',
    textAlign: 'center',
    marginHorizontal: 35,
    color: 'white',
    lineHeight: 20,
    fontSize: 12,
    marginBottom: 5,
  },
  button: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonBottomSheet: {
    width: width * 0.9,
    backgroundColor: '#9A26FB',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {fontSize: 16, fontWeight: '600', color: 'black'},
  logginButton: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  bottomSheetWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    textAlign: 'left',
    padding: height * 0.05,
  },
});
