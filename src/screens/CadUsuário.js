import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

export default function CadUsuario({ navigation }) {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');

    const formatTelefone = (text) => {
        let cleaned = text.replace(/\D/g, '');
        if (cleaned.length > 10) {
            cleaned = cleaned.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
        } else if (cleaned.length > 5) {
            cleaned = cleaned.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
        } else if (cleaned.length > 2) {
            cleaned = cleaned.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
        } else {
            cleaned = cleaned.replace(/^(\d*)/, '($1');
        }
        setTelefone(cleaned);
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            style={{ flex: 1 }}
        >
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.appTitle}>
                    Carrega
                    <Text style={styles.plus}>+</Text>
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    placeholderTextColor="#555"
                    value={nome}
                    onChangeText={setNome}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Telefone"
                    placeholderTextColor="#555"
                    value={telefone}
                    onChangeText={formatTelefone}
                    keyboardType="phone-pad"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#555"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor="#555"
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry
                />

                <TextInput
                    style={styles.input}
                    placeholder="Confirmar senha"
                    placeholderTextColor="#555"
                    value={confirmaSenha}
                    onChangeText={setConfirmaSenha}
                    secureTextEntry
                />

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CadEnd')}>
                    <Text style={styles.buttonText}>Próximo</Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#007C80', // cor de fundo azul
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    plus: {
        color: '#114660',
    },
    appTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 30,
    },
    input: {
        width: '80%',
        backgroundColor: '#E0E0E0', // fundo claro
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingVertical: 12,
        marginBottom: 15,
        fontSize: 16,
        color: '#000',
    },
    button: {
        backgroundColor: '#004D52',
        borderRadius: 8,
        paddingVertical: 11,
        width: '60%',
        alignItems: 'center',
        marginTop: 25,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
