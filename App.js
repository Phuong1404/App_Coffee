import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Tabs from './component/bottomNavigation/bottomBar.component'
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  return (
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
  );
}

