import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ConfirmScreen({ navigation }) {
    return (
        <View style={styles.container}>
            {/* Nome do app no topo */}
            <Text style={styles.appName}>
                Carrega
                <Text style={styles.plus}>+</Text>
            </Text>

            {/* Mensagem de confirmação */}
            <View style={styles.messageContainer}>
                <Text style={styles.messageTitle}>Obrigada por se cadastrar</Text>
                <Text style={styles.messageText}>
                    Confirme o email que enviamos{'\n'}
                    para ativar a conta!
                </Text>
            </View>

            {/* Botão de Entrar */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 124, 128, 0.95)',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 60,
    },
    appName: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#fff',
    },
    plus: {
        color: '#114660',
    },
    messageContainer: {
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    messageTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
        textAlign: 'center',
    },
    messageText: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        lineHeight: 24,
    },
    button: {
        backgroundColor: '#fff',
        paddingVertical: 16,
        paddingHorizontal: 80,
        borderRadius: 10,
    },
    buttonText: {
        color: '#007C80',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
