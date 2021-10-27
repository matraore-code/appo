import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { useFonts } from 'expo-font';


export default function Login() {

    const [loaded] = useFonts(
        {
            'Poppins': require('../assets/fonts/poppins/Poppins-Regular.otf'),
            'Poppins-bold': require('../assets/fonts/poppins/Poppins-Bold.otf'),
            'Poppins-light': require('../assets/fonts/poppins/Poppins-Light.otf'),
            'Poppins-black': require('../assets/fonts/poppins/Poppins-Black.otf'),
        }
    )
    if (!loaded)
    {
        return <Text>Font Invalid</Text>
    }
    else {
        return (
            <View style={styles.container}>
                <Text>Moctar</Text>
            </View>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Poppins',
    },
    title :{
        fontSize: 25,
        textAlign: 'center',
        fontFamily:'Poppins',
        marginTop: 10,
    },
    desc : {
        fontSize: 14,
        textAlign: 'center',
        paddingBottom: 20,
        paddingHorizontal: 10,
        fontFamily: 'Poppins-light'
    },
    login : {
        fontSize: 15,
        textAlign: 'center',
        paddingVertical: 25,
        paddingHorizontal: 3,
        color: '#EC595C',
        fontFamily:'Poppins'
    },
    image: {
        marginVertical: 25,
    }
});
