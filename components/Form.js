import {View, TextInput, StyleSheet} from 'react-native';

const Form = () => {
  return (
    <View style={styles.formContainer}>
      <TextInput style={styles.textInput} placeholder="Name"></TextInput>
      <TextInput style={styles.textInput} placeholder="Agency"></TextInput>
      <TextInput style={styles.textInput} placeholder="Mobile"></TextInput>
      <TextInput style={styles.textInput} placeholder="Email"></TextInput>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
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
});
