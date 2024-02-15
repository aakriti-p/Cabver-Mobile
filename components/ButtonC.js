import {View, Text, StyleSheet} from 'react-native';

const ButtonC = (props) => {
  return (
    <View style={styles.button}>
      <Text style={styles.buttonTextStyle}>{props.children}</Text>
    </View>
  );
};

export default ButtonC;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 80,
    backgroundColor: '#5280E1',
    fontWeight: 'bold',
    borderRadius: 12,
    marginTop: '5%',
  },
  buttonTextStyle: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    fontWeight: '700',
  },
});
