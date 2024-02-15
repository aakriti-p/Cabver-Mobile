import {View, Image, Text, TextInput, StyleSheet} from 'react-native';
import ButtonC from '../components/ButtonC';
import {Button} from 'react-native';
import CabverLogo from '../assets/images/cabver_logo.svg';


const Login = ({navigation}) => {
  function onPressHandler(){
    navigation.navigate("Explainer1");
  }
  return (
    <View style={styles.screen}>
      <View style={styles.iconContainer}>
        {/* <Image source={require('../assets/images/group329.png')} /> */}
        <CabverLogo />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>Welcome Back!</Text>
        <Text style={styles.secondTextStyle}>We missed you</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput style={styles.textInput} placeholder="User ID"></TextInput>
        <TextInput style={styles.textInput} placeholder="Password"></TextInput>
      </View>
      <ButtonC>LOGIN</ButtonC>
      <View style={styles.imageContainer}>
        <Text>or</Text>
        {/* <Image source={require('../assets/images/group2.png')} /> */}
      </View>
      <View style={styles.registerContainer}>
        {/* <Image source={require('../assets/images/group111.png')}/> */}
        <Text style={styles.registerText}>Register as an agency</Text>
      </View>
      <Text>Forgot Password?</Text>
      <View style={{marginTop: '5%'}}>
        <Button title="Next" onPress={onPressHandler}></Button>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    padding: '5%',
  },
  iconContainer: {
    marginTop: '20%',
  },
  textContainer: {
    marginTop: '10%',
    alignItems: 'center',
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
    fontWeight: '400',
  },
  formContainer: {
    padding: '10%',
  },
  textInput: {
    padding: '5%',
    backgroundColor: '#d3d3d3',
    borderRadius: 12,
    height: 48,
    width: 300,
    marginTop: '5%',
  },
  imageContainer: {
    marginTop: 20,
    alignItems: 'center',
    padding: 10
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: '3%',
    backgroundColor: '#fff',
    marginTop:'5%',
    marginBottom: '5%',
    height: 48,
    width: 300,
    borderRadius: 12,
    elevation: 1,
    overflow: 'hidden',
    alignItems: 'center',
  },
  registerText: {
    color: '#000',
    fontFamily: 'Muli-Bold',
    fontSize: 14,
    fontWeight: '100'
  }
});
