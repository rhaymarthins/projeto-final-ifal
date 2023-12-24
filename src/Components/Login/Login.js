// Importe os componentes necessários do React Native
import React, { useState } from 'react';
import { View, ImageBackground, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();  // Declare a constante aqui

    const handleLogin = () => {
        // Navegue para a página da API
        navigation.navigate('PaginaDaAPI');
    };

    return (
        <ImageBackground source={require('../../../assets/bg1.jpg')} style={styles.backgroundImage}>
            <View style={styles.container}>

                {/* Dois TextInput para nome de usuário e senha */}
                <TextInput
                    style={styles.input}
                    placeholder="Nome de Usuário"
                    onChangeText={(text) => setUsername(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                />

                {/* Dois botões para entrar e cadastrar (ainda não implementado) */}
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => console.log("Cadastro Pressionado")}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

// Estilos para os componentes
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        resizeMode: 'cover',
    },
    input: {
        height: 40,
        width: '80%',
        backgroundColor: 'white',
        marginBottom: 10,
        paddingLeft: 10,
        borderRadius: 5,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
});

export default LoginScreen;
