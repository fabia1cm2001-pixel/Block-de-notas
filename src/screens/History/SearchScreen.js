import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function SearchScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Buscar Notas</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});