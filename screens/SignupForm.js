import { View, Image,Text, StyleSheet } from 'react-native';
import Form from '../components/Form';
import ButtonC from '../components/ButtonC';
import { Button } from 'react-native';
import CabverLogo from '../assets/images/cabver_logo.svg';


const SignupForm = ({navigation}) => {
  function onPressHandler(){
    navigation.navigate("Login");
  }
  return (
    <View style={styles.screen}>
      <View style={styles.iconContainer}>
        {/* <Image source={require('../assets/images/group329.png')} /> */}
        <CabverLogo />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>Hi There!</Text>
        <Text style={styles.secondTextStyle}>Let's get to know each other</Text>
        <Text style={styles.thirdTextStyle}>We will reach you to process your request.</Text>
      </View>  
      <Form/>
      <ButtonC>SUBMIT</ButtonC>
      <View style={{'marginTop': '5%'}}>
        <Button title='Next' onPress={onPressHandler}></Button>
      </View>
    </View>
  )
}

export default SignupForm;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    padding: '5%'
  },
  iconContainer: {
    marginTop: '20%'
  },
  textContainer: {
    marginTop: '10%',
    alignItems: 'center'
  },
  textStyle: {
    fontFamily: 'Montserrat-Bold',
    color: '#5280E1',
    fontSize: 18,
  },
  secondTextStyle: {
    fontFamily: 'Muli-Bold',
    color: '#323232',
    fontSize: 14,
    fontWeight: '400'
  },
  thirdTextStyle: {
    fontFamily: 'Muli-Bold',
    color: '#505050',
    fontSize: 14,
    fontWeight: '400',
    marginTop: '10%'
  }
})