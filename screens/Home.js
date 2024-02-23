import {View, Text} from 'react-native';
import React from 'react';
import useTheme from '../context/useTheme';
import Styles from '../Styles';


export default function Home() {
    const {isDarkMode} = useTheme()
    return (
        <View style={[Styles.container,isDarkMode ? Styles.dark : Styles.light]}>
        <Text Style ={isDarkMode ? Styles.dark : Styles.light}>Home</Text>
        </View>
    );
}
