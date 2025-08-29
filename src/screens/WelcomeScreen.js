import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('Login'); // leva para a tela de login
    };

    return (
        <TouchableOpacity style={{ flex: 1 }} onPress={handlePress} activeOpacity={1}>
            <ImageBackground
                source={require('../assets/logo.png')} // mesma imagem que já usou
                style={styles.background}
                resizeMode="cover"
            >
                <View style={styles.textContainer}>
                    <Text style={styles.title}>
                        Carrega
                        <Text style={styles.plus}>+</Text>
                    </Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    textContainer: {
        alignSelf: 'center',
        bottom: 120,
        position: 'absolute',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#fff',
    },
    plus: {
        color: '#114660',
    },
});
