import {View, Text, StyleSheet, Button} from 'react-native';
import Building from '../assets/images/building.svg';
import Loading from '../assets/images/loading.svg';

const Explainer2 = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Building />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>consequat sunt pariatur</Text>
        <Text style={styles.secondTextStyle}>
          Occaecat nostrud adipisicing quis consectetur minim magna aute id
          deserunt occaecat anim occaecat elit dolor. Veniam tempor cupidatat
          est id duis excepteur anim fugiat.{' '}
        </Text>
      </View>
      <View>
        <Loading />
      </View>
      {/* <View style={{'marginTop': '5%'}}>
        <Button title='Next' onPress={onPressHandler}></Button>
      </View> */}
    </View>
  );
};

export default Explainer2;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    padding: '5%',
  },
  textContainer: {
    padding: '5%',
  },
  imageContainer: {},
  textStyle: {
    color: '#5280E1',
    fontFamily: 'Montserrat-Bold',
    fontSize: 28,
    fontWeight: '700',
  },
  secondTextStyle: {
    color: '#505050',
    fontFamily: 'Muli-Bold',
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'justify',
    marginTop: '3%',
  },
});
