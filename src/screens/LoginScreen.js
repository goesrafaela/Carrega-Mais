import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    Modal,
    TextInput
} from 'react-native';

export default function LoginScreen({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <ImageBackground
            source={require('../assets/logo.png')}
            style={styles.container}
            resizeMode="cover"
        >
            <View style={styles.content}>
                <Text style={styles.title}>Boas Vindas</Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setModalVisible(true)}
                >
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.signupButton}
                    onPress={() => navigation.navigate('CadUsuario')}
                >
                    <Text style={styles.signupText}>
                        Não tem uma conta?{' '}
                        <Text style={styles.signupLink}>
                            Clique aqui.
                        </Text>
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Modal */}
            <Modal
                transparent
                visible={modalVisible}
                animationType="fade"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalBox}>
                        <Text style={styles.modalTitle}>Boas Vindas</Text>

                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            placeholderTextColor="#666"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Senha"
                            placeholderTextColor="#666"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />

                        <TouchableOpacity
                            style={styles.enterButton}
                            onPress={() => {
                                setModalVisible(false);
                                navigation.navigate('Home'); // ou outra tela
                            }}
                        >
                            <Text style={styles.enterButtonText}>Entrar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.closeButtonText}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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
        height: '45%',
        backgroundColor: '#20A8BB',
        padding: 20,
        alignItems: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 80,
    },
    button: {
        backgroundColor: '#fff',
        paddingVertical: 12,
        paddingHorizontal: 50,
        borderRadius: 8,
        marginBottom: 10,
    },
    buttonText: {
        color: '#007C80',
        fontSize: 16,
        fontWeight: 'bold',
    },
    signupText: {
        color: '#fff',
        marginTop: 30,
    },
    signupLink: {
        fontWeight: 'bold',
        color: '#104052'
    },
    signupButton: {
        alignItems: 'center',
        marginBottom: 20,
    },

    // estilos do modal
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.86)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalBox: {
        width: '85%',
        backgroundColor: '#20A8BB',
        borderRadius: 20,
        padding: 25,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffff',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
        backgroundColor: '#f9f9f9',
    },
    enterButton: {
        backgroundColor: '#114660',
        paddingVertical: 12,
        paddingHorizontal: 50,
        borderRadius: 10,
        marginBottom: 15,
    },
    enterButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    closeButton: {
        paddingVertical: 10,
        paddingHorizontal: 40,
    },
    closeButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
