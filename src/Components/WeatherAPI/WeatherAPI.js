import React, { useState } from 'react';
import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const WeatherAPI = () => {
    const [location, setLocation] = useState('');
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    const handleSearch = async () => {
        if (location.trim() === '') {
            alert('Digite um local!');
        } else {
            try {
                const apiKey = '3d39b3bf7c8b446193924520232412';
                const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`);
                const data = await response.json();

                setCelsius(JSON.stringify(data.current.temp_c));
                setFahrenheit(JSON.stringify(data.current.temp_f));
            } catch (error) {
                console.error('Erro na chamada da API:', error);
            }
        }
    };

    const handleClear = () => {
        setLocation('');
        setCelsius('');
        setFahrenheit('');
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

            {celsius !== '' && fahrenheit !== '' && (
                <View style={styles.resultContainer}>
                    <Text style={styles.resultText}>Temperatura em Celsius: {celsius}</Text>
                    <Text style={styles.resultText}>Temperatura em Fahrenheit: {fahrenheit}</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        paddingHorizontal: 10,
        marginBottom: 10,
        marginTop: 100,
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
    resultContainer: {
        marginTop: 20,
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 10,
    },
    resultText: {
        color: 'black',
        textAlign: 'center',
    },
});

export default WeatherAPI;
