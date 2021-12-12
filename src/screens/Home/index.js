import React from 'react';
import {
    View, 
    ImageBackground, 
    Text, 
    Pressable,
} from 'react-native';
import styles from './styles'
import { Feather } from '@expo/vector-icons';

const HomeScreen = (props) => {
    return (
        <View>
            <Pressable
                    style={styles.searchButton}
                    onPress={() => console.warn('searchButton has been clicked')}
                >
                    <Feather name="search" size={24} color="#f15454" />
                    <Text style={styles.searchButtonText}> Where are you going</Text>
                    
            </Pressable>

            <ImageBackground 
                source={require('../../../assests/images/wallpaper.jpg')} 
                style={styles.image}
            >
                <Text style={styles.title}>Go Near</Text>

                <Pressable
                    style={styles.button}
                    onPress={() => console.warn('Explore Btn clicked')}
                >
                    
                    <Text style={styles.buttonText}>Explore nearby stays</Text>
                    
                </Pressable>
            </ImageBackground>
        </View>
    );
};

export default HomeScreen;