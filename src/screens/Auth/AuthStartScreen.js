import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { screens } from '../../utils';

export function AuthStartScreen() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bloc de Notas</Text>
            <Text style={styles.subtitle}>Organiza tus ideas</Text>
            <Button title="Iniciar sesión" onPress={() => navigation.navigate(screens.auth.loginScreen)} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#1e40af',
    },
    subtitle: {
        fontSize: 18,
        color: '#666',
    },
});