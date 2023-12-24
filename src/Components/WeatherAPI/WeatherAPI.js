import React, { useState } from 'react';
import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const WeatherAPI = () => {
    const [location, setLocation] = useState('');

    const handleSearch = () => {
        if (location.trim() === '') {
            alert('Digite um local!');
        } else {
            // Adicione a lógica de busca na API de previsão do tempo aqui
            alert(`Buscando previsão para ${location}`);
        }
    };

    const handleClear = () => {
        setLocation('');
    };

    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/bg1.jpg')} style={styles.backgroundImage} />

            <TextInput
                style={styles.input}
                placeholder="Digite o local"
                value={location}
                onChangeText={(text) => setLocation(text)}
            />

            <TouchableOpacity style={styles.button} onPress={handleSearch}>
                <Text style={styles.buttonText}>Procurar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleClear}>
                <Text style={styles.buttonText}>Limpar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center', // Remova justifyContent: 'center'
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
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        paddingHorizontal: 10,
        marginBottom: 10,
        marginTop: 100, // Ajuste conforme necessário para posicionar o TextInput
    },
    button: {
        backgroundColor: 'green',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginBottom: 10,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
});

export default WeatherAPI;
