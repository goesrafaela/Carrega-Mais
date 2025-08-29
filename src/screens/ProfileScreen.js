import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';

export default function ProfileScreen({ navigation }) {
    return (
        <ImageBackground
            source={require('../assets/logo.png')}
            style={styles.container}
            resizeMode="cover"
        >
            <View style={styles.content}>
                {/* Foto e nome do usuário */}
                <Image
                    source={{ uri: 'https://i.pravatar.cc/150?img=3' }} // mock de avatar
                    style={styles.avatar}
                />
                <Text style={styles.name}>João da Silva</Text>
                <Text style={styles.info}>joao@email.com</Text>
                <Text style={styles.info}>+55 (11) 98765-4321</Text>

                {/* Botões */}
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Editar Perfil</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PedidosScreen')}>
                    <Text style={styles.buttonText}>Meus Pedidos</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, styles.logoutButton]}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.logoutText}>Sair</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    content: {
        width: '100%',
        height: '70%',
        backgroundColor: '#20A8BB',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: 'center',
        padding: 20,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 15,
        borderWidth: 2,
        borderColor: '#fff',
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 5,
    },
    info: {
        fontSize: 14,
        color: '#f0f0f0',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#fff',
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 8,
        marginTop: 15,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#007C80',
        fontSize: 16,
        fontWeight: 'bold',
    },
    logoutButton: {
        backgroundColor: '#104052',
    },
    logoutText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
