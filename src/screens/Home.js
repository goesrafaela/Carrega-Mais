import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.logo}>Carrega<Text style={styles.plus}>+</Text></Text>
                <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
                    <Text style={styles.profile}>👤</Text>
                </TouchableOpacity>
            </View>


            <Text style={styles.welcome}>Olá, Usuário 👋</Text>
            <Text style={styles.subtitle}>Escolha como deseja continuar</Text>


            <View style={styles.actions}>
                <TouchableOpacity
                    style={styles.card}
                    onPress={() => navigation.navigate('SolicitarScreen')}
                >
                    <Text style={styles.cardIcon}>🚚</Text>
                    <Text style={styles.cardText}>Solicitar Transporte</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.card}
                    onPress={() => navigation.navigate('PedidosScreen')}
                >
                    <Text style={styles.cardIcon}>📦</Text>
                    <Text style={styles.cardText}>Meus Pedidos</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.card}
                    onPress={() => navigation.navigate('MotoristasScreen')}
                >
                    <Text style={styles.cardIcon}>🛻</Text>
                    <Text style={styles.cardText}>Motoristas Próximos</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#107D92',
        paddingHorizontal: 20,
        paddingTop: 50
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30
    },
    logo: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#fff'
    },
    plus: {
        color: '#114660'
    },
    profile: {
        fontSize: 24,
    },
    welcome: {
        fontSize: 22,
        fontWeight: '600',
        color: '#fff'
    },
    subtitle: {
        fontSize: 16,
        color: '#ffff',
        marginBottom: 30
    },
    actions: {
        gap: 20
    },
    card: {
        backgroundColor: '#20A8BB',
        padding: 25,
        borderRadius: 20,
        alignItems: 'center'
    },
    cardIcon: {
        fontSize: 28,
        marginBottom: 8
    },
    cardText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff'
    },
});
