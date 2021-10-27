import React from 'react';
import { StyleSheet, Text, View, Pressable, Alert } from 'react-native';
import { useFonts } from 'expo-font';



const Stack = createNativeStackNavigator();


export default function Btn({navigation}) {


    const [loaded] = useFonts(
        {
            'Poppins': require('../../assets/fonts/poppins/Poppins-Regular.otf'),
            'Poppins-bold': require('../../assets/fonts/poppins/Poppins-Bold.otf'),
            'Poppins-light': require('../../assets/fonts/poppins/Poppins-Light.otf'),
        }
    )
    return (
        <Pressable 
        style={styles.btn}
        
        >
            <Text style={styles.text}>Créer un compte</Text>
        </Pressable>
    );
  }
  

const styles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 100,
        borderRadius: 20,
        elevation: 1,
        backgroundColor: '#EC595C',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: 'white',
        fontFamily:'Poppins-bold'
    }
  });
  