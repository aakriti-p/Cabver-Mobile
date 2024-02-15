import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import CabverLogo from '../assets/images/cabver_logo.svg';
import { useLayoutEffect } from 'react';

const HomeScreen = ({navigation}) => {

  function onPressHandler(){
    navigation.navigate("Confirmation");
  }

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerRight: () => {
        return (<Button title='Tap'/>)
      }
    })
  })

  return (
    <View style={styles.screen}>
      <View style={styles.innerContainer}>
        {/* <Image source={require('../assets/images/group329.png')} /> */}
        <CabverLogo/>
      </View>
      <View style={{'marginTop': '5%'}}>
        <Button title="Next" onPress={onPressHandler}></Button>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    height: 640,
    paddingRight: 58,
    paddingLeft: 57,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  innerContainer: {
    height: 57.7,
    width: 245,
    flexShrink: 0,
  },
  nextButtonContainer: {
    marginLeft: 312,
    marginBottom: '90%',
    marginRight: 19
  }
});
