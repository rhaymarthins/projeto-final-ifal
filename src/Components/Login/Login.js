// Login.js
import React, { useState } from 'react';
import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation(); // Use useNavigation aqui

    const handleLogin = () => {
        // Adicione a lógica de autenticação aqui
        // Navegue para a tela da API independentemente do resultado da autenticação
        navigation.navigate('WeatherApi', { apiKey: '3d39b3bf7c8b446193924520232412' });
    };

    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/bg1.jpg')} style={styles.backgroundImage} />

            <TextInput
                style={styles.input}
                placeholder="Usuário"
                onChangeText={(text) => setUsername(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => console.log("Cadastro Pressionado")}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    input: {
        height: 40,
        width: '80%',
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        paddingHorizontal: 10,
        marginBottom: 10,
        color: 'white',
    },
    button: {
        backgroundColor: 'blue',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
});

export default LoginScreen;
