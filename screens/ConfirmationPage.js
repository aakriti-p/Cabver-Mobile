import {View, Button, StyleSheet, Image, Text} from 'react-native';
import ButtonC from '../components/ButtonC';
import CabverLogo from '../assets/images/cabver_logo.svg';
import Tick from '../assets/images/tick.svg';

const ConfirmationPage = ({navigation}) => {

  function onPressHandler(){
    navigation.navigate("Signup");
  }

  return (
    <View style={styles.screen}>
      <View style={styles.iconContainer}>
        {/* <Image source={require('../assets/images/group329.png')} /> */}
        <CabverLogo />
      </View>
      <View style={styles.tickContainer}>
        {/* <Image style={styles.tick} source={require('../assets/images/group264.png')} /> */}
        <Tick />
      </View>
      <Text style={styles.firsttextStyle}>Your request has been submitted</Text>
      <Text>We'll be in touch with you soon</Text>
      <ButtonC>BACK</ButtonC>
      <View style={{'marginTop': '5%'}}>
        <Button title="Next" onPress={onPressHandler}></Button>
      </View>
    </View>
  );
};

export default ConfirmationPage;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 80,
    backgroundColor: '#5280E1',
    fontWeight: 'bold',
    borderRadius: 12,
    marginTop: '10%'
  },
  screen: {
    flex: 1,
    alignItems: 'center',
    padding: '5%'
  },
  iconContainer: {
    marginTop: '20%'
  },
  tickContainer: {
    marginTop: '25%',
    marginBottom: '20%'
  },
  tick: {
    width: 120,
    height: 120,
    flexShrink: 0
  },
  firsttextStyle: {
    color: '#323232',
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
  },
});
