import { SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Home from './screens/Home';
import MyStatusbar from './components/MyStatusbar';
import Radiobutton from './components/Radiobutton';
import React from 'react';
import { useState } from 'react';
import { PaperProvider } from 'react-native-paper';
import MainAppbar from './components/MainAppbar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Settings from './screens/Settings';
import { StatusBar } from 'expo-status-bar';
import { ThemeContext } from './context/ThemeContext';
import  ThemeProvider  from './context/ThemeProvider';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
      <PaperProvider>
        <ThemeProvider>
        <NavigationContainer>
          <StatusBar backgroundColor='#666' barStyle="light-content"/>
          <Stack.Navigator 
            initialRouteName = 'Home'
            screenOptions ={{header: (props) =>
            <MainAppbar {...props} backgroundColor = "#666" icon = 'cog' color = "#fff"/>
            }}>
            <Stack.Screen name ="Home" component={Home}/>
            <Stack.Screen name= "Settings" component = {Settings} />
         </Stack.Navigator>
      </NavigationContainer>
      </ThemeProvider>
    </PaperProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
