import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ConfirmationPage from './screens/ConfirmationPage';
import SignupForm from './screens/SignupForm';
import Login from './screens/Login';
import Explainer1 from './screens/Explainer1';
import Explainer2 from './screens/Explainer2';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" hidden={false} />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen 
            name="Confirmation" 
            component={ConfirmationPage} />
          <Stack.Screen name="Signup" component={SignupForm}/>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Explainer1" component={Explainer1}/>
          <Stack.Screen name="Explainer2" component={Explainer2}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;

