import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MotoristasScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>🛻 Motoristas Próximos</Text>
            <Text style={styles.text}>Lista de motoristas disponíveis aparecerá aqui.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F4F9FA' },
    title: { fontSize: 24, fontWeight: 'bold', color: '#104052', marginBottom: 10 },
    text: { fontSize: 16, color: '#666' },
});
