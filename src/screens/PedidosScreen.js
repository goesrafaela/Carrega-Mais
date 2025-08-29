import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PedidosScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>📦 Meus Pedidos</Text>
            <Text style={styles.text}>Lista de pedidos feitos aparecerá aqui.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F4F9FA' },
    title: { fontSize: 24, fontWeight: 'bold', color: '#104052', marginBottom: 10 },
    text: { fontSize: 16, color: '#666' },
});
