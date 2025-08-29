import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

export default function CadEnd({ navigation }) {
    const [end, setEnd] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');

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
                    placeholder="Endereço"
                    placeholderTextColor="#555"
                    value={end}
                    onChangeText={setEnd}
                />

                <TextInput
                    style={styles.inputNum}
                    placeholder="Número"
                    placeholderTextColor="#555"
                    value={numero}
                    onChangeText={setNumero}
                    keyboardType="phone-pad"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Complemento"
                    placeholderTextColor="#555"
                    value={complemento}
                    onChangeText={setComplemento}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Bairro"
                    placeholderTextColor="#555"
                    value={bairro}
                    onChangeText={setBairro}

                />

                <TextInput
                    style={styles.input}
                    placeholder="Cidade"
                    placeholderTextColor="#555"
                    value={cidade}
                    onChangeText={setCidade}

                />
                <TextInput
                    style={styles.input}
                    placeholder="Estado"
                    placeholderTextColor="#555"
                    value={estado}
                    onChangeText={setEstado}

                />

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Confirmacao')}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#007C80',
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
        alignSelf: 'center',
    },
    input: {
        width: '80%',
        alignSelf: 'flex-start',
        backgroundColor: '#E0E0E0',
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingVertical: 12,
        marginBottom: 15,
        fontSize: 16,
        color: '#000',
    },
    inputNum: {
        width: '40%',
        alignSelf: 'flex-start',
        backgroundColor: '#E0E0E0',
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
